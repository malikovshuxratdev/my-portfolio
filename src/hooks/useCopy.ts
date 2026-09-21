import { useCallback, useEffect, useRef, useState } from 'react';

export function useCopy(resetMs = 1800) {
    const [copied, setCopied] = useState(false);
    const timer = useRef<number | undefined>(undefined);

    useEffect(() => () => window.clearTimeout(timer.current), []);

    const copy = useCallback(
        async (text: string) => {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                window.clearTimeout(timer.current);
                timer.current = window.setTimeout(() => setCopied(false), resetMs);
            } catch {
                /* clipboard blocked; nothing to do */
            }
        },
        [resetMs]
    );

    return { copied, copy };
}
