export interface Project {
  id: string
  title: string
  subtitle: string
  summary: string
  problem: string
  solution: string
  architectureDetails: string[]
  technologies: string[]
  category: 'AI & ML' | 'Backend & APIs' | 'Full-Stack' | 'Systems'
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  metricsOrHighlights?: string[]
}

export interface SkillCategory {
  title: string
  subtitle: string
  skills: {
    name: string
    description?: string
    level?: 'Advanced' | 'Proficient' | 'Core'
    icon?: string
  }[]
}

export interface EducationItem {
  institution: string
  degree: string
  field: string
  score: string
  scoreLabel: string
  period: string
  location: string
  highlights: string[]
}

export interface ExperienceItem {
  role: string
  organization: string
  period: string
  category: 'Leadership' | 'Academic' | 'Experience'
  description: string
  achievements: string[]
  tags: string[]
}

export interface AchievementItem {
  title: string
  award: string
  competition: string
  level: string
  date?: string
  description: string
  keyTakeaway: string
  tags: string[]
}
