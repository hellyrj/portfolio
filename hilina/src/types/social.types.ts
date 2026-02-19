export interface SocialLink {
    name: string;
    url: string;
    icon: string; // Icon component name
    username?: string;
    followers?: number;
}

export interface ContactInfo {
    email: string;
    phone?: string;
    location?: string;
    socialLinks: SocialLink[];
}