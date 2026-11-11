/** NEMPO Feed slide 44 — Hari Pahlawan commemoration copy. */
export const NEMPO_PAHLAWAN_SLIDE = 44;

const BATTLE_YEAR = 1945;
const CURRENT_YEAR = 2026;

export const nempoPahlawan = {
  kicker: 'Selamat Memperingati',
  titleLines: ['Hari', 'Pahlawan'],
  dateLabel: '10 November 2026',
  battleYear: BATTLE_YEAR,
  year: CURRENT_YEAR,
  yearsSinceBattle: CURRENT_YEAR - BATTLE_YEAR,
  quote: 'Bangsa yang besar adalah bangsa yang menghormati jasa pahlawannya.',
  quoteBy: 'Ir. Soekarno',
  closing: 'Terus nyalakan semangatnya lewat karya.',
} as const;

/** One full loop of the slide: two passes of the 6.5 s background video. */
export const NEMPO_PAHLAWAN_LOOP_SECONDS = 13;
export const NEMPO_PAHLAWAN_VIDEO_SECONDS = 6.5;
