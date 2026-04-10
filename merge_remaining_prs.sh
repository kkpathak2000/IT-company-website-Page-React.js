#!/bin/bash
# Auto-Merge PR Script with Jules filtering
# Usage: ONLY_JULES=true ./merge_remaining_prs.sh

set +e

echo "======================================"
echo "Auto-Merge PR Script"
echo "======================================"
echo ""

# Get list of open PR numbers
echo "Fetching open PRs..."

if [ "$ONLY_JULES" = "true" ]; then
  echo "Filtering for Jules (google-labs-jules) PRs only..."
  prs=$(gh pr list --json number,author --limit 100 | jq -r '.[] | select(.author.login=="google-labs-jules") | .number')
else
  echo "Processing all open PRs..."
  prs=$(gh pr list --json number --limit 100 | jq -r '.[].number')
fi

total=$(echo $prs | wc -w)
echo "Found $total PR(s) to process"
echo ""

if [ $total -eq 0 ]; then
  echo "No PRs to process. Exiting."
  exit 0
fi

current=0
merged_count=0
failed_count=0

for pr in $prs; do
  current=$((current+1))
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "[$current/$total] Processing PR #$pr"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  
  # Checkout PR
  echo "  → Checking out PR..."
  if ! gh pr checkout $pr > /dev/null 2>&1; then
    echo "  ✗ Failed to checkout PR #$pr"
    failed_count=$((failed_count+1))
    continue
  fi
  
  # Merge main
  echo "  → Merging main branch..."
  if git merge origin/main --no-edit > /dev/null 2>&1; then
    echo "  ✓ No conflicts"
  else
    echo "  ⚠ Conflicts detected, auto-resolving..."
    # Take main version for all conflicts
    git checkout --theirs . > /dev/null 2>&1
    git add . > /dev/null 2>&1
    if ! git commit --no-edit > /dev/null 2>&1; then
      echo "  ✗ Failed to resolve conflicts for PR #$pr"
      git merge --abort > /dev/null 2>&1
      failed_count=$((failed_count+1))
      continue
    fi
    echo "  ✓ Conflicts resolved"
  fi
  
  # Push
  echo "  → Pushing changes..."
  if ! git push > /dev/null 2>&1; then
    echo "  ✗ Failed to push changes for PR #$pr"
    failed_count=$((failed_count+1))
    continue
  fi
  
  # Merge PR
  echo "  → Merging PR into main..."
  if gh pr merge $pr --merge > /dev/null 2>&1; then
    echo "  ✓ Successfully merged PR #$pr"
    merged_count=$((merged_count+1))
  else
    echo "  ✗ Failed to merge PR #$pr (may not be mergeable)"
    failed_count=$((failed_count+1))
  fi
  
  echo ""
done

echo "======================================"
echo "Summary"
echo "======================================"
echo "Total Processed: $total"
echo "✓ Successfully merged: $merged_count"
echo "✗ Failed: $failed_count"
echo "======================================"
