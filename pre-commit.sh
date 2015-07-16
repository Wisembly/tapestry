#!/bin/sh

exec < /dev/tty

function buildRefs {
  echo "Building refs...";

  echo "> git stash -q --keep-index";
  git stash -q --keep-index

  echo "> npm run vt:refs";
  npm run vt:refs

  echo "> git stash pop -q"
  git stash pop -q
}

function compareRefs {
  echo "Comparing refs...";
  echo "> npm run vt:compare";

  npm run vt:compare
}



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
  buildRefs
  compareRefs
fi



# Continue and deploy

echo "";
read -p "Continue and deploy? (y/n)" CONTINUE_AND_DEPLOY

if [ "$CONTINUE_AND_DEPLOY" == "n" ]; then
  exit 1;
else
  gulp deploy;
  exit 0;
fi
