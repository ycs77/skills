export interface VendorSkillMeta {
  official?: boolean
  source: string
  skills: Record<string, string> // sourceSkillName -> outputSkillName
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules = {
  'shadcn-vue': 'https://github.com/unovue/shadcn-vue',
}

/**
 * Already generated skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {}

/**
 * Self-maintained skills with Lucas Yang's preferences/tastes/recommendations
 */
export const manual = [
  'commit-message',
  'ycs77-vue',
]
