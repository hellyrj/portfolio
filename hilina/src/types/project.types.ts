export interface Project {
   
    id: number;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    screenshots?: string[];
    technologies: string[];
    features: string[];
    challenges?: string;
    learnings?: string;
    liveLink?: string;
    githubLink: string;
    duration: string;
    role?: string;
    featured: boolean;
    completionDate?: Date;
    
}

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'mobile' ;


export interface ProjectFilters {
    category?: ProjectCategory;
    technology?: string;
    featured?:boolean;
}