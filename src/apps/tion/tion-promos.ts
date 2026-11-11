export type TionPromo = {
  /** Small pill above the headline. */
  kicker: string;
  /** Big Heyam headline — letters only, Heyam's demo build replaces digits. */
  deal: string;
  price: string;
  priceNumber: string;
  normalPrice: string;
  discount: string;
  menu: string[];
  bonus: string;
};

/** Slide 13 — Roti'O B1G1 "Momen Manis". */
export const rotiOPromo: TionPromo = {
  kicker: "Promo B1G1 · Roti'O",
  deal: 'Momen Manis',
  price: 'Rp23.500',
  priceNumber: '23.500',
  normalPrice: 'Rp50.000',
  discount: '-53%',
  menu: ['1 Ube Choco Pastry / Martabak', '/ 2 Mini Pastry'],
  bonus: 'Free 1 Drink',
};

/** Slide 14 — Hoka Seru 3 + Beef Teriyaki. */
export const hokaSeruPromo: TionPromo = {
  kicker: 'Paket Hemat · HokBen',
  deal: 'Hoka Seru',
  price: 'Rp44.000',
  priceNumber: '44.000',
  normalPrice: 'Rp56.500',
  discount: '-23%',
  menu: ['Hoka Seru 3 + Beef Teriyaki'],
  bonus: 'Hemat Rp12.500',
};
