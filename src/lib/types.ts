// Type definitions for Awesome DevSecOps

// Tool Types
export type ToolCategory =
  | 'sast'
  | 'dast'
  | 'sca'
  | 'container'
  | 'iac'
  | 'secrets'
  | 'cloud'
  | 'ci-cd'
  | 'monitoring'
  | 'compliance'
  | 'training';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  tags: string[];
  logo: string;
  website: string;
  github?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  license: 'open-source' | 'commercial' | 'freemium';
  features: string[];
  integrations: string[];
  popularity: number;
  featured: boolean;
}

export interface CategoryInfo {
  id: ToolCategory;
  name: string;
  description: string;
  icon: string;
  count: number;
}

// Roadmap Types
export type PhaseDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Skill {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  resources: string[];
}

export interface RoadmapPhase {
  id: string;
  name: string;
  shortName: string;
  description: string;
  difficulty: PhaseDifficulty;
  duration: string;
  skills: Skill[];
  tools: string[];
  resources: {
    title: string;
    url: string;
    type: 'documentation' | 'course' | 'video' | 'article';
  }[];
  order: number;
  icon: string;
  color: string;
}

// Resource Types
export type ResourceType = 'book' | 'course' | 'video' | 'podcast' | 'blog' | 'practice';

export type ResourceLevel = 'beginner' | 'intermediate' | 'advanced' | 'all';

export type ResourceCost = 'free' | 'paid' | 'freemium';

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  level: ResourceLevel;
  cost: ResourceCost;
  url: string;
  author?: string;
  duration?: string;
  tags: string[];
  rating?: number;
  featured: boolean;
  image?: string;
}

// Code Example Types
export type CodeCategory = 'github-actions' | 'gitlab-ci' | 'jenkins' | 'docker' | 'kubernetes' | 'terraform';

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  category: CodeCategory;
  code: string;
  language: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// Lifecycle Phase
export interface LifecyclePhase {
  id: string;
  name: string;
  icon: string;
  description: string;
  securityFocus: string[];
  tools: string[];
}

// Principle
export interface Principle {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

// Learning Path
export interface LearningPath {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  description: string;
  topics: string[];
  prerequisites: string[];
}

// Community Types
export interface Contributor {
  name: string;
  avatar: string;
  role: string;
  contributions: number;
  github?: string;
  twitter?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: 'webinar' | 'conference' | 'workshop' | 'meetup';
  url: string;
  description: string;
}
