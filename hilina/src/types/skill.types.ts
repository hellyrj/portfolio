export interface Skill {
    name: string;
    level: number;
    icon: string;
    category: SkillCategory;
    yearsOfExperience?: number;

}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'soft skills';

export interface skillGroup {
    category: SkillCategory;
    title: string;
    skills: Skill[];
    icon?: string;

}