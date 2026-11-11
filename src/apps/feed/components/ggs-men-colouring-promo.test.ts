import { describe, expect, it } from 'vitest';
import {
  GGS_MEN_COLOURING_PROMO,
  GGS_MEN_COLOURING_SLIDE,
  GGS_MEN_HAIR_COLORS,
  GGS_MEN_HAIR_LOOP_SECONDS,
} from './ggs-men-colouring-promo';

describe('GGS Cowok colouring promo', () => {
  it('is slide 6', () => {
    expect(GGS_MEN_COLOURING_SLIDE).toBe(6);
  });
  it('costs Rp200.000', () => {
    expect(GGS_MEN_COLOURING_PROMO.price).toBe(200000);
  });
  it('cycles through 8 distinct hair colours in one 12.8-second loop', () => {
    expect(new Set(GGS_MEN_HAIR_COLORS.map((c) => c.hex)).size).toBe(8);
    expect(GGS_MEN_HAIR_LOOP_SECONDS).toBeCloseTo(12.8);
  });
});
