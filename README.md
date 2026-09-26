These are backups of my configs and other dotfiles.

# One line installer for packages, themes, configs, and some setup.
```
bash <(curl -sL https://raw.githubusercontent.com/whymaison/.dotfiles/refs/heads/master/.dotfiles-meta/bootstrap.sh)
```

Use the command below to clone these files into a temporary directory:
```
git clone --separate-git-dir=$HOME/.dotfiles https://github.com/whymaison/.dotfiles.git tmpdotfiles
rsync --recursive --verbose --exclude '.git' tmpdotfiles/ $HOME/
rm -r tmpdotfiles
```

https://www.anand-iyer.com/blog/2018/a-simpler-way-to-manage-your-dotfiles/ 

```
dotfiles add 'file path'
dotfiles commit -a -m "message"
dotfiles push
```
