#!/bin/sh

exec < /dev/tty



# deploy

echo "";
read -p "Deploy before push? (y/n)" CONTINUE_AND_DEPLOY

if [ "$CONTINUE_AND_DEPLOY" == "y" ]; then
  gulp deploy;
fi
