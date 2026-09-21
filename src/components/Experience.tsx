import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EXPERIENCE, type Experience as Job } from '@/data/experience';
import { formatMonth, monthsBetween } from '@/lib/dates';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function Duration({ start, end }: { start: string; end: string | null }) {
    const { t } = useTranslation();
    const total = monthsBetween(start, end);
    const years = Math.floor(total / 12);
    const months = total % 12;
    const parts = [
        years > 0 && t('experience.duration.years', { count: years }),
        months > 0 && t('experience.duration.months', { count: months }),
    ].filter(Boolean);
    return <span>{parts.join(' ')}</span>;
}

function JobCard({ job, index }: { job: Job; index: number }) {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(index === 0);
    const bullets = t(`experience.${job.id}.bullets`, { returnObjects: true }) as string[];

    return (
        <Reveal delay={index * 0.05}>
            <article className="group relative grid gap-6 border-t border-line py-10 md:grid-cols-[13rem_1fr] md:gap-12">
                <div className="md:sticky md:top-24 md:self-start">
                    <div className="font-mono text-xs text-muted">
                        {formatMonth(job.start, i18n.language)} —{' '}
                        {job.end ? formatMonth(job.end, i18n.language) : t('experience.present')}
                    </div>
                    <div className="mt-1 font-mono text-xs text-accent">
                        <Duration start={job.start} end={job.end} />
                    </div>
                    {!job.end && (
                        <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
                            <span className="dot-live h-1.5 w-1.5 rounded-full bg-green-500" />
                            {t('experience.present')}
                        </span>
                    )}
                </div>

                <div>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                                {t(`experience.${job.id}.role`)}
                            </h3>
                            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                                {job.url ? (
                                    <a
                                        href={job.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 font-medium text-fg hover:text-accent"
                                    >
                                        {job.company} <ArrowUpRight size={14} />
                                    </a>
                                ) : (
                                    <span className="font-medium text-fg">{job.company}</span>
                                )}
                                <span aria-hidden>·</span>
                                <span>{t(`experience.${job.id}.type`)}</span>
                            </div>
                        </div>
                    </div>

                    <p className="mt-5 max-w-2xl leading-relaxed text-muted">{t(`experience.${job.id}.summary`)}</p>

                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={t('experience.stack')}>
                        {job.stack.map((s) => (
                            <li key={s} className="chip group-hover:border-line-strong">
                                {s}
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                    >
                        {open ? t('experience.showLess') : t('experience.showMore')}
                        <ChevronDown size={16} className={cn('transition-transform', open && 'rotate-180')} />
                    </button>

                    <AnimatePresence initial={false}>
                        {open && (
                            <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                {bullets.map((b, i) => (
                                    <li key={i} className="flex gap-3 pt-4 text-sm leading-relaxed text-muted first:pt-5">
                                        <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" aria-hidden />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </article>
        </Reveal>
    );
}

export function Experience() {
    const { t } = useTranslation();
    return (
        <section id="experience" className="scroll-mt-20 py-24 sm:py-32">
            <div className="container-page">
                <SectionHeading
                    index="01"
                    eyebrow={t('sections.experience.eyebrow')}
                    title={t('sections.experience.title')}
                    lead={t('sections.experience.lead')}
                />
                <div className="border-b border-line">
                    {EXPERIENCE.map((job, i) => (
                        <JobCard key={job.id} job={job} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
