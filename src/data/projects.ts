export type Project = {
    id: string;
    name: string;
    domain: string;
    url: string;
    image: string;
    kind: 'web' | 'ssr' | 'sso' | 'ai' | 'event' | 'booking';
    stack: string[];
    featured?: boolean;
};

export const PROJECTS: Project[] = [
    {
        id: 'slib',
        name: 'slib.uz',
        domain: 'slib.uz',
        url: 'https://slib.uz',
        image: '/projects/slib.webp',
        kind: 'ssr',
        featured: true,
        stack: ['React', 'Vite SSR', 'Express', 'TypeScript', 'TanStack Query', 'Redux Toolkit', 'Ant Design', 'react-helmet-async', 'Recharts'],
    },
    {
        id: 'anticopy',
        name: 'Anticopy',
        domain: 'anticopy.uz',
        url: 'https://anticopy.uz',
        image: '/projects/anticopy.webp',
        kind: 'ai',
        featured: true,
        stack: ['Next.js', 'TypeScript', 'Radix UI', 'Tailwind CSS', 'TanStack Query', 'Redux Toolkit', 'React Hook Form', 'Zod', 'Motion'],
    },
    {
        id: 'id',
        name: 'Science ID',
        domain: 'id.ilmiy.uz',
        url: 'https://id.ilmiy.uz',
        image: '/projects/id-ilmiy.webp',
        kind: 'sso',
        stack: ['React', 'Vite', 'TypeScript', 'TanStack Query', 'Redux Toolkit', 'Ant Design', 'Tailwind CSS', 'Recharts', 'i18next'],
    },
    {
        id: 'innoweek',
        name: 'InnoWeek',
        domain: 'innoweek.uz',
        url: 'https://innoweek.uz',
        image: '/projects/innoweek.webp',
        kind: 'event',
        stack: ['React', 'Vite', 'TypeScript', 'TanStack Query', 'Ant Design', 'Tailwind CSS', 'i18next'],
    },
    {
        id: 'tripogram',
        name: 'Tripogram',
        domain: 'tripogram.uz',
        url: 'https://tripogram.uz',
        image: '/projects/tripogram.webp',
        kind: 'booking',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'React Hook Form', 'Zod'],
    },
    {
        id: 'etaqriz',
        name: 'E-Taqriz',
        domain: 'etaqriz.uz',
        url: 'https://etaqriz.uz',
        image: '/projects/etaqriz.webp',
        kind: 'web',
        stack: ['React', 'Vite', 'TypeScript', 'TanStack Query', 'Redux Toolkit', 'Ant Design', 'Tailwind CSS'],
    },
    {
        id: 'internship',
        name: 'Research Internships',
        domain: 'internship.ilmiy.uz',
        url: 'https://internship.ilmiy.uz',
        image: '/projects/internship.webp',
        kind: 'web',
        stack: ['React', 'Vite', 'TypeScript', 'TanStack Query', 'Redux Toolkit', 'Ant Design', 'Tailwind CSS', 'i18next'],
    },
    {
        id: 'akadem',
        name: 'Academic Mobility',
        domain: 'akadem.ilmiy.uz',
        url: 'https://akadem.ilmiy.uz',
        image: '/projects/akadem.webp',
        kind: 'web',
        stack: ['React', 'Vite', 'TypeScript', 'TanStack Query', 'Redux Toolkit', 'Ant Design', 'Tailwind CSS', 'i18next'],
    },
];
