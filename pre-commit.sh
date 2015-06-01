#!/bin/sh

exec < /dev/tty



# Build refs

read -p "Build refs? (y/n)" BUILD_REF

if [ "$BUILD_REF" == "y" ]; then
  echo "Building refs...";

  echo "> git stash -q --keep-index";
  git stash -q --keep-index

  echo "> gulp vtests:ref";
  gulp vtests:ref

  echo "> git stash pop -q"
  git stash pop -q
fi



# Compare refs

echo "";
read -p "Compare refs? (y/n)" COMPARE_REFS

if [ "$COMPARE_REFS" == "y" ]; then
  echo "Comparing refs...";
  echo "> gulp vtests:compare";

  gulp vtests:compare

  echo "";
  read -p "Continue? (y/n)" CONTINUE

  if [ "$CONTINUE" == "n" ]; then
    exit 1;
  fi
else
  echo "";
  read -p "Continue? (y/n)" CONTINUE

  if [ "$CONTINUE" == "n" ]; then
    exit 1;
  fi
fi

exit 0;
