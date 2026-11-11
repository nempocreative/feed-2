export const GGS_MEN_COLOURING_SLIDE = 6;

export const GGS_MEN_COLOURING_PROMO = {
  kicker: 'Promo',
  service: 'Colouring',
  subtitle: 'Warna Rambut Cowok',
  price: 200_000,
} as const;

/** Hair colours slide 6 cycles through; each has its own AI photo (`photo` = file key in GgsMenColouringPromoSlide). */
export const GGS_MEN_HAIR_COLORS = [
  { name: 'Kuning', hex: '#f2c52a', photo: 'kuning' },
  { name: 'Merah', hex: '#d4202c', photo: 'merah' },
  { name: 'Pink', hex: '#e23d82', photo: 'pink' },
  { name: 'Hijau Toska', hex: '#1fb0a6', photo: 'hijau-toska' },
  { name: 'Biru Elektrik', hex: '#1f4fd6', photo: 'biru-elektrik' },
  { name: 'Maroon', hex: '#6e1f2e', photo: 'burgundy' },
  { name: 'Oranye', hex: '#d0612a', photo: 'copper' },
  { name: 'Ungu', hex: '#8a64a8', photo: 'ash-purple' },
  { name: 'Silver', hex: '#d9dade', photo: 'silver' },
  { name: 'Golden Blonde', hex: '#d4a868', photo: 'golden-blonde' },
  { name: 'Ash Blue', hex: '#5e7192', photo: 'ash-blue' },
  { name: 'Ash Grey', hex: '#8b8e94', photo: 'ash-grey' },
] as const;

export const GGS_MEN_HAIR_COLOR_SECONDS = 1.4;
export const GGS_MEN_HAIR_LOOP_SECONDS = GGS_MEN_HAIR_COLORS.length * GGS_MEN_HAIR_COLOR_SECONDS;
