import { GGS_RED_MAHOGANY, GGS_RED_MAHOGANY_SLIDE } from './ggs-red-mahogany';

describe('GGS Feed slide 35 Red Mahogany', () => {
  it('names the colour Red Mahogany', () => {
    expect(GGS_RED_MAHOGANY.title).toBe('Red Mahogany');
  });

  it('shows no price', () => {
    expect(GGS_RED_MAHOGANY.price).toBeNull();
  });

  it('is slide 35', () => {
    expect(GGS_RED_MAHOGANY_SLIDE).toBe(35);
  });
});
