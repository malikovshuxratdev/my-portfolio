import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ARCHIVE, type ArchiveProject } from '@/data/projects';
import { Reveal } from './Reveal';

function Card({ project, index }: { project: ArchiveProject; index: number }) {
    const { t } = useTranslation();
    const live = Boolean(project.url);

    const inner = (
        <>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-bg-2">
                <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-1000 ease-out-expo group-hover:scale-[1.04]"
                />
                {!live && <div className="absolute inset-0 bg-bg/35 transition-colors group-hover:bg-bg/20" aria-hidden />}
            </div>

            <div className="mt-3.5 flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="truncate font-display text-base font-semibold tracking-tight">{project.name}</h3>
                    <p className="mt-0.5 truncate font-mono text-[11px] text-muted">
                        {project.label} · {t(`archive.platform.${project.platform}`)}
                    </p>
                </div>
                {live ? (
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                        <ArrowUpRight size={13} />
                    </span>
                ) : (
                    <span className="mt-1 shrink-0 rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                        {t('archive.archived')}
                    </span>
                )}
            </div>

            <p className="mt-2 text-[13px] leading-relaxed text-muted">{t(`archive.items.${project.id}`)}</p>

            <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((s) => (
                    <li key={s} className="chip !text-[10px]">
                        {s}
                    </li>
                ))}
            </ul>
        </>
    );

    const className = 'group block h-full';

    return (
        <Reveal delay={(index % 4) * 0.04}>
            {live ? (
                <a href={project.url} target="_blank" rel="noreferrer" className={className}>
                    {inner}
                </a>
            ) : (
                <div className={className}>{inner}</div>
            )}
        </Reveal>
    );
}

export function Archive() {
    const { t } = useTranslation();
    return (
        <div className="mt-24 border-t border-line pt-16 sm:mt-32 sm:pt-20">
            <Reveal className="mb-10 grid gap-5 md:grid-cols-[auto_1fr] md:gap-12">
                <div className="flex items-start gap-3 md:w-40">
                    <span className="font-mono text-[11px] text-muted">02b</span>
                    <span className="eyebrow">{t('sections.archive.eyebrow')}</span>
                </div>
                <div className="max-w-2xl">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                        {t('sections.archive.title')}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">{t('sections.archive.lead')}</p>
                </div>
            </Reveal>

            <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {ARCHIVE.map((p, i) => (
                    <Card key={p.id} project={p} index={i} />
                ))}
            </div>

            <Reveal>
                <p className="mt-8 font-mono text-xs text-muted">↳ {t('archive.archivedNote')}</p>
            </Reveal>
        </div>
    );
}
