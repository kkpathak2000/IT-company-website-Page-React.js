## 2025-05-14 - Navigational and Form Accessibility

**Learning:** This repository tracks `node_modules` and binary artifacts in Git. Running `pnpm install` can lead to massive accidental deletions of tracked files and introduction of non-portable absolute paths in tracked binaries.

**Action:** Before submitting, always check `git status` to ensure no tracked `node_modules` files have been modified or deleted. Revert accidental changes to these files with `git checkout HEAD -- <path>`. Focus UX changes only on source files.
