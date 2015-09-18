#!/bin/sh
TPL=.gitconfig.part
CONFIG=~/.gitconfig

echo "Adding commit rules to your Git config..."
read -p "WARNING: it will NOT overide existing settings and can create conflicts (y/n)" GIT_MSG

if [ "$GIT_MSG" == "y" ]; then
  cp .gitmessage ~/.gitmessage
  cat "$TPL" >> "$CONFIG"
fi
