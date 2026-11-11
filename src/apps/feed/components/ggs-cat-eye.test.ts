import { describe, expect, it } from 'vitest';
import {
  GGS_CAT_EYE_COLORS,
  GGS_CAT_EYE_COLOR_SECONDS,
  GGS_CAT_EYE_LOOP_SECONDS,
  GGS_CAT_EYE_PROMO,
} from './ggs-cat-eye';

describe('GGS Feed slide 33 — cat-eye nail art promo', () => {
  it('sells the cat-eye motif at Rp 85.000, down from Rp 100.000', () => {
    expect(GGS_CAT_EYE_PROMO.price).toBe('85.000');
    expect(GGS_CAT_EYE_PROMO.was).toBe('100.000');
  });

  it('offers the 9 cat-eye colors from the owner swatch photo', () => {
    expect(GGS_CAT_EYE_COLORS).toHaveLength(9);
    expect(new Set(GGS_CAT_EYE_COLORS.map((c) => c.hex)).size).toBe(9);
  });

  it('loops for a whole number of 30 fps frames so the MP4 loops seamlessly', () => {
    expect(GGS_CAT_EYE_LOOP_SECONDS).toBe(GGS_CAT_EYE_COLORS.length * GGS_CAT_EYE_COLOR_SECONDS);
    expect((GGS_CAT_EYE_LOOP_SECONDS * 30) % 1).toBe(0);
  });
});
