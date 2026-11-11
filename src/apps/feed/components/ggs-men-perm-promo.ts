/** GGS Cowok slide 5: men's perm promo. Price as given by the owner ("perming 175"). */
export const GGS_MEN_PERM_SLIDE = 5;

export const GGS_MEN_PERM_PROMO = {
  kicker: 'Promo',
  service: 'Perming',
  subtitle: 'Rambut Keriting Cowok',
  price: 175_000,
} as const;

/** Rupiah without decimals, Indonesian thousands dots: 175000 -> "Rp175.000". */
export function formatRupiah(value: number): string {
  return `Rp${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}
