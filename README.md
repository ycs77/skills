# Lucas Yang's Skills

[Agent skills](https://agentskills.io/) built around [Lucas Yang](https://github.com/ycs77)'s personal preferences and development style.

## Installation

Install using the `skills` CLI with the all skills:

```bash
npx skills add ycs77/skills --skill='*'
# To install all skills globally:
npx skills add ycs77/skills --skill='*' -g
```

## Skills

### Self-maintained Skills

| Name | Description |
|------|-------------|
| [commit-message](./skills/commit-message/SKILL.md) | Generate concise Git commit messages |
| [github-release-notes](./skills/github-release-notes/SKILL.md) | Generate GitHub release notes following Keep a Changelog spec |
| [scan-repo](./skills/scan-repo/SKILL.md) | Security scan of GitHub open source projects |
| [scan-skill](./skills/scan-skill/SKILL.md) | Security auditing tool for scanning skills |
| [write-social-post](./skills/write-social-post/SKILL.md) | Write strategic social media posts for articles, trends, news, or tech commentary |
| [ycs77-vue](./skills/ycs77-vue/SKILL.md) | Lucas Yang's Vue 3 conventions |

### Vendored Skills

Synced from external repositories that maintain their own skills.

| Skill | Description | Source |
|-------|-------------|--------|
| [setup-matt-pocock-skills](skills/setup-matt-pocock-skills) | Configure a repository for Matt Pocock's engineering skills | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [ask-matt](skills/ask-matt) | Route a task to the appropriate Matt Pocock skill or workflow | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [grill-with-docs](skills/grill-with-docs) | Stress-test a plan while updating domain docs and ADRs | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [to-spec](skills/to-spec) | Turn the current conversation into an issue-tracker specification | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [to-tickets](skills/to-tickets) | Break a plan into dependency-aware tracer-bullet tickets | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [implement](skills/implement) | Implement work from a specification or set of tickets | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [tdd](skills/tdd) | Test-driven development with the red-green loop | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [code-review](skills/code-review) | Review changes against repository standards and the originating specification | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [wayfinder](skills/wayfinder) | Map and investigate work too large for one agent session | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [prototype](skills/prototype) | Build throwaway prototypes to answer design questions | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [research](skills/research) | Research questions from primary sources and capture the findings | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [improve-codebase-architecture](skills/improve-codebase-architecture) | Find deepening opportunities to improve codebase architecture | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [diagnosing-bugs](skills/diagnosing-bugs) | Diagnose hard bugs and performance regressions | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [triage](skills/triage) | Categorize, verify, and prepare issues or PRs for implementation | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [codebase-design](skills/codebase-design) | Design deep module interfaces for testability and AI navigability | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [domain-modeling](skills/domain-modeling) | Refine domain terminology and record architectural decisions | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [grill-me](skills/grill-me) | Interview the user relentlessly to sharpen a plan or design | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [handoff](skills/handoff) | Compact the conversation into a handoff document for another agent | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [teach](skills/teach) | Teach the user a new skill or concept within the workspace | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [writing-great-skills](skills/writing-great-skills) | Write predictable agent skills using proven principles and patterns | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [grilling](skills/grilling) | Run a structured interview to stress-test a plan or design | [mattpocock/skills](https://github.com/mattpocock/skills) |

## Usage

### Vue Projects

First, install the required skills:

```bash
npx skills add antfu/skills \
  --skill vue \
  --skill vue-best-practices \
  --skill nuxt  # For Nuxt projects
```

Then add the following to `AGENTS.md` (or `CLAUDE.md`) in your project root to ensure the AI assistant loads the correct skills when working with Vue 3 SFCs:

```md
## Skills Activation Rules

`ycs77-vue` is the project-level convention. When rules conflict, `ycs77-vue` takes precedence.

- **When writing, modifying, or reviewing Vue 3 SFCs**, load ALL of the following skills:
  1. `vue`
  2. `vue-best-practices`
  3. `ycs77-vue`
```

> For Nuxt projects, also include `nuxt` in the list above.

## Generate Skills

1. Clone this repository
2. Install dependencies: `pnpm install`
3. Update `meta.ts` with your own projects and skill sources
4. Run `pnpm start cleanup` to remove existing submodules and skills
5. Run `pnpm start init` to clone the submodules
6. Run `pnpm start sync` to sync vendored skills
7. Ask your agent to `Generate skills for <project>` (recommended one at a time to manage token usage)

See [AGENTS.md](AGENTS.md) for detailed generation guidelines.

## Credits

- The Skills Generator and CLI are adapted from [antfu/skills](https://github.com/antfu/skills) — thanks [Anthony Fu](https://github.com/antfu)

## Author

Lucas Yang (yangchenshin77@gmail.com)

## License

[MIT License](LICENSE)
