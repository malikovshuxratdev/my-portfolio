import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PROFILE } from '@/data/profile';

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="border-t border-line py-10">
            <div className="container-page flex flex-col items-center justify-between gap-5 sm:flex-row">
                <p className="text-center text-xs text-muted sm:text-left">
                    {t('footer.rights', { year: new Date().getFullYear() })}
                </p>
                <div className="flex items-center gap-5">
                    <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-xs text-muted hover:text-accent">
                        GitHub
                    </a>
                    <a href={PROFILE.telegram} target="_blank" rel="noreferrer" className="text-xs text-muted hover:text-accent">
                        Telegram
                    </a>
                    <a
                        href="#top"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                        aria-label={t('footer.top')}
                    >
                        <ArrowUp size={15} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
