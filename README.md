These are backups of my configs and other dotfiles.

Use the command below to clone these files into a temporary directory:
```
git clone --separate-git-dir=$HOME/.dotfiles https://github.com/whymaison/.dotfiles.git tmpdotfiles
rsync --recursive --verbose --exclude '.git' tmpdotfiles/ $HOME/
rm -r tmpdotfiles
```
