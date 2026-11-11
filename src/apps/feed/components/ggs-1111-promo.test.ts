import { describe, expect, it } from 'vitest';
import { GGS_1111_PROMO, GGS_1111_SLIDE } from './ggs-1111-promo';

describe('GGS 11.11 promo (slide 31)', () => {
  it('is the GGS Feed slide 31', () => {
    expect(GGS_1111_SLIDE).toBe(31);
  });

  it('gives a 10% – 30% discount on all treatment', () => {
    expect(GGS_1111_PROMO.discountMin).toBe(10);
    expect(GGS_1111_PROMO.discountMax).toBe(30);
    expect(GGS_1111_PROMO.scope).toBe('All Treatment');
  });

  it('lists nail 35.000, massage 85.000 and ratus 45.000', () => {
    expect(GGS_1111_PROMO.prices.map((p) => [p.name, p.price])).toEqual([
      ['Nail', '35.000'],
      ['Massage', '85.000'],
      ['Ratus', '45.000'],
    ]);
  });
});
