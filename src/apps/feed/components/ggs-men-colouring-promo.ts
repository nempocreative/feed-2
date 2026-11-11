export const GGS_MEN_COLOURING_SLIDE = 6;

export const GGS_MEN_COLOURING_PROMO = {
  kicker: 'Promo',
  service: 'Colouring',
  subtitle: 'Warna Rambut Cowok',
  price: 200_000,
} as const;

/**
 * Hair colours the slide-6 video cycles through. `hex` tints the hair (colour blend keeps the real strands),
 * `lift` brightens it first (screen blend) so light shades such as silver and blonde read as bleached hair.
 */
export const GGS_MEN_HAIR_COLORS = [
  { name: 'Ash Grey', hex: '#8d939c', lift: '#4a4a4c' },
  { name: 'Silver', hex: '#d6d9df', lift: '#8a8a8e' },
  { name: 'Golden Blonde', hex: '#d7a245', lift: '#7a5520' },
  { name: 'Caramel Brown', hex: '#9b6338', lift: '#2a1a0c' },
  { name: 'Copper', hex: '#c95a24', lift: '#4a1e08' },
  { name: 'Burgundy', hex: '#8a1c3a', lift: '#2a0410' },
  { name: 'Ash Blue', hex: '#4d74a3', lift: '#1c2c44' },
  { name: 'Ash Purple', hex: '#7d5aa6', lift: '#2c1c44' },
] as const;

export const GGS_MEN_HAIR_COLOR_SECONDS = 1.6;
export const GGS_MEN_HAIR_LOOP_SECONDS = GGS_MEN_HAIR_COLORS.length * GGS_MEN_HAIR_COLOR_SECONDS;
