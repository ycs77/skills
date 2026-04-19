---
name: github-release-notes
description: Generate GitHub release notes for the upcoming version, following the Keep a Changelog 1.1.0 spec. Use when the user is preparing a release and asks to "draft release notes", "generate release notes", "create GitHub release notes", "產生 release notes", "準備發布", "產生發布說明", or similar pre-release phrasings. Return the notes directly in chat as ready-to-paste Markdown — do NOT create or modify CHANGELOG.md or any other file.
allowed-tools: Bash(git log:*), Bash(git tag:*), Bash(git describe:*), Bash(git show:*), Bash(git diff:*), Bash(git rev-list:*), Bash(git rev-parse:*), Read
metadata:
  author: Lucas Yang
  version: "2026.04.19"
---

# GitHub Release Notes Generator

Generate release notes for the project's upcoming version that are ready to paste into a GitHub release. Follow the [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) category conventions.

## Process

1. Find the latest release tag:
   - `git describe --tags --abbrev=0` (fallback: `git tag --sort=-v:refname | head -n 1`)
   - If no tag exists, use the full history.
2. List commits since that tag: `git log <tag>..HEAD --no-merges --pretty=format:"%h %s"`.
3. If an existing `CHANGELOG.md` is present, read it briefly to match the project's tone, language, and wording style — but do NOT modify or create that file.
4. Classify each commit into one of the Keep a Changelog categories. Omit any category with no entries.
5. Output the release notes as Markdown, wrapped in a single fenced code block so the user can copy-paste into the GitHub release UI.

## Categories (Keep a Changelog 1.1.0)

- `Added` — new features
- `Changed` — changes in existing functionality
- `Deprecated` — soon-to-be-removed features
- `Removed` — now-removed features
- `Fixed` — bug fixes
- `Security` — vulnerability fixes

## Output format

Output ONLY the release notes Markdown inside a single fenced code block. No preamble, no trailing commentary, no surrounding explanation.

Do NOT include a version heading (`## [x.y.z]`) or date — GitHub's release page already renders the tag and publish date, so duplicating them is redundant. Start directly at the `###` category headings:

```
### Added
- Short, user-facing description of the change

### Fixed
- Short, user-facing description of the fix
```

## Writing rules

- Each bullet is one line, user-facing, and describes the impact — not the implementation.
- Do not include commit hashes or author names. PR numbers are fine if the existing `CHANGELOG.md` already uses them.
- Merge duplicate or related commits into a single bullet.
- Skip purely internal noise (lint config tweaks, CI-only changes, formatting passes, dependency bumps without user impact) unless that's all that exists — then group the meaningful ones under `Changed`.
- Match the language of the project's existing `CHANGELOG.md` if one exists; otherwise default to English.
- Omit empty categories entirely.
