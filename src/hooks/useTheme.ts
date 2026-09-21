import { useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

function readTheme(): Theme {
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') return saved;
    } catch {
        /* storage unavailable */
    }
    return 'dark';
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(readTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        try {
            localStorage.setItem('theme', theme);
        } catch {
            /* storage unavailable */
        }
    }, [theme]);

    const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
    return { theme, toggle };
}
