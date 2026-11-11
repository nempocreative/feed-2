import { describe, expect, it } from 'vitest';
import { hokaSeruPromo, rotiOPromo } from './tion-promos';

const rupiah = (value: string) => Number(value.replace(/\D/g, ''));

describe('Tion promo prices', () => {
  it('slide 14 Hoka Seru 3 + Beef Teriyaki costs Rp44.000, normally Rp56.500', () => {
    expect(rupiah(hokaSeruPromo.price)).toBe(44000);
    expect(rupiah(hokaSeruPromo.normalPrice)).toBe(56500);
    expect(hokaSeruPromo.discount).toBe('-23%');
  });

  it('slide 14 savings line matches the price difference', () => {
    expect(rupiah(hokaSeruPromo.bonus)).toBe(56500 - 44000);
  });

  it("slide 13 Roti'O stays Rp23.500 from Rp50.000 (-53%)", () => {
    expect(rupiah(rotiOPromo.price)).toBe(23500);
    expect(rupiah(rotiOPromo.normalPrice)).toBe(50000);
    expect(rotiOPromo.discount).toBe('-53%');
  });

  it('headlines avoid digits (Heyam cannot draw them)', () => {
    expect(hokaSeruPromo.deal).not.toMatch(/\d/);
    expect(rotiOPromo.deal).not.toMatch(/\d/);
  });
});
