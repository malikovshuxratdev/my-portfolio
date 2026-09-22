import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ORGS, PROJECTS, type Project } from '@/data/projects';
import { cn } from '@/lib/cn';
import { Archive } from './Archive';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const { t } = useTranslation();
    return (
        <Reveal delay={(index % 2) * 0.08} className={cn(project.featured && 'lg:col-span-2')}>
            <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group block h-full overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
            >
                {/* Browser frame */}
                <div className="border-b border-line bg-bg-2 px-3 py-2.5 sm:px-4">
                    <div className="flex items-center gap-3">
                        <div className="hidden gap-1.5 sm:flex" aria-hidden>
                            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                        </div>
                        <div className="flex flex-1 items-center gap-2 rounded-md border border-line bg-bg px-3 py-1 font-mono text-[11px] text-muted">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden />
                            {project.domain}
                        </div>
                        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted sm:block">
                            {t(`projects.kinds.${project.kind}`)}
                        </span>
                    </div>
                </div>

                <div className={cn('relative overflow-hidden', project.featured ? 'aspect-[16/8]' : 'aspect-[16/10]')}>
                    <img
                        src={project.image}
                        alt={`${project.name} — ${t(`projects.${project.id}.title`)}`}
                        loading="lazy"
                        decoding="async"
                        width={1600}
                        height={1000}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="font-display text-lg font-semibold tracking-tight sm:text-2xl">{project.name}</h3>
                            <p className="mt-1 text-sm font-medium text-accent">{t(`projects.${project.id}.title`)}</p>
                            <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[11px] text-muted">
                                <span
                                    className={cn('h-1.5 w-1.5 rounded-full', project.org === 'ida' ? 'bg-accent' : 'bg-sky-400')}
                                    aria-hidden
                                />
                                {t(`projects.orgs.${project.org}`)}
                                <span className="text-muted/60">· {ORGS[project.org].url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}</span>
                            </p>
                        </div>
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                            <ArrowUpRight size={16} />
                        </span>
                    </div>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted sm:text-sm">{t(`projects.${project.id}.description`)}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.map((s) => (
                            <li key={s} className="chip">
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </a>
        </Reveal>
    );
}

export function Projects() {
    const { t } = useTranslation();
    return (
        <section id="projects" className="scroll-mt-20 bg-bg-2/60 py-24 sm:py-32">
            <div className="container-page">
                <SectionHeading
                    index="02"
                    eyebrow={t('sections.projects.eyebrow')}
                    title={t('sections.projects.title')}
                    lead={t('sections.projects.lead')}
                />
                <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>
                <Reveal>
                    <p className="mt-8 font-mono text-xs text-muted">↳ {t('sections.projects.note')}</p>
                </Reveal>

                <Archive />
            </div>
        </section>
    );
}
