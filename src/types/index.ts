// ============================================
// TOOL TYPES
// ============================================

export type ToolCategory =
  | 'sast'
  | 'dast'
  | 'sca'
  | 'secrets'
  | 'container'
  | 'iac'
  | 'api-security'
  | 'cloud-security'
  | 'sbom'
  | 'policy'
  | 'observability';

export type ToolType = 'open-source' | 'commercial' | 'freemium';

export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  categories: ToolCategory[];
  type: ToolType;
  license?: string;
  website: string;
  github?: string;
  documentation?: string;
  stars?: number;
  languages?: string[];
  integrations?: string[];
  featured: boolean;
  tags: string[];
}

// ============================================
// ROADMAP TYPES
// ============================================

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface SubSkill {
  id: string;
  name: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  subSkills: SubSkill[];
  tools: string[];
  resources: string[];
}

export interface RoadmapPhase {
  id: string;
  name: string;
  slug: string;
  description: string;
  difficulty: Difficulty;
  order: number;
  skills: Skill[];
  tools: string[];
  resources: string[];
  estimatedTime: string;
  icon: string;
  color: string;
}

// ============================================
// RESOURCE TYPES
// ============================================

export type ResourceType =
  | 'book'
  | 'course'
  | 'certification'
  | 'video'
  | 'podcast'
  | 'blog'
  | 'newsletter'
  | 'practice'
  | 'ctf';

export type ResourceLevel = 'beginner' | 'intermediate' | 'advanced' | 'all';
export type ResourceCost = 'free' | 'paid' | 'freemium';

export interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string;
  type: ResourceType;
  level: ResourceLevel;
  cost: ResourceCost;
  costDetails?: string;
  link: string;
  author?: string;
  provider?: string;
  duration?: string;
  rating?: number;
  featured: boolean;
  tags: string[];
}

// ============================================
// CODE EXAMPLE TYPES
// ============================================

export type CodeCategory =
  | 'github-actions'
  | 'gitlab-ci'
  | 'jenkins'
  | 'docker'
  | 'kubernetes'
  | 'terraform'
  | 'pre-commit'
  | 'scripts';

export interface CodeExample {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: CodeCategory;
  language: string;
  code: string;
  usageInstructions: string[];
  tags: string[];
  prerequisites?: string[];
  relatedTools?: string[];
}

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface CategoryInfo {
  id: ToolCategory;
  name: string;
  description: string;
  icon: string;
  count: number;
}

// ============================================
// USER PROGRESS TYPES
// ============================================

export interface PhaseProgress {
  phaseId: string;
  skillId: string;
  completed: boolean;
  completedAt?: string;
}

export interface UserProgress {
  roadmapProgress: PhaseProgress[];
  lastVisited: string;
}
