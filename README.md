# Lucas Yang's Skills

[Agent skills](https://agentskills.io/) built around [Lucas Yang](https://github.com/ycs77)'s personal preferences and development style.

## Installation

Install using the `skills` CLI with the all skills:

```bash
npx skills add ycs77/skills --skill='*'
# Or to install all skills globally:
npx skills add ycs77/skills --skill='*' -g
```

## Skills

| Name | Description |
|------|-------------|
| [commit-message](./skills/commit-message/SKILL.md) | Generate concise Git commit messages |
| [ycs77-vue](./skills/ycs77-vue/SKILL.md) | Lucas Yang's Vue 3 conventions |

## Usage

### Vue Projects

First, install the required skills:

```bash
npx skills add antfu/skills \
  --skill vue \
  --skill vue-best-practices \
  --skill nuxt  # For Nuxt projects
```

Then, to ensure your AI assistant loads the correct skills when working with Vue 3 Single File Components, add the following to `AGENTS.md` (or `CLAUDE.md`) in your project root:

**For Vue 3 frontend projects:**

```md
## Skills Activation Rules

`ycs77-vue` is the project-level convention. When rules conflict, `ycs77-vue` takes precedence.

- **When writing, modifying, or reviewing Vue 3 SFCs**, load ALL of the following skills:
  1. `vue`
  2. `vue-best-practices`
  3. `ycs77-vue`
```

**For Nuxt projects:**

```md
## Skills Activation Rules

`ycs77-vue` is the project-level convention. When rules conflict, `ycs77-vue` takes precedence.

- **When writing, modifying, or reviewing Vue 3 SFCs**, load ALL of the following skills:
  1. `vue`
  2. `vue-best-practices`
  3. `ycs77-vue`
  4. `nuxt`

- **When working on Nuxt-specific files** (server routes, middleware, plugins, composables, `nuxt.config.ts`), load:
  1. `ycs77-vue`
  2. `nuxt`
```

## Author

Lucas Yang (yangchenshin77@gmail.com)

## License

[MIT License](LICENSE.md)
