//exporting all for easy imports for others

export * from './project.types';
export * from './skill.types';
export * from './social.types';


export interface SectionProps{
    id?: string;
    className?: string;
}

export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export interface NavLink {
    name: string;
    href: string;
    current?: boolean;
}


