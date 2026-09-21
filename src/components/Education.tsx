import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

type Lang = { name: string; level: string };

export function Education() {
    const { t } = useTranslation();
    const languages = t('education.languages', { returnObjects: true }) as Lang[];

    return (
        <section className="py-24 sm:py-28">
            <div className="container-page">
                <SectionHeading
                    index="04"
                    eyebrow={t('sections.education.eyebrow')}
                    title={t('sections.education.title')}
                />
                <div className="grid gap-6 md:grid-cols-2">
                    <Reveal>
                        <div className="h-full rounded-2xl border border-line bg-card p-6 sm:p-8">
                            <GraduationCap size={22} className="text-accent" />
                            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                                {t('education.school')}
                            </h3>
                            <p className="mt-2 text-muted">{t('education.degree')}</p>
                            <p className="mt-4 font-mono text-xs text-muted">{t('education.years')}</p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <div className="h-full rounded-2xl border border-line bg-card p-6 sm:p-8">
                            <h3 className="font-display text-xl font-semibold tracking-tight">
                                {t('education.languagesTitle')}
                            </h3>
                            <dl className="mt-5 divide-y divide-line">
                                {languages.map((l) => (
                                    <div key={l.name} className="flex items-baseline justify-between gap-4 py-3.5">
                                        <dt className="font-medium">{l.name}</dt>
                                        <dd className="font-mono text-xs text-muted">{l.level}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
