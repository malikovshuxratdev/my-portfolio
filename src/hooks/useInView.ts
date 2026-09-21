import { useEffect, useRef, useState } from 'react';

type Entry = { el: Element; reveal: () => void };

const watched = new Set<Entry>();
let frame = 0;

function check() {
    frame = 0;
    const limit = window.innerHeight * 0.92;
    for (const entry of watched) {
        // `top < limit` covers both "just scrolled into view" and "jumped past",
        // which a plain IntersectionObserver misses: going from below the fold
        // straight to above it never changes the intersection ratio, so the
        // observer would never fire and the section would stay invisible.
        if (entry.el.getBoundingClientRect().top < limit) {
            watched.delete(entry);
            entry.reveal();
        }
    }
    if (watched.size === 0) stop();
}

function schedule() {
    if (!frame) frame = requestAnimationFrame(check);
}

let listening = false;
function start() {
    if (listening) return;
    listening = true;
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
}
function stop() {
    if (!listening) return;
    listening = false;
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
}

/** Reveals an element once it reaches the viewport — or once it is scrolled past. */
export function useInView<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const entry: Entry = { el, reveal: () => setInView(true) };
        watched.add(entry);
        start();
        schedule();

        return () => {
            watched.delete(entry);
            if (watched.size === 0) stop();
        };
    }, []);

    return { ref, inView };
}
