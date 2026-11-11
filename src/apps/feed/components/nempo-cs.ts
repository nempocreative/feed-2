/** NEMPO Feed slide 45 — layanan pelanggan (customer service). */
export const NEMPO_CS_SLIDE = 45;

export const nempoCs = {
  badge: 'Hubungi Kami',
  kicker: 'Layanan Pelanggan',
  title: ['Ada yang bisa', 'kami bantu?'],
  subtitle: 'Mau bikin acara, pernikahan, atau konten kreatif? Langsung chat admin NEMPO.',
  chat: {
    name: 'Admin NEMPO',
    status: 'Online',
    customer: 'Halo admin, mau tanya paket EO',
    admin: 'Siap kak, kami bantu sekarang ya!',
  },
  servicesLabel: 'Layanan NEMPO',
  services: [
    { key: 'eo', label: 'EO', desc: 'Event Organizer' },
    { key: 'wo', label: 'WO', desc: 'Wedding Organizer' },
    { key: 'creative', label: 'Creative', desc: 'Desain & Konten' },
  ],
  whatsapp: { label: 'Chat admin via WhatsApp', number: '0857 2498 1356', href: 'https://wa.me/6285724981356' },
  channels: [
    { key: 'instagram', name: 'Instagram', handle: '@nempo.id', href: 'https://instagram.com/nempo.id' },
    { key: 'tiktok', name: 'TikTok', handle: '@nempo.id', href: 'https://www.tiktok.com/@nempo.id' },
  ],
} as const;

/** wa.me link for an Indonesian 08… number. */
export function waLink(number: string) {
  return `https://wa.me/62${number.replace(/\D/g, '').replace(/^0/, '')}`;
}
