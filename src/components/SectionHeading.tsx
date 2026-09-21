import { Reveal } from './Reveal';

type Props = { eyebrow: string; title: string; lead?: string; index: string };

export function SectionHeading({ eyebrow, title, lead, index }: Props) {
    return (
        <Reveal className="mb-10 grid gap-5 sm:mb-16 sm:gap-6 md:grid-cols-[auto_1fr] md:gap-12">
            <div className="flex items-start gap-3 md:w-40">
                <span className="font-mono text-[11px] text-muted">{index}</span>
                <span className="eyebrow">{eyebrow}</span>
            </div>
            <div className="max-w-2xl">
                <h2 className="h-section text-balance">{title}</h2>
                {lead && <p className="mt-4 leading-relaxed text-muted sm:text-lg">{lead}</p>}
            </div>
        </Reveal>
    );
}
