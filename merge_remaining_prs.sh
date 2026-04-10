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
  if ! gh pr checkout $pr 2>/dev/null; then
    echo "  ✗ Failed to checkout PR #$pr"
    failed_count=$((failed_count+1))
    continue
  fi
  
  # Merge main
  echo "  → Merging main branch..."
  if git merge origin/main --no-edit 2>/dev/null; then
    echo "  ✓ No conflicts"
  else
    echo "  ⚠ Conflicts detected, auto-resolving..."
    # Take main version for all conflicts
    git checkout --theirs . 2>/dev/null
    git add . 2>/dev/null
    if ! git commit --no-edit 2>/dev/null; then
      echo "  ✗ Failed to resolve conflicts for PR #$pr"
      git merge --abort 2>/dev/null
      failed_count=$((failed_count+1))
      continue
    fi
    echo "  ✓ Conflicts resolved"
  fi
  
  # Push
  echo "  → Pushing changes..."
  if ! git push -q 2>/dev/null; then
    echo "  ✗ Failed to push changes for PR #$pr"
    failed_count=$((failed_count+1))
    continue
  fi
  
  # Merge PR
  echo "  → Merging PR into main..."
  if gh pr merge $pr --merge -q 2>/dev/null; then
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
echo "Total ProcessedElapsed: $total"
echo "✓ Successfully merged: $merged_count"
echo "✗ Failed: $failed_count"
echo "======================================"

if [ $merged_count -gt 0 ]; then
  echo "All successful merges completed!"
fi
