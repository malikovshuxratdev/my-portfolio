import { ArrowDown, FileDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MARQUEE, PROFILE } from '@/data/profile';

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
    const { t } = useTranslation();
    const reduce = useReducedMotion();
    const rise = (delay: number) => ({
        initial: reduce ? false : { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, delay, ease },
    });

    const stats = [
        { value: `${PROFILE.yearsOfExperience}+`, label: t('hero.stats.years') },
        { value: String(PROFILE.platformsInProduction), label: t('hero.stats.platforms') },
        { value: String(PROFILE.companies), label: t('hero.stats.companies') },
    ];

    return (
        <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
            <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
            <div
                className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(closest-side, var(--glow), transparent)' }}
                aria-hidden
            />

            <div className="container-page grid items-end gap-14 lg:grid-cols-[1.4fr_1fr]">
                <div>
                    <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
                        <span className="eyebrow">{t('hero.eyebrow')}</span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
                            <span className="dot-live h-1.5 w-1.5 rounded-full bg-green-500" />
                            {t('hero.available')}
                        </span>
                    </motion.div>

                    <motion.h1
                        {...rise(0.1)}
                        className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-balance"
                    >
                        {PROFILE.name}
                    </motion.h1>

                    <motion.p
                        {...rise(0.2)}
                        className="mt-5 max-w-2xl font-display text-[clamp(1.35rem,3vw,2.1rem)] font-medium leading-tight tracking-[-0.015em] text-muted"
                    >
                        {t('hero.title1')}{' '}
                        <span className="text-fg">{t('hero.title2')}</span>
                    </motion.p>

                    <motion.p {...rise(0.3)} className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                        {t('hero.lead', { years: PROFILE.yearsOfExperience })}{' '}
                        <span className="text-fg">{t('hero.ai')}</span>
                    </motion.p>

                    <motion.div {...rise(0.4)} className="mt-9 flex flex-wrap gap-3">
                        <a href="#projects" className="btn-primary">
                            {t('hero.ctaProjects')} <ArrowDown size={16} />
                        </a>
                        <a href={PROFILE.resume} download className="btn-ghost">
                            <FileDown size={16} /> {t('hero.ctaResume')}
                        </a>
                    </motion.div>

                    <motion.dl {...rise(0.5)} className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line">
                        {stats.map((s) => (
                            <div key={s.label} className="px-4 py-5 first:pl-0">
                                <dt className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dt>
                                <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
                            </div>
                        ))}
                    </motion.dl>
                </div>

                <motion.figure
                    initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.1, delay: 0.25, ease }}
                    className="relative mx-auto w-full max-w-xs lg:max-w-sm"
                >
                    <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-line" aria-hidden />
                    <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" aria-hidden />
                    <img
                        src="/me.webp"
                        alt={PROFILE.name}
                        width={720}
                        height={720}
                        fetchPriority="high"
                        className="aspect-square w-full rounded-[1.6rem] object-cover object-top grayscale-[15%] contrast-[1.04]"
                    />
                    <figcaption className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-line bg-card/90 px-4 py-3 shadow-xl backdrop-blur">
                        <div className="text-sm font-medium">{t('hero.photoRole')}</div>
                        <div className="text-xs text-muted">{t('hero.photoOrg')} · 2025 →</div>
                    </figcaption>
                </motion.figure>
            </div>

            <motion.div {...rise(0.6)} className="marquee mt-20 border-y border-line py-4" aria-hidden>
                <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {[...MARQUEE, ...MARQUEE].map((item, i) => (
                        <span key={i} className="flex items-center gap-10">
                            {item}
                            <span className="h-1 w-1 rounded-full bg-accent" />
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
