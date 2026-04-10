#!/bin/bash
set -e

# Get list of open PR numbers
prs=$(gh pr list --json number --limit 100 | jq -r '.[].number')

for pr in $prs; do
  echo "Processing PR #$pr"
  
  # Checkout PR
  gh pr checkout $pr
  
  # Merge main
  if git merge main --no-edit; then
    echo "No conflicts for PR #$pr"
  else
    echo "Conflicts in PR #$pr, resolving..."
    # Take main version for conflicted files
    git checkout --theirs .
    git add .
    git commit --no-edit
  fi
  
  # Push
  git push
  
  # Merge PR
  gh pr merge $pr --merge
  
  echo "Merged PR #$pr"
done
