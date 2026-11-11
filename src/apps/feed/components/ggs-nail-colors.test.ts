import { describe, expect, it } from 'vitest';
import { GGS_NAIL_COLORS, GGS_NAIL_COLORS_PROMO, GGS_NAIL_COLORS_SLIDE, GGS_NAIL_LOOP_SECONDS } from './ggs-nail-colors';

describe('GGS nail art polos promo (slide 32)', () => {
  it('is GGS Feed slide 32', () => {
    expect(GGS_NAIL_COLORS_SLIDE).toBe(32);
  });

  it('sells nail art at 35.000', () => {
    expect(GGS_NAIL_COLORS_PROMO.title).toBe('Nail Art');
    expect(GGS_NAIL_COLORS_PROMO.price).toBe('35.000');
  });

  it('cycles through all 16 swatch colors from the owner photos, each once', () => {
    expect(GGS_NAIL_COLORS).toHaveLength(16);
    expect(new Set(GGS_NAIL_COLORS.map((c) => c.hex)).size).toBe(16);
    expect(GGS_NAIL_LOOP_SECONDS).toBe(20);
  });
});
