import { GGS_NAIL_LAMP_PROMO, GGS_NAIL_LAMP_SLIDE } from './ggs-nail-lamp';

describe('GGS Feed slide 34 nail art promo', () => {
  it('prices Nail Art at Rp35.000 as a start price', () => {
    expect(GGS_NAIL_LAMP_PROMO).toMatchObject({ title: 'Nail Art', start: 'Start', price: '35.000' });
  });

  it('is slide 34', () => {
    expect(GGS_NAIL_LAMP_SLIDE).toBe(34);
  });
});
