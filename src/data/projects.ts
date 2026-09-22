export type Project = {
    id: string;
    name: string;
    domain: string;
    url: string;
    image: string;
    kind: 'web' | 'ssr' | 'sso' | 'ai' | 'event' | 'booking' | 'cabinet';
    stack: string[];
    featured?: boolean;
};

export const PROJECTS: Project[] = [
    {
        id: 'myilmiy',
        name: 'my.ilmiy.uz',
        domain: 'my.ilmiy.uz',
        url: 'https://my.ilmiy.uz/',
        image: '/projects/my-ilmiy.webp',
        kind: 'cabinet',
        featured: true,
        stack: ['Next.js App Router', 'TypeScript', 'SSR', 'Ant Design', 'Tailwind CSS', 'i18n routing'],
    },
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

export type ArchiveProject = {
    id: string;
    name: string;
    /** Where it lives, shown under the name: a domain or a store. */
    label: string;
    /** Omitted when the site or listing is gone — a dead link is worse than none. */
    url?: string;
    image: string;
    platform: 'web' | 'ios' | 'android' | 'mobile';
    stack: string[];
};

/** Earlier work, 2022–2024. Shown smaller, below the current platforms. */
export const ARCHIVE: ArchiveProject[] = [
    {
        id: 'hayat',
        name: 'Hayat Hospital',
        label: 'hayatmed.uz',
        url: 'https://hayatmed.uz/en/',
        image: '/projects/hayat.webp',
        platform: 'web',
        stack: ['React', 'TypeScript', 'React Query', 'MUI', 'Tailwind CSS'],
    },
    {
        id: 'banana',
        name: 'Banana TV',
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.anonymous.movieapp',
        image: '/projects/banana.webp',
        platform: 'android',
        stack: ['React Native', 'Expo', 'MobX', 'TypeScript', 'REST API'],
    },
    {
        id: 'polytex',
        name: 'Polytex Admin',
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/polytex-admin/id1628773445',
        image: '/projects/polytex.webp',
        platform: 'ios',
        stack: ['Expo', 'React Navigation', 'Redux', 'Axios'],
    },
    {
        id: 'lacasa',
        name: 'Lacasa',
        label: 'lacasa.uz',
        image: '/projects/lacasa.webp',
        platform: 'web',
        stack: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Firebase'],
    },
    {
        id: 'kiber',
        name: 'Kiber',
        label: 'kiber.uz',
        image: '/projects/kiber.webp',
        platform: 'web',
        stack: ['React', 'TypeScript', 'React Query', 'E-IMZO', 'Bootstrap'],
    },
    {
        id: 'birmakonWeb',
        name: 'Birmakon',
        label: 'birmakon.uz',
        url: 'https://birmakon.uz/',
        image: '/projects/birmakon-web.webp',
        platform: 'web',
        stack: ['React', 'TypeScript', 'MobX', 'Bootstrap', 'Firebase'],
    },
    {
        id: 'birmakonApp',
        name: 'Birmakon',
        label: 'Mobile app',
        image: '/projects/birmakon-app.webp',
        platform: 'mobile',
        stack: ['React Native', 'React Navigation', 'MobX', 'Axios'],
    },
    {
        id: 'modern',
        name: 'Modern Shop',
        label: 'Mobile app',
        image: '/projects/modern.webp',
        platform: 'mobile',
        stack: ['Expo', 'React Native', 'MobX', 'WebSocket', 'TypeScript'],
    },
];
