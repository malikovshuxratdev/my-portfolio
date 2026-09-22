export type SkillGroup = { id: string; items: string[] };

export const SKILLS: SkillGroup[] = [
    { id: 'languages', items: ['TypeScript', 'JavaScript (ES2015+)', 'HTML5', 'CSS3', 'SCSS'] },
    {
        id: 'web',
        items: ['React 18/19', 'Hooks · Context · Suspense', 'Next.js App Router', 'SSR · SSG · ISR', 'Metadata API', 'Vite', 'Vite SSR + Express', 'React Router v7', 'Node.js'],
    },
    {
        id: 'mobile',
        items: ['React Native (CLI & Expo)', 'EAS Build & Submit', 'React Navigation', 'App Store Connect', 'TestFlight', 'Google Play', 'Sign in with Apple', 'Xcode', 'Android Studio'],
    },
    {
        id: 'ui',
        items: ['shadcn/ui', 'Radix UI', 'Ant Design', 'Material UI', 'Tailwind CSS', 'Bootstrap', 'CSS Modules', 'Flexbox · Grid', 'Theming · dark mode', 'Design tokens', 'a11y'],
    },
    {
        id: 'state',
        items: ['Redux Toolkit', 'Redux Persist', 'Zustand', 'MobX', 'Context API', 'TanStack Query', 'Axios interceptors', 'Token refresh', 'REST', 'WebSocket', 'Swagger / OpenAPI', 'JWT', 'OAuth 2.0', 'Firebase', 'Supabase'],
    },
    {
        id: 'forms',
        items: ['React Hook Form', 'Zod', 'Yup', 'Multi-step forms', 'Draft persistence', 'Recharts', 'Ant Design Charts', 'i18next'],
    },
    {
        id: 'seo',
        items: ['SSR / SSG', 'react-helmet-async', 'Open Graph', 'Sitemap generation', 'Google Analytics 4', 'Code splitting', 'Lazy loading', 'Memoisation'],
    },
    {
        id: 'architecture',
        items: ['Feature-based structure', 'Component libraries', 'Custom hooks', 'Typed API layer', 'ESLint', 'Prettier', 'Conventional Commits', 'Code review'],
    },
    {
        id: 'devops',
        items: ['Docker', 'Docker Compose', 'nginx', 'PM2', 'GitHub Actions', 'Self-hosted runners', 'GitLab CI/CD', 'Ubuntu', 'SSH', 'Vercel', 'MinIO (S3)'],
    },
    { id: 'backend', items: ['Python', 'Django', 'FastAPI', 'Go', 'Node.js (Express)', 'PostgreSQL', 'Redis'] },
    {
        id: 'ai',
        items: ['UI for LLM-powered features', 'AI text-detection UI', 'Prompt engineering', 'Claude Code', 'Skills & plugins', 'CLAUDE.md rules', 'MCP (Figma, Linear)', 'AI-assisted review'],
    },
    { id: 'tools', items: ['Git', 'GitHub', 'GitLab', 'Figma (Dev Mode)', 'Linear', 'VS Code', 'npm · yarn · pnpm'] },
];
