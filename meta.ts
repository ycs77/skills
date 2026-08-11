export interface VendorSkillMeta {
  official?: boolean
  source: string
  skillsPath?: string // Optional custom path to skills directory (default: 'skills')
  skills: Record<string, string> // sourceSkillName -> outputSkillName
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules: Record<string, string> = {
  //
}

/**
 * Already generated skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {
  mattpocock: {
    source: 'https://github.com/mattpocock/skills',
    skills: {
      'engineering/setup-matt-pocock-skills': 'setup-matt-pocock-skills',
      'engineering/ask-matt': 'ask-matt',
      'engineering/grill-with-docs': 'grill-with-docs',
      'engineering/to-spec': 'to-spec',
      'engineering/to-tickets': 'to-tickets',
      'engineering/implement': 'implement',
      'engineering/code-review': 'code-review',
      'engineering/wayfinder': 'wayfinder',
      'engineering/prototype': 'prototype',
      'engineering/research': 'research',
      'engineering/improve-codebase-architecture': 'improve-codebase-architecture',
      'engineering/diagnosing-bugs': 'diagnosing-bugs',
      'engineering/triage': 'triage',
      'engineering/wizard': 'wizard',
      'engineering/codebase-design': 'codebase-design',
      'engineering/domain-modeling': 'domain-modeling',
      'engineering/tdd': 'tdd',
      'productivity/grill-me': 'grill-me',
      'productivity/handoff': 'handoff',
      'productivity/to-questionnaire': 'to-questionnaire',
      'productivity/teach': 'teach',
      'productivity/wait-what': 'wait-what',
      'productivity/writing-for-agents': 'writing-for-agents',
      'productivity/grilling': 'grilling',
    },
  },
}

/**
 * Self-maintained skills with Lucas Yang's preferences/tastes/recommendations
 */
export const manual = [
  'commit-message',
  'github-release-notes',
  'scan-repo',
  'scan-skill',
  'write-social-post',
  'ycs77-vue',
]
