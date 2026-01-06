export interface Milestone {
    year: string;
    title: string;
    description: string;
    icon: any; // Lucide icon
    image: string;
}

export interface StudioModule {
    icon: any; // Lucide icon
    label: string;
    desc: string;
    knobColor: string;
    patch: string;
    grid: string;
}

export interface HeadlinerData {
    tagline: string;
    subTagline: string;
    quote: string;
    name: string;
    role: string;
    image: string;
}

export interface EventItem {
    id: string;
    title: string;
    slug: string;
    description?: string;
    date: string;
    location?: string;
    iconName?: string;
    category?: string;
    gradientFrom?: string;
    gradientTo?: string;
    span?: string;
}
