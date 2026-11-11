/** GGS Feed slide 33: cat-eye nail art promo — prices from the owner, colors read from the owner's cat-eye swatch photo. */
export const GGS_CAT_EYE_SLIDE = 33 as const;

export const GGS_CAT_EYE_PROMO = {
  title: 'Cat Eye',
  price: '85.000',
  was: '100.000',
} as const;

/** One entry per swatch stick in the owner's cat-eye photo (9 in total), ordered so neighbours contrast. */
export const GGS_CAT_EYE_COLORS = [
  { name: 'Cream glitter', hex: '#ddd3c2' },
  { name: 'Merah glitter', hex: '#c01430' },
  { name: 'Pink cat eye', hex: '#c46490' },
  { name: 'Navy sparkle', hex: '#33395c' },
  { name: 'Pearl nude', hex: '#d8bfae' },
  { name: 'Merah cat eye', hex: '#a8122c' },
  { name: 'Silver glitter', hex: '#c3c7cf' },
  { name: 'Copper cat eye', hex: '#8a4526' },
  { name: 'Maroon gelap', hex: '#571c24' },
] as const;

/** Seconds each color is shown (including its fade in). 9 × 1.2 s = 10.8 s = exactly 324 frames at 30 fps. */
export const GGS_CAT_EYE_COLOR_SECONDS = 1.2;
export const GGS_CAT_EYE_LOOP_SECONDS = GGS_CAT_EYE_COLORS.length * GGS_CAT_EYE_COLOR_SECONDS;
