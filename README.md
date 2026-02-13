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
| [ycs77-vue](./skills/ycs77-vue/SKILL.md) | Lucas Yang's Vue 3 conventions |

### Skills Generated from Official Documentation

> Unopinionated but with tilted focus (e.g. TypeScript, ESM, Composition API, and other modern stacks)

Generated from official documentation and fine-tuned by Lucas.

| Skill | Description | Source |
|-------|-------------|--------|
| [shadcn-vue](skills/shadcn-vue) | Vue port of shadcn-ui - beautiful, customizable, and extensible components | [unovue/shadcn-vue](https://github.com/unovue/shadcn-vue) |

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

### shadcn-vue

The shadcn-vue docs contain `component-preview` custom blocks that reference Vue SFC demo files. Use the following prompt to generate skills:

```
Generate skills for shadcn-vue

Docs path: apps/v4/content/docs

The docs use a custom `::component-preview` block with `name` (required) and
`description` (optional) fields. When you encounter one, read the corresponding
Vue SFC from `apps/v4/components/demo/<name>.vue` and treat it as the block's
content. Example:

::component-preview
---
name: SonnerDemo
description: A sonner toast component.
---
::
```

## Credits

- The Skills Generator and CLI are adapted from [antfu/skills](https://github.com/antfu/skills) — thanks [Anthony Fu](https://github.com/antfu)

## Author

Lucas Yang (yangchenshin77@gmail.com)

## License

[MIT License](LICENSE.md)
