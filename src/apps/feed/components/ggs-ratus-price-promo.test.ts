import { describe, expect, it } from 'vitest';
import { GGS_RATUS_PRICE_PROMO, GGS_RATUS_PRICE_PROMO_SLIDE } from './ggs-ratus-price-promo';

describe('GGS Feed slide 37 Ratus promo', () => {
  it('prices Ratus at Rp 45.000', () => {
    expect(`${GGS_RATUS_PRICE_PROMO.title} ${GGS_RATUS_PRICE_PROMO.currency} ${GGS_RATUS_PRICE_PROMO.price}`).toBe('Ratus Rp 45.000');
  });

  it('is slide 37', () => {
    expect(GGS_RATUS_PRICE_PROMO_SLIDE).toBe(37);
  });
});
