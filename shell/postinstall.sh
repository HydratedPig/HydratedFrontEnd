#!/bin/bash

# Get Git configuration values
name=$(git config user.name)
email=$(git config user.email)
global_name=$(git config --global user.name)
global_email=$(git config --global user.email)

# Define check_git_config function to check Git configuration values
function check_git_config() {
  type=$1
  value=$2
  global_value=$3
  if [ $value ]; then
    global_value=${global_value:-undefined}
    echo "It is configured! git.$type is $value, and global_$type is $global_value"
  else
    echo "git.$type is not configured. Please check git's config"
  fi
}

# Call check_git_config function for name and email configuration values
check_git_config "name" "$name" "$global_name"
check_git_config "email" "$email" "$global_email"