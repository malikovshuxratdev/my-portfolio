import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

type Props = {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
};

/** Fades + rises children the first time they are seen (or scrolled past). */
export function Reveal({ children, delay = 0, y = 24, className }: Props) {
    const reduce = useReducedMotion();
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={reduce ? false : { opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
}
