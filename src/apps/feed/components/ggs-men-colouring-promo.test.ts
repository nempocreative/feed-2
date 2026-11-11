import { describe, expect, it } from 'vitest';
import { GGS_MEN_COLOURING_PROMO, GGS_MEN_COLOURING_SLIDE } from './ggs-men-colouring-promo';

describe('GGS Cowok colouring promo', () => {
  it('is slide 6', () => {
    expect(GGS_MEN_COLOURING_SLIDE).toBe(6);
  });
  it('costs Rp200.000', () => {
    expect(GGS_MEN_COLOURING_PROMO.price).toBe(200000);
  });
});