import { useTranslation } from 'react-i18next';
import { SKILLS } from '@/data/skills';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Skills() {
    const { t } = useTranslation();
    return (
        <section id="skills" className="scroll-mt-20 py-24 sm:py-32">
            <div className="container-page">
                <SectionHeading
                    index="03"
                    eyebrow={t('sections.skills.eyebrow')}
                    title={t('sections.skills.title')}
                    lead={t('sections.skills.lead')}
                />
                <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILLS.map((group, i) => (
                        <Reveal key={group.id} delay={(i % 3) * 0.05}>
                            <div className="border-t border-line pt-5">
                                <h3 className="flex items-baseline gap-2 font-display text-base font-semibold">
                                    <span className="font-mono text-[11px] text-accent">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    {t(`skills.${group.id}`)}
                                </h3>
                                <ul className="mt-3 flex flex-wrap gap-1.5">
                                    {group.items.map((item) => (
                                        <li key={item} className="chip hover:border-accent hover:text-accent">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
