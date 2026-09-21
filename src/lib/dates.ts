/** Months between two YYYY-MM strings, inclusive of the start month. */
export function monthsBetween(start: string, end: string | null): number {
    const [sy, sm] = start.split('-').map(Number);
    const endDate = end ? end.split('-').map(Number) : [new Date().getFullYear(), new Date().getMonth() + 1];
    const [ey, em] = endDate;
    return (ey - sy) * 12 + (em - sm) + 1;
}

export function formatMonth(ym: string, locale: string): string {
    const [y, m] = ym.split('-').map(Number);
    return new Intl.DateTimeFormat(locale === 'uz' ? 'uz-Latn-UZ' : 'en-US', {
        month: 'short',
        year: 'numeric',
    }).format(new Date(y, m - 1, 1));
}
