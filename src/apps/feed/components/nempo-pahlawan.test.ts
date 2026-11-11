import { describe, expect, it } from 'vitest';
import { NEMPO_PAHLAWAN_LOOP_SECONDS, NEMPO_PAHLAWAN_VIDEO_SECONDS, nempoPahlawan } from './nempo-pahlawan';

describe('NEMPO Hari Pahlawan slide', () => {
  it('commemorates 10 November 2026', () => {
    expect(nempoPahlawan.dateLabel).toBe('10 November 2026');
  });

  it('counts 81 years since the Battle of Surabaya (1945)', () => {
    expect(nempoPahlawan.yearsSinceBattle).toBe(81);
  });

  it('the downloadable video covers exactly two background video passes', () => {
    expect(NEMPO_PAHLAWAN_LOOP_SECONDS).toBe(NEMPO_PAHLAWAN_VIDEO_SECONDS * 2);
  });
});
