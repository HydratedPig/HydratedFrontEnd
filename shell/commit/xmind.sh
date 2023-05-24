#!/bin/bash

SUFFIX=$1
BRANCH_TYPE=$2

REMOTE_NAME="origin"
TARGET_BRANCH="$BRANCH_TYPE/$SUFFIX"

CURRENT_DATE=$(date '+%Y-%m-%d %H:%M:%S')
COMMIT_MSG="$BRANCH_TYPE($SUFFIX): $CURRENT_DATE"
# 切换到目标分支，如果有问题会直接报错
# Check if the branch exists in the remote repository
if git ls-remote --heads "$REMOTE_NAME" "$TARGET_BRANCH" >/dev/null 2>&1; then
  # Fetch the latest changes from the remote branch
  git fetch "$REMOTE_NAME" "$TARGET_BRANCH"

  # Switch to the branch and update it to the latest changes
  git checkout "$TARGET_BRANCH"
  git merge "$REMOTE_NAME/$TARGET_BRANCH"
else
  # Create a new branch with the same name as the remote branch
  git checkout -b "$TARGET_BRANCH" "$REMOTE_NAME/$TARGET_BRANCH"
fi
# add all file
git status -u --porcelain | awk '{print $2}' | grep "\.$SUFFIX$" | xargs git add

git commit -m "$COMMIT_MSG"
git push $REMOTE_NAME
