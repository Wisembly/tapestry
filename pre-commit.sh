#!/bin/sh

exec < /dev/tty



# Build and compare refs

read -p "Build and compare refs? (y/n)" COMPARE_REFS

if [ "$COMPARE_REFS" == "y" ]; then
  echo "Building refs...";

  echo "> git stash -q --keep-index";
  git stash -q --keep-index

  echo "> gulp vtests:ref";
  gulp vtests:ref

  echo "> git stash pop -q"
  git stash pop -q

  echo "Comparing refs...";
  echo "> gulp vtests:compare";

  gulp vtests:compare

  echo "";
  read -p "Continue? (y/n)" CONTINUE

  if [ "$CONTINUE" == "n" ]; then
    exit 1;
  fi
fi

exit 0;
