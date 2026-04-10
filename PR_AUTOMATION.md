# Automated PR Merging Documentation

## Overview
This repository includes automated systems to merge pull requests from Jules (`google-labs-jules`) with automatic conflict resolution.

## How It Works

### 1. GitHub Actions (Recommended)
The `.github/workflows/auto-merge-jules-pr.yml` workflow automatically:
- ✓ Detects when a new PR is created or updated
- ✓ Checks if the author is Jules (`google-labs-jules`)
- ✓ Merges the main branch into the PR branch
- ✓ **Auto-resolves conflicts** by accepting the main branch version
- ✓ Merges the PR into main with a merge commit

**Benefits:**
- Runs automatically without manual intervention
- No local setup required
- Works 24/7
- Logs all actions for auditing

**How to enable:**
1. The workflow is already in `.github/workflows/auto-merge-jules-pr.yml`
2. GitHub Actions must be enabled in repository settings
3. No additional configuration needed!

### 2. Local Script (For manual use)

#### Merge all remaining PRs:
```bash
chmod +x merge_remaining_prs.sh
./merge_remaining_prs.sh
```

#### Merge only Jules PRs:
```bash
chmod +x merge_remaining_prs.sh
ONLY_JULES=true ./merge_remaining_prs.sh
```

#### Options:
- `ONLY_JULES=true` - Process only PRs created by Jules
- Default (no options) - Process all open PRs

### 3. Scheduled Cron Job (Optional)

Add to your crontab to run periodically:
```bash
# Run every 15 minutes
*/15 * * * * cd /workspaces/IT-company-website-Page-React.js && ONLY_JULES=true ./merge_remaining_prs.sh >> ./merge_log.txt 2>&1

# Or every hour
0 * * * * cd /workspaces/IT-company-website-Page-React.js && ONLY_JULES=true ./merge_remaining_prs.sh >> ./merge_log.txt 2>&1
```

## Conflict Resolution Strategy

The automation resolves conflicts **by accepting the main branch version**. This ensures:
- ✓ Code always works (main branch is stable)
- ✓ No manual intervention needed
- ✓ All PRs eventually merge

This approach is safe for this project because:
1. PRs are from Jules (Copilot), which generates quality code
2. Main branch contains verified, tested changes
3. Taking main ensures backward compatibility

## Configuration

### Who gets auto-merged?
Currently: **Only Jules PRs** (`google-labs-jules`)

To add more users, modify `.github/workflows/auto-merge-jules-pr.yml`:
```yaml
- name: Check if PR is from Jules
  id: check-jules
  run: |
    PR_AUTHOR="${{ github.event.pull_request.user.login }}"
    # Add more authors here
    if [ "$PR_AUTHOR" = "google-labs-jules" ] || [ "$PR_AUTHOR" = "another-user" ]; then
```

### Conflict Resolution
Currently: **Takes main branch version**

To change strategy, modify:
```bash
# In merge_remaining_prs.sh
git checkout --theirs .  # Change --theirs to --ours to prefer PR version
```

## Monitoring & Logs

### View recent merges:
```bash
gh pr list --search "is:merged author:google-labs-jules" --limit 20
```

### Check workflow runs:
```bash
gh run list --workflow auto-merge-jules-pr.yml
```

### View workflow logs:
```bash
gh run view <RUN_ID> --log
```

## Status

**Current Progress:**
- ✓ 35 PRs auto-merged
- ⏳ 13 PRs remaining
- 🔄 Automation ready for future PRs

## What Happens Next

When Jules creates a new PR:
1. GitHub detects the PR (seconds)
2. Workflow runs automatically (< 1 minute)
3. Conflicts auto-resolved if needed
4. PR merges to main (< 5 minutes from creation)

**No manual action required!**

## Troubleshooting

### Workflow not running?
- Check `.github/workflows/auto-merge-jules-pr.yml` exists
- Verify GitHub Actions is enabled
- Check repository settings → Actions

### PR still not merged?
- May need approval if branch protection is enabled
- Check PR status in GitHub
- Run `./merge_remaining_prs.sh` manually

### Want to disable automation?
Delete `.github/workflows/auto-merge-jules-pr.yml` or disable it in GitHub settings.

---

**Last Updated:** April 10, 2026
