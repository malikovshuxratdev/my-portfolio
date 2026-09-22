export type Experience = {
    id: 'ida' | 'softwhere' | 'empire';
    company: string;
    url?: string;
    start: string; // YYYY-MM
    end: string | null; // null = present
    stack: string[];
};

export const EXPERIENCE: Experience[] = [
    {
        id: 'ida',
        company: 'Innovation Development Agency',
        url: 'https://gov.uz/oz/innovation',
        start: '2025-02',
        end: null,
        stack: [
            'React',
            'Next.js',
            'TypeScript',
            'Vite SSR',
            'TanStack Query',
            'Redux Toolkit',
            'Ant Design',
            'shadcn/ui',
            'Tailwind CSS',
            'Docker',
            'nginx',
            'GitHub Actions',
        ],
    },
    {
        id: 'softwhere',
        company: 'Softwhere',
        url: 'https://softwhere-uz-86ky.vercel.app',
        start: '2023-12',
        end: '2025-01',
        stack: [
            'React Native',
            'Expo',
            'React',
            'TypeScript',
            'Redux Toolkit',
            'MobX',
            'React Query',
            'MUI',
            'Tailwind CSS',
            'WebSocket',
        ],
    },
    {
        id: 'empire',
        company: 'Empire Soft',
        url: 'https://empire-soft.net',
        start: '2022-09',
        end: '2023-11',
        stack: [
            'React Native',
            'Expo',
            'React',
            'TypeScript',
            'JavaScript',
            'Redux Toolkit',
            'MobX',
            'Axios',
            'Tailwind CSS',
            'ESLint',
        ],
    },
];
