#!/bin/bash

# define echo function
function echo_c {
  echo -e "\033["$1"m"$2"\033[0m"
}

# check.
if [ -z $1 ] || [ $1 != 'pack' ];
then
  echo_c 36 "ERROR: Please use yarn(or npm) run package!"
  exit
fi

# check have commit message.
if [ -z $2 ];
then
  echo_c 36 "ERROR: Commit message cannot be empty!"
  exit
fi

# build to dist directory.
yarn run vue-cli-service build

# In new project.
if [ ! -d ./package ];
then
  git clone -b package https://github.com/JoverSite/web-front package
fi

# clean all file
cd ./package
git rm -r .

mv ../dist ./
git add .
git commit -m $2
git push origin package
echo_c 33 "OK: Execute success."
