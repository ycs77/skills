---
name: core-theming
description: CSS variables, color conventions, theme tokens, radius scale, dark mode setup, and custom color creation for shadcn-vue.
---

# Theming & Dark Mode

## Color Convention

shadcn-vue uses semantic background/foreground pairs. The base token controls the surface color; the `-foreground` token controls the text and icon color on that surface.

```vue
<div class="bg-primary text-primary-foreground">Hello</div>
```

The background suffix is omitted for the surface token — `primary` pairs with `primary-foreground`.

## CSS Variables (Recommended)

Set `tailwind.cssVariables: true` in `components.json` (this is the default). Tailwind maps tokens to utilities like `bg-background`, `text-foreground`, `border-border`, `ring-ring`.

Dark mode works by overriding the same tokens inside a `.dark` selector.

## Theme Tokens

These tokens live in your CSS file under `:root` and `.dark`.

| Token | What it controls | Used by |
|-------|-----------------|---------|
| `background` / `foreground` | Default app background and text | Page shell, default text |
| `card` / `card-foreground` | Elevated surfaces and content | `Card`, dashboard panels |
| `popover` / `popover-foreground` | Floating surfaces and content | `Popover`, `DropdownMenu`, overlays |
| `primary` / `primary-foreground` | High-emphasis actions and brand | Default `Button`, selected states |
| `secondary` / `secondary-foreground` | Lower-emphasis filled actions | Secondary buttons and badges |
| `muted` / `muted-foreground` | Subtle surfaces and lower-emphasis content | Placeholders, helper text |
| `accent` / `accent-foreground` | Interactive hover/focus/active surfaces | Ghost buttons, menu highlights |
| `destructive` | Destructive actions and error emphasis | Destructive buttons, invalid states |
| `border` | Default borders and separators | Cards, menus, tables |
| `input` | Form control borders | `Input`, `Textarea`, `Select` |
| `ring` | Focus rings and outlines | Buttons, inputs, focusable controls |
| `chart-1` ... `chart-5` | Default chart palette | Charts |
| `sidebar` / `sidebar-foreground` | Base sidebar surface and text | `Sidebar` container |
| `sidebar-primary` / `sidebar-primary-foreground` | High-emphasis sidebar actions | Active sidebar items |
| `sidebar-accent` / `sidebar-accent-foreground` | Sidebar hover and selected states | Sidebar menu hover states |
| `sidebar-border` | Sidebar-specific borders | Sidebar headers, groups |
| `sidebar-ring` | Sidebar-specific focus rings | Focused controls in sidebar |
| `radius` | Base corner radius scale | All rounded elements |

## Radius Scale

`--radius` is the base radius token. A derived scale is generated in `@theme inline`:

```css
@theme inline {
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}
```

Changing `--radius` updates the entire radius scale. `radius-lg` is the base value.

## Default Theme CSS

Full `neutral` theme scaffold for `assets/css/tailwind.css`:

```css
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... all color tokens ... */
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... light mode values ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark mode values ... */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

Base color options (for `tailwind.baseColor`): `neutral`, `gray`, `zinc`, `stone`, `slate`.

## Adding Custom Tokens

Define in `:root` and `.dark`, then expose to Tailwind with `@theme inline`:

```css
:root {
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.28 0.07 46);
}

.dark {
  --warning: oklch(0.41 0.11 46);
  --warning-foreground: oklch(0.99 0.02 95);
}

@theme inline {
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}
```

Use in components:

```vue
<div class="bg-warning text-warning-foreground" />
```

## Without CSS Variables

```bash
npx shadcn-vue@latest init --no-css-variables
```

This is an installation-time choice. To switch an existing project, delete and re-install your components.

## Dark Mode Setup

### Vite

Use `@vueuse/core` `useColorMode`:

```ts
// composables/useColorMode.ts
import { useColorMode as useColorModeVueUse } from '@vueuse/core'

export function useColorMode() {
  return useColorModeVueUse({ emitAuto: true })
}
```

Toggle button:

```vue
<script setup lang="ts">
import { useColorMode } from '@/composables/useColorMode'
const mode = useColorMode()
</script>

<template>
  <Button @click="mode = mode === 'dark' ? 'light' : 'dark'" variant="outline" size="icon">
    <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  </Button>
</template>
```

### Nuxt

Use `@nuxtjs/color-mode` module:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: { classSuffix: '' },
})
```

```vue
<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <Button @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'">
    Toggle
  </Button>
</template>
```

<!--
Source references:
- https://www.shadcn-vue.com/docs/theming
- https://www.shadcn-vue.com/docs/dark-mode
-->
