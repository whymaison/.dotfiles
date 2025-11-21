#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '
[ -r /home/mwn319/.config/byobu/prompt ] && . /home/mwn319/.config/byobu/prompt   #byobu-prompt#

alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'

alias qemu='QEMU_LD_PREFIX=/usr/arm-linux-gnueabihf qemu-arm-static'

function y() {
	local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
	yazi "$@" --cwd-file="$tmp"
	IFS= read -r -d '' cwd < "$tmp"
	[ -n "$cwd" ] && [ "$cwd" != "$PWD" ] && builtin cd -- "$cwd"
	rm -f -- "$tmp"
}

function ff() {
	fastfetch
}

function list() {
	echo ""
	echo "Command List:"
	echo ""
	echo "File Browser:       y"
	echo "System Monitor:     btop"
	echo "ssh to mwnServer:   ssh mwnserver"
	echo "scp to mwnServer:   scp /source mwnserver:/destination"
	echo "System Upgrade:     sudo pacman -Syu"
	echo "Disk Usage:         sudo ncdu"
	echo "ssh to CS Lab:      ssh mwn0005@vbh-oit-raspberrypi-5"
	echo "scp to CS Lab:      scp Documents/code/... mwn0005@vbh-oit-raspberrypi-5:/home/mwn0005/Labs/..."
	echo ""
}
