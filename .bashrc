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

function y() {
	local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
	yazi "$@" --cwd-file="$tmp"
	IFS= read -r -d '' cwd < "$tmp"
	[ -n "$cwd" ] && [ "$cwd" != "$PWD" ] && builtin cd -- "$cwd"
	rm -f -- "$tmp"
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
	echo "Disk Usage:         ncdu"
	echo ""
}
