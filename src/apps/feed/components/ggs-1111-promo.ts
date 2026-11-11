/** GGS Beauty 11.11 sale terms, exactly as given by the owner (GGS Feed slide 31). */
export const GGS_1111_SLIDE = 31 as const;

export const GGS_1111_PROMO = {
  date: '11.11',
  discountMin: 10,
  discountMax: 30,
  scope: 'All Treatment',
  prices: [
    { key: 'nail', name: 'Nail', price: '35.000' },
    { key: 'massage', name: 'Massage', price: '85.000' },
    { key: 'ratus', name: 'Ratus', price: '45.000' },
  ],
} as const;

export type Ggs1111PriceKey = (typeof GGS_1111_PROMO.prices)[number]['key'];
