import { FileDown, Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS, PROFILE } from '@/data/profile';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

export function Header() {
    const { t, i18n } = useTranslation();
    const { theme, toggle } = useTheme();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const nextLang = i18n.language === 'uz' ? 'en' : 'uz';

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo',
                scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'bg-transparent'
            )}
        >
            <div className="container-page flex h-16 items-center justify-between">
                <a href="#top" className="font-display text-lg font-bold tracking-tight" aria-label="Home">
                    SM<span className="text-accent">.</span>
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-sm text-muted transition-colors hover:text-fg"
                        >
                            {t(item.key)}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-1.5">
                    <button
                        type="button"
                        onClick={() => i18n.changeLanguage(nextLang)}
                        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3 font-mono text-[11px] uppercase text-muted transition-colors hover:border-accent hover:text-accent"
                        aria-label={t('nav.language')}
                    >
                        <Languages size={14} /> {nextLang}
                    </button>
                    <button
                        type="button"
                        onClick={toggle}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                        aria-label={t('nav.theme')}
                    >
                        {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                    </button>
                    <a
                        href={PROFILE.resume}
                        download
                        className="btn-primary hidden h-9 px-4 py-0 text-xs md:inline-flex"
                    >
                        <FileDown size={14} /> {t('nav.resume')}
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg md:hidden"
                        aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
                        aria-expanded={open}
                    >
                        {open ? <X size={16} /> : <Menu size={16} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
                        aria-label="Mobile"
                    >
                        <div className="container-page flex flex-col py-4">
                            {NAV_ITEMS.map((item, i) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between border-b border-line py-4 font-display text-2xl font-semibold"
                                >
                                    {t(item.key)}
                                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                                </a>
                            ))}
                            <a href={PROFILE.resume} download className="btn-primary mt-5 justify-center">
                                <FileDown size={16} /> {t('nav.resume')}
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
