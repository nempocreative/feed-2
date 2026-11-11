/** GGS Feed slide 32: plain (polos) nail art promo — price from the owner, colors read from the owner's swatch photos. */
export const GGS_NAIL_COLORS_SLIDE = 32 as const;

export const GGS_NAIL_COLORS_PROMO = {
  title: 'Nail Art',
  price: '35.000',
} as const;

/** One entry per swatch stick in the owner's three photos (16 in total), ordered so neighbours contrast. */
export const GGS_NAIL_COLORS = [
  { name: 'Nude pink', hex: '#e2c2bf' },
  { name: 'Merah cherry', hex: '#a3001c' },
  { name: 'Biru laut', hex: '#0b5a8f' },
  { name: 'Baby pink', hex: '#f0a6bf' },
  { name: 'Cokelat tua', hex: '#5a2c1e' },
  { name: 'Fuchsia', hex: '#b0124f' },
  { name: 'Biru abu', hex: '#4a6a86' },
  { name: 'Lilac mauve', hex: '#a5899a' },
  { name: 'Hitam', hex: '#0d0d10' },
  { name: 'Rose pink', hex: '#e08aa5' },
  { name: 'Teal gelap', hex: '#0b4459' },
  { name: 'Karamel', hex: '#7e4a3a' },
  { name: 'Wine', hex: '#7a2632' },
  { name: 'Taupe', hex: '#7d6268' },
  { name: 'Abu gelap', hex: '#2a2b30' },
  { name: 'Cocoa mauve', hex: '#6e4440' },
] as const;

/** Seconds each color is shown (including its fade in). */
export const GGS_NAIL_COLOR_SECONDS = 1.25;
export const GGS_NAIL_LOOP_SECONDS = GGS_NAIL_COLORS.length * GGS_NAIL_COLOR_SECONDS;
