import { describe, expect, it } from 'vitest';
import { GGS_MEN_1111_PROMO, GGS_MEN_1111_SLIDE } from './ggs-men-1111-promo';

describe('GGS Cowok 11.11 promo', () => {
  it('is GGS Cowok slide 3', () => {
    expect(GGS_MEN_1111_SLIDE).toBe(3);
  });

  it('offers 11% off the Paket GP Ganteng Pisan (Potong Cuci Pijit)', () => {
    expect(GGS_MEN_1111_PROMO.discount).toBe(11);
    expect(GGS_MEN_1111_PROMO.packageBadge).toBe('Paket GP');
    expect(GGS_MEN_1111_PROMO.packageName).toBe('Ganteng Pisan');
    expect(GGS_MEN_1111_PROMO.packageItems).toBe('Potong · Cuci · Pijit');
  });

  it('shows the barbershop location on Jl. Cimanuk', () => {
    expect(GGS_MEN_1111_PROMO.location).toBe('Jl. Cimanuk, depan Pom Bensin Pedes');
  });
});
