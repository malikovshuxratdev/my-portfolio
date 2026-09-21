import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { PROFILE } from '@/data/profile';
import { useCopy } from '@/hooks/useCopy';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function GithubIcon(props: { size?: number }) {
    const s = props.size ?? 18;
    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.339-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
        </svg>
    );
}

function TelegramIcon(props: { size?: number }) {
    const s = props.size ?? 18;
    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M21.94 4.3 18.6 20.03c-.25 1.11-.91 1.39-1.84.86l-5.09-3.75-2.46 2.37c-.27.27-.5.5-1.03.5l.37-5.2 9.47-8.56c.41-.37-.09-.57-.64-.2L5.68 12.42.64 10.85c-1.1-.34-1.12-1.1.23-1.63L20.5 2.68c.91-.34 1.71.2 1.44 1.62Z" />
        </svg>
    );
}

function CopyRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
    const { t } = useTranslation();
    const { copied, copy } = useCopy();
    return (
        <div className="flex items-center justify-between gap-3 border-b border-line py-3.5 sm:gap-4 sm:py-4">
            <a href={href} target="_blank" rel="noreferrer" className="group flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                    {icon}
                </span>
                <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">{label}</span>
                    <span className="block truncate text-sm font-medium transition-colors group-hover:text-accent sm:text-base">{value}</span>
                </span>
            </a>
            <button
                type="button"
                onClick={() => copy(value)}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label={copied ? t('contact.copied') : `${t('contact.copy')} ${label}`}
            >
                {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
        </div>
    );
}

export function Contact() {
    const { t } = useTranslation();
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    // No backend to trust with personal data: compose a mail draft the user sends themselves.
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio — ${form.name || 'Hello'}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
        window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    };

    const field =
        'w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent';

    return (
        <section id="contact" className="scroll-mt-20 bg-bg-2/60 py-24 sm:py-32">
            <div className="container-page">
                <SectionHeading
                    index="05"
                    eyebrow={t('sections.contact.eyebrow')}
                    title={t('sections.contact.title')}
                    lead={t('sections.contact.lead')}
                />
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <Reveal>
                        <div>
                            <CopyRow icon={<Mail size={18} />} label={t('contact.email')} value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
                            <CopyRow icon={<Phone size={18} />} label={t('contact.phone')} value={PROFILE.phone} href={PROFILE.phoneHref} />
                            <CopyRow icon={<TelegramIcon />} label={t('contact.telegram')} value={PROFILE.telegramHandle} href={PROFILE.telegram} />
                            <CopyRow icon={<GithubIcon />} label={t('contact.github')} value={PROFILE.githubHandle} href={PROFILE.github} />
                            <div className="flex items-center gap-3 py-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted">
                                    <MapPin size={18} />
                                </span>
                                <span>
                                    <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">
                                        {t('contact.location')}
                                    </span>
                                    <span className="block text-sm font-medium sm:text-base">{PROFILE.location}</span>
                                </span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-card p-5 sm:p-8">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
                                        {t('contact.form.name')}
                                    </span>
                                    <input
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder={t('contact.form.placeholderName')}
                                        className={field}
                                    />
                                </label>
                                <label className="block">
                                    <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
                                        {t('contact.form.email')}
                                    </span>
                                    <input
                                        required
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        placeholder={t('contact.form.placeholderEmail')}
                                        className={field}
                                    />
                                </label>
                            </div>
                            <label className="mt-4 block">
                                <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
                                    {t('contact.form.message')}
                                </span>
                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    placeholder={t('contact.form.placeholderMessage')}
                                    className={`${field} resize-none`}
                                />
                            </label>
                            <button type="submit" className="btn-primary mt-5 w-full justify-center">
                                <Send size={16} /> {t('contact.form.send')}
                            </button>
                            <p className="mt-3 text-center text-xs text-muted">{t('contact.form.hint')}</p>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
