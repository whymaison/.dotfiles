#!/usr/bin/env bash
#
# bootstrap.sh — reproduce this CachyOS/KDE Plasma laptop from scratch
#
# One-time fetch of dotfiles content (not kept as a syncable repo going
# forward) plus key packages, Tailscale, Syncthing, SMB automount, and KDE
# theming.
#
#   bash <(curl -sL https://raw.githubusercontent.com/yourname/dotfiles/main/bootstrap.sh)
#
# Run as your normal user (not root) — it will sudo where needed.

set -euo pipefail

# ---------- CONFIG — edit these for your setup ----------
DOTFILES_REPO="https://github.com/whymaison/.dotfiles.git"

PACMAN_LIST="$HOME/.dotfiles-meta/packages-pacman.txt"
AUR_LIST="$HOME/.dotfiles-meta/packages-aur.txt"

SMB_UNITS_SRC="$HOME/.dotfiles-meta/systemd"   # dir in your dotfiles holding the .mount/.automount/.service files
SMB_UNITS=("mnt-smb-mwnServerShare.mount" "mnt-smb-mwnServerShare.automount")  # edit to your actual unit filenames
SMB_CREDS_SRC="$HOME/.dotfiles-meta/samba"      # credentials file as it lives in the repo
SMB_CREDS="/etc/samba/smb-credentials"          # where it needs to end up: root-owned, 600

SYNCTHING_CONFIG_SRC="$HOME/.dotfiles-meta/syncthing/config.xml"   # folders/devices only — device identity is per-machine
SYNCTHING_STATE_DIR="$HOME/.local/state/syncthing"                # default config/state location since Syncthing 1.27

FIREFOX_USERJS_SRC="$HOME/.dotfiles-meta/firefox-user.js"

WALLPAPER_PATH="$HOME/.dotfiles-meta/homescreen.jpg"
LOCKSCREEN_WALLPAPER_PATH="$HOME/.dotfiles-meta/lockscreen.jpg"
SDDM_THEME="breeze"   # check yours: grep -i '^Current' /etc/sddm.conf.d/*.conf 2>/dev/null
SDDM_BACKGROUND_SYS="/usr/share/sddm/backgrounds/wallpaper.jpg"   # system-wide copy sddm user can actually read
LOOK_AND_FEEL="Transparent Nordic with Breeze stuff"   # the *folder name* under ~/.local/share/plasma/look-and-feel/ for your
                             # "Transparent Nordic with Breeze stuff" theme, NOT its display name —
                             # run: ls ~/.local/share/plasma/look-and-feel/
COLOR_SCHEME="NordicDarker"                    # `plasma-apply-colorscheme --list-schemes`
# ----------------------------------------------------------

echo "==> Ensuring git and rsync are present"
command -v git &>/dev/null || sudo pacman -S --needed --noconfirm git
command -v rsync &>/dev/null || sudo pacman -S --needed --noconfirm rsync

echo "==> Fetching dotfiles (one-time, not kept as a live repo)"
# Everything below (package lists, systemd units, wallpapers) comes from
# this, so it has to run first.
TMP_CHECKOUT="$(mktemp -d)"
git clone --separate-git-dir="$HOME/.dotfiles" "$DOTFILES_REPO" "$TMP_CHECKOUT"
rsync -a --exclude '.git' "$TMP_CHECKOUT"/ "$HOME"/
rm -rf "$TMP_CHECKOUT"

echo "==> Updating system"
sudo pacman -Syu --noconfirm

echo "==> Checking for yay (AUR helper)"
if ! command -v yay &>/dev/null; then
  # CachyOS ships with yay by default; this is just a fallback.
  sudo pacman -S --needed --noconfirm base-devel git
  git clone https://aur.archlinux.org/yay.git /tmp/yay
  (cd /tmp/yay && makepkg -si --noconfirm)
fi

echo "==> Installing packages"
[ -f "$PACMAN_LIST" ] && cat "$PACMAN_LIST" | sudo pacman -S --needed --noconfirm -
[ -f "$AUR_LIST" ] && yay -S --needed --noconfirm - < "$AUR_LIST"

echo "==> Applying Firefox user.js"
if [ -f "$FIREFOX_USERJS_SRC" ] && command -v firefox &>/dev/null; then
  command -v python3 &>/dev/null || sudo pacman -S --needed --noconfirm python

  FF_PROFILES_INI="$HOME/.mozilla/firefox/profiles.ini"
  if [ ! -f "$FF_PROFILES_INI" ]; then
    # -no-remote + -CreateProfile creates the profile and registers it in
    # profiles.ini without ever opening a browser window.
    firefox -no-remote -CreateProfile "default-release"
  fi

  FF_PROFILE_DIR=$(python3 - <<'PY'
import configparser, os
cfg = configparser.ConfigParser()
cfg.read(os.path.expanduser("~/.mozilla/firefox/profiles.ini"))
path = None
for s in cfg.sections():
    if s.startswith("Profile"):
        if cfg.get(s, "Default", fallback="0") == "1":
            path = cfg.get(s, "Path", fallback=None)
            break
        path = path or cfg.get(s, "Path", fallback=None)
if path:
    print(path)
PY
)
  if [ -n "$FF_PROFILE_DIR" ]; then
    cp "$FIREFOX_USERJS_SRC" "$HOME/.mozilla/firefox/$FF_PROFILE_DIR/user.js"
  else
    echo "    !! Could not locate a Firefox profile — run Firefox once, then re-run this section."
  fi
fi

echo "==> Installing Tailscale"
sudo pacman -S --needed --noconfirm tailscale
sudo systemctl enable --now tailscaled
echo "    Run 'sudo tailscale up' manually to authenticate this device."

echo "==> Installing Syncthing"
sudo pacman -S --needed --noconfirm syncthing

if [ -f "$SYNCTHING_CONFIG_SRC" ]; then
  mkdir -p "$SYNCTHING_STATE_DIR"
  cp "$SYNCTHING_CONFIG_SRC" "$SYNCTHING_STATE_DIR/config.xml"
  echo "    Folders/devices restored from config.xml. This machine gets its own"
  echo "    device identity — approve it from another device's Syncthing web UI"
  echo "    once it's running (one-time, like 'tailscale up')."
else
  echo "    !! $SYNCTHING_CONFIG_SRC not found — starting with a blank config;"
  echo "       add config.xml there to restore your folders/devices automatically."
fi

# User service, not system — Syncthing runs in your desktop session here.
systemctl --user enable --now syncthing.service
echo "    Syncthing GUI: http://localhost:8384"

echo "==> Setting up SMB mount (systemd units over Tailscale)"
sudo pacman -S --needed --noconfirm cifs-utils

if [ -f "$SMB_CREDS_SRC" ]; then
  sudo mkdir -p "$(dirname "$SMB_CREDS")"
  sudo cp "$SMB_CREDS_SRC" "$SMB_CREDS"
  sudo chown root:root "$SMB_CREDS"
  sudo chmod 600 "$SMB_CREDS"
elif [ ! -f "$SMB_CREDS" ]; then
  echo "    !! $SMB_CREDS_SRC not found — create it manually with:"
  echo "       username=youruser"
  echo "       password=yourpass"
  echo "       then place it at $SMB_CREDS_SRC (or set directly and chmod 600 $SMB_CREDS)"
fi

if [ -d "$SMB_UNITS_SRC" ]; then
  for unit in "${SMB_UNITS[@]}"; do
    sudo cp "$SMB_UNITS_SRC/$unit" "/etc/systemd/system/$unit"
  done
  sudo systemctl daemon-reload
  # Only enable the .automount (or .mount if you're not using automount);
  # enabling both a .mount and its .automount unit is redundant.
  for unit in "${SMB_UNITS[@]}"; do
    case "$unit" in
      *.automount) sudo systemctl enable --now "$unit" ;;
    esac
  done
  echo "    NOTE: these units should have 'After=tailscaled.service' and"
  echo "    'Requires=tailscaled.service' set (or a Wants= on the tailscale IP"
  echo "    being reachable) so they don't race Tailscale coming up at boot."
else
  echo "    !! $SMB_UNITS_SRC not found — copy your .mount/.automount unit"
  echo "       files into your dotfiles repo under that path first."
fi

echo "==> Applying KDE Plasma theme and wallpaper"
if command -v plasma-apply-lookandfeel &>/dev/null; then
  plasma-apply-lookandfeel -a "$LOOK_AND_FEEL" || true
  plasma-apply-colorscheme "$COLOR_SCHEME" || true
fi
if command -v plasma-apply-wallpaperimage &>/dev/null && [ -f "$WALLPAPER_PATH" ]; then
  plasma-apply-wallpaperimage "$WALLPAPER_PATH" || true
fi
if command -v kwriteconfig6 &>/dev/null && [ -f "$LOCKSCREEN_WALLPAPER_PATH" ]; then
  # plasma-apply-wallpaperimage only touches the desktop; the lockscreen
  # wallpaper lives under kscreenlockerrc's Greeter/Wallpaper group instead.
  kwriteconfig6 --file kscreenlockerrc --group Greeter --group Wallpaper \
    --group org.kde.image --group General --key Image "file://$LOCKSCREEN_WALLPAPER_PATH"
elif command -v kwriteconfig5 &>/dev/null && [ -f "$LOCKSCREEN_WALLPAPER_PATH" ]; then
  kwriteconfig5 --file kscreenlockerrc --group Greeter --group Wallpaper \
    --group org.kde.image --group General --key Image "file://$LOCKSCREEN_WALLPAPER_PATH"
fi

if [ -f "$LOCKSCREEN_WALLPAPER_PATH" ]; then
  echo "==> Setting SDDM login screen background (theme: $SDDM_THEME)"
  # SDDM runs as its own system user and generally can't read into your
  # home directory (perms on $HOME are usually 700), so copy the image
  # somewhere world-readable first rather than pointing at $HOME directly.
  sudo mkdir -p "$(dirname "$SDDM_BACKGROUND_SYS")"
  sudo cp "$LOCKSCREEN_WALLPAPER_PATH" "$SDDM_BACKGROUND_SYS"
  sudo chmod 644 "$SDDM_BACKGROUND_SYS"

  SDDM_THEME_CONF="/usr/share/sddm/themes/$SDDM_THEME/theme.conf.user"
  if [ -d "/usr/share/sddm/themes/$SDDM_THEME" ]; then
    sudo tee "$SDDM_THEME_CONF" > /dev/null <<EOF
[General]
background=$SDDM_BACKGROUND_SYS
type=image
EOF
  else
    echo "    !! Theme dir /usr/share/sddm/themes/$SDDM_THEME not found."
    echo "       Check your actual theme with:"
    echo "       grep -i '^Current' /etc/sddm.conf.d/*.conf 2>/dev/null"
    echo "       and update SDDM_THEME at the top of this script."
  fi
fi

echo "==> Done. Reboot or restart plasmashell to see all changes take effect."
echo "    plasmashell --replace &>/dev/null & disown"
