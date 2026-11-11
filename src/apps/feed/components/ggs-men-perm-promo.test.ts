import { describe, expect, it } from 'vitest';
import { formatRupiah, GGS_MEN_PERM_PROMO, GGS_MEN_PERM_SLIDE } from './ggs-men-perm-promo';

describe('GGS Cowok perm promo', () => {
  it('is GGS Cowok slide 5', () => {
    expect(GGS_MEN_PERM_SLIDE).toBe(5);
  });

  it('prices the perm at Rp175.000', () => {
    expect(GGS_MEN_PERM_PROMO.price).toBe(175000);
    expect(formatRupiah(GGS_MEN_PERM_PROMO.price)).toBe('Rp175.000');
  });
});
