---
name: core-setup
description: Project setup, CLI commands, and components.json configuration for shadcn-vue.
---

# Project Setup & CLI

shadcn-vue is a code distribution system for Vue components built on Reka UI and Tailwind CSS. Components are copied into your project (not installed as dependencies) giving you full control over the code.

## CLI Commands

### Initialize a project

```bash
npx shadcn-vue@latest init
```

Key options:
- `-p, --preset <preset>` - Use a preset: `reka-vega`, `reka-nova`, `reka-maia`, `reka-lyra`, `reka-mira`, `reka-luma`, `reka-sera`
- `-t, --template <template>` - Template: `nuxt`, `vite`, `astro`, `laravel`
- `--style <style>` - Visual style: `vega`, `nova`, `maia`, `lyra`, `mira`, `luma`, `sera`
- `--icon-library <lib>` - Icon library: `lucide`, `tabler`, `hugeicons`, `phosphor`, `remixicon`
- `-b, --base-color <color>` - Base color: `neutral`, `gray`, `zinc`, `stone`, `slate`
- `-y, --yes` - Skip confirmation (default: true)
- `-f, --force` - Force overwrite existing config
- `--css-variables` / `--no-css-variables` - Toggle CSS variable theming (default: true)
- `--pointer` / `--no-pointer` - Enable pointer cursor for buttons
- `--rtl` / `--no-rtl` - Enable RTL support
- `--reinstall` - Re-install existing UI components

`create` is an alias for `init`:
```bash
npx shadcn-vue@latest create
```

### Add components

```bash
npx shadcn-vue@latest add [component...]
```

Add specific components:
```bash
npx shadcn-vue@latest add button card dialog
```

Add all components:
```bash
npx shadcn-vue@latest add -a
```

Add from a remote URL or local path:
```bash
npx shadcn-vue@latest add https://acme.com/registry/navbar.json
```

Options: `-o` overwrite, `-p <path>` custom install path, `-s` silent.

### Apply a preset

```bash
npx shadcn-vue@latest apply --preset nova
```

Applies a visual style preset to an existing project.

### View registry items

```bash
npx shadcn-vue@latest view button card dialog
npx shadcn-vue@latest view @acme/auth @v0/dashboard
```

Preview registry items before installing.

### Search registries

```bash
npx shadcn-vue@latest search @shadcn-vue -q "button"
npx shadcn-vue@latest search @shadcn-vue @v0 @acme
```

`list` is an alias for `search`.

### Get component docs

```bash
npx shadcn-vue@latest docs button
```

Fetches documentation and API references for components.

### Get project info

```bash
npx shadcn-vue@latest info
npx shadcn-vue@latest info --json
```

Returns project config: framework, aliases, installed components, icon library, etc.

### Build registry

```bash
npx shadcn-vue@latest build
npx shadcn-vue@latest build --output ./public/registry
```

Generates registry JSON files from `registry.json` into `public/r/`.

### Migrate

```bash
npx shadcn-vue@latest migrate rtl
npx shadcn-vue@latest migrate icons
```

Available migrations:
- `rtl` — Transforms physical CSS to logical (e.g. `ml-4` → `ms-4`), adds `rtl:` variants
- `icons` — Migrate components to a different icon library

## components.json

Configuration file for your project. Created by `npx shadcn-vue@latest init`.

```json
{
  "$schema": "https://shadcn-vue.com/schema.json",
  "style": "new-york",
  "typescript": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "composables": "@/composables",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib"
  },
  "iconLibrary": "lucide",
  "pointer": false,
  "rtl": false
}
```

Key points:
- `style` must be `"new-york"` (the `default` style is deprecated)
- `tailwind.config` should be blank for Tailwind CSS v4
- `tailwind.css` points to the CSS file importing Tailwind
- `tailwind.cssVariables` cannot be changed after initialization
- `aliases.ui` controls where UI components are installed
- `aliases.lib` controls where utility functions (like `cn`) are placed
- `aliases.composables` controls where composables are placed
- `pointer: false` — set to `true` to enable `cursor: pointer` on buttons
- `rtl: false` — set to `true` to enable RTL support
- Set `typescript: false` for JavaScript-only `.vue` components

## Utility Function

The `cn` utility merges Tailwind classes using `clsx` and `tailwind-merge`:

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## valueUpdater Utility

Used with TanStack Table to update Vue refs from updater functions. Moved to `@/components/ui/table/utils` (no longer in `@/lib/utils`):

```ts
import { valueUpdater } from '@/components/ui/table/utils'
```

<!--
Source references:
- https://www.shadcn-vue.com/docs/cli
- https://www.shadcn-vue.com/docs/components-json
- https://www.shadcn-vue.com/docs/installation
-->
