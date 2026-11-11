export const GGS_MEN_COLOURING_SLIDE = 6;

export const GGS_MEN_COLOURING_PROMO = {
  kicker: 'Promo',
  service: 'Colouring',
  subtitle: 'Warna Rambut Cowok',
  price: 200_000,
} as const;

/**
 * Hair colours the slide-6 video cycles through. `hex` tints the hair (colour blend keeps the real strands),
 * `lift` is a soft-light grey (above #808080 lightens, below darkens) so silver/blonde read bleached and burgundy stays deep.
 */
export const GGS_MEN_HAIR_COLORS = [
  { name: 'Ash Grey', hex: '#8a9099', lift: '#a8a8a8' },
  { name: 'Silver', hex: '#d3d6dc', lift: '#d8d8d8' },
  { name: 'Golden Blonde', hex: '#c99a4a', lift: '#b4b4b4' },
  { name: 'Caramel Brown', hex: '#8e5e38', lift: '#7c7c7c' },
  { name: 'Copper', hex: '#b8582a', lift: '#8a8a8a' },
  { name: 'Burgundy', hex: '#7a2236', lift: '#4c4c4c' },
  { name: 'Ash Blue', hex: '#56708f', lift: '#6c6c6c' },
  { name: 'Ash Purple', hex: '#76609a', lift: '#707070' },
] as const;

export const GGS_MEN_HAIR_COLOR_SECONDS = 1.6;
export const GGS_MEN_HAIR_LOOP_SECONDS = GGS_MEN_HAIR_COLORS.length * GGS_MEN_HAIR_COLOR_SECONDS;
