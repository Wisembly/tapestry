#!/bin/sh

exec < /dev/tty



# Lint SCSS files

echo "Linting SCSS files...";
npm run lint

read -p "Continue? (y/n)" CONTINUE_AFTER_LINT

if [ "$CONTINUE_AFTER_LINT" == "n" ]; then
  exit 1;
fi



# Build and compare refs

read -p "Build and compare refs? (y/n)" COMPARE_REFS

if [ "$COMPARE_REFS" == "y" ]; then
  echo "Building refs...";

  echo "> git stash -q --keep-index";
  git stash -q --keep-index

  echo "> npm run vt:refs";
  npm run vt:refs

  echo "> git stash pop -q"
  git stash pop -q

  echo "Comparing refs...";
  echo "> npm run vt:compare";

  npm run vt:compare

  echo "";
  read -p "Continue? (y/n)" CONTINUE

  if [ "$CONTINUE" == "n" ]; then
    exit 1;
  fi
fi

exit 0;
