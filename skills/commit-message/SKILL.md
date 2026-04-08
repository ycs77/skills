---
name: commit-message
description: Generate concise Git commit messages in imperative mood. Use when the user asks to create, write, draft, make, generate, or suggest a commit message, or when they say "commit these changes", "what should I commit?", or ask for help with git commit.
allowed-tools: Bash(git status:*), Bash(git diff:*)
metadata:
  author: Lucas Yang
  version: "2026.04.08"
---

# Git Commit Message Generator

Generate concise, descriptive Git commit messages in English.

## Process

1. Run `git diff --cached` directly (NOT `git -C <path> diff --cached`, NOT `cd <path> && git diff --cached`) to check for staged changes
2. If staged changes exist: generate commit message based on staged changes only
3. If no staged changes: run `git diff` directly (NOT `git -C <path> diff`, NOT `cd <path> && git diff`) and `git status` directly (NOT `git -C <path> status`, NOT `cd <path> && git status`) to view unstaged and untracked files
4. For untracked files, intelligently assess which need content review (code/config files) vs which can be inferred from filename (assets, dependencies)
5. Generate a single-line commit message

## Output

Output ONLY the commit message — a single line, no explanation, no follow-up questions, no code block fencing.

## Format

- Imperative mood, under 72 characters
- Focus on the 'what' and 'why' of the change, not the 'how'. Avoid generic messages like 'update code' or 'fix bug'.
- No type prefix (e.g., `feat:`, `fix:`) unless the user explicitly requests Conventional Commits format

## Examples

```
Add user authentication with JWT tokens
Update navbar to include search functionality
Remove deprecated API endpoints
Rename userService to UserAccountService
Fix null pointer exception in user service
Improve error handling in payment module
Optimize database queries for faster loading
Refactor user service to use repository pattern
Document API endpoints in README
Add edge case tests for payment processing
Bump dependencies
Add login page with validation and error handling
Migrate CI pipeline from Travis to GitHub Actions
Fix authentication bug and update related tests
```
