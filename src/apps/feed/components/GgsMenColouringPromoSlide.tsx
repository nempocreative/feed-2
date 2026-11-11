import type { CSSProperties, RefObject } from 'react';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import kuning from '@/assets/ggs-men-hair-kuning.jpg';
import merah from '@/assets/ggs-men-hair-merah.jpg';
import pink from '@/assets/ggs-men-hair-pink.jpg';
import hijauToska from '@/assets/ggs-men-hair-hijau-toska.jpg';
import biruElektrik from '@/assets/ggs-men-hair-biru-elektrik.jpg';
import burgundy from '@/assets/ggs-men-hair-burgundy.jpg';
import copper from '@/assets/ggs-men-hair-copper.jpg';
import ashPurple from '@/assets/ggs-men-hair-ash-purple.jpg';
import silver from '@/assets/ggs-men-hair-silver.jpg';
import goldenBlonde from '@/assets/ggs-men-hair-golden-blonde.jpg';
import ashBlue from '@/assets/ggs-men-hair-ash-blue.jpg';
import ashGrey from '@/assets/ggs-men-hair-ash-grey.jpg';
import { formatRupiah } from './ggs-men-perm-promo';
import {
  GGS_MEN_COLOURING_PROMO,
  GGS_MEN_HAIR_COLORS,
  GGS_MEN_HAIR_COLOR_SECONDS,
  GGS_MEN_HAIR_LOOP_SECONDS,
} from './ggs-men-colouring-promo';
import './GgsMenPermPromoSlide.css';
import './GgsMenColouringPromoSlide.css';

const PHOTOS: Record<(typeof GGS_MEN_HAIR_COLORS)[number]['photo'], string> = {
  kuning, merah, pink, 'hijau-toska': hijauToska, 'biru-elektrik': biruElektrik, burgundy, copper,
  'ash-purple': ashPurple, silver, 'golden-blonde': goldenBlonde, 'ash-blue': ashBlue, 'ash-grey': ashGrey,
};

const { kicker, service, subtitle, price } = GGS_MEN_COLOURING_PROMO;
const formattedPrice = formatRupiah(price);
const N = GGS_MEN_HAIR_COLORS.length;
const HOLD = 0.72; // share of each colour's turn it stays still; the rest is the crossfade into the next photo
const pct = (v: number) => `${((v / N) * 100).toFixed(3)}%`;

const at = (v: number) => `${((v / N) * 100 + 0.001).toFixed(3)}%`; // just after v: an invisible snap under an opaque photo
const fadeIn = pct(N - (1 - HOLD));

// Every per-colour element's delay puts its own turn at 0%. Names and chips crossfade symmetrically.
// Photos stack with lower index on top: the top photo fades out over the next one, which is already opaque underneath,
// so the shop never washes out mid-change. The first photo fades in over the last one to close the loop.
const half = HOLD + (1 - HOLD) / 2;
const keyframes =
  `@keyframes ggmh-name{0%,${pct(HOLD)}{opacity:1;transform:none}${pct(half)},${pct(N - 1 + half)}{opacity:0;transform:translateY(.8cqw)}100%{opacity:1;transform:none}}` +
  `@keyframes ggmh-photo{0%,${pct(HOLD)}{opacity:1}${pct(1)},${pct(N - 1)}{opacity:0}${at(N - 1)},100%{opacity:1}}` +
  `@keyframes ggmh-photo-first{0%,${pct(HOLD)}{opacity:1}${pct(1)},${fadeIn}{opacity:0}100%{opacity:1}}` +
  `@keyframes ggmh-photo-last{0%,${pct(1)}{opacity:1}${at(1)},${pct(N - 1)}{opacity:0}${at(N - 1)},100%{opacity:1}}` +
  `@keyframes ggmh-chip{0%,${pct(HOLD)}{transform:translateY(-.45cqw) scale(1.14);box-shadow:var(--ggmh-chip-on);opacity:1}${pct(1)},${fadeIn}{transform:none;box-shadow:var(--ggmh-chip-off);opacity:.7}100%{transform:translateY(-.45cqw) scale(1.14);box-shadow:var(--ggmh-chip-on);opacity:1}}`;

const photoAnimation = (i: number) => (i === 0 ? 'ggmh-photo-first' : i === N - 1 ? 'ggmh-photo-last' : 'ggmh-photo');

const delay = (i: number) => (i === 0 ? '0s' : `${-(GGS_MEN_HAIR_LOOP_SECONDS - i * GGS_MEN_HAIR_COLOR_SECONDS).toFixed(2)}s`);

/** GGS Cowok slide 6: Colouring Rp200.000 — the same client photographed in each hair colour, crossfading through the menu. */
export function GgsMenColouringPromoSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div ref={exportRef as RefObject<HTMLDivElement | null>} className="ggmp-root ggmh-root" role="img"
      style={{ '--ggmh-loop': `${GGS_MEN_HAIR_LOOP_SECONDS}s` } as CSSProperties}
      aria-label={`GGS Barber Hairstudio — ${kicker} ${service}, ${subtitle}, ${formattedPrice}, ${N} pilihan warna rambut`}>
      <style>{keyframes}</style>
      <div className="ggmh-photos" aria-hidden="true">
        {GGS_MEN_HAIR_COLORS.map((c, i) => (
          <img key={c.photo} className="ggmp-photo ggmh-photo" src={PHOTOS[c.photo]} width={1440} height={1920} alt=""
            style={{ animationName: photoAnimation(i), animationDelay: delay(i), zIndex: N - i }} />
        ))}
      </div>
      <span className="ggmp-fade" aria-hidden="true" />
      <span className="ggmh-floor" aria-hidden="true" />
      <section className="ggmp-head ggmh-head" aria-hidden="true">
        <p className="ggmp-kicker"><span />{kicker}<span /></p>
        <h2 className="ggmp-title">{service}</h2>
        <p className="ggmp-sub">{subtitle}</p>
      </section>
      <section className="ggmh-palette" aria-hidden="true">
        <div className="ggmh-names">
          {GGS_MEN_HAIR_COLORS.map((c, i) => (
            <span key={c.name} style={{ animationDelay: delay(i) }}>{c.name}</span>
          ))}
        </div>
        <ul className="ggmh-chips">
          {GGS_MEN_HAIR_COLORS.map((c, i) => (
            <li key={c.hex} style={{ backgroundColor: c.hex, animationDelay: delay(i) }} />
          ))}
        </ul>
      </section>
      <div className="ggmp-price ggmh-price" aria-hidden="true">
        <span className="ggmp-price-rp">{formattedPrice.slice(0, 2)}</span>
        <span className="ggmp-price-amount">{formattedPrice.slice(2)}</span>
      </div>
      <img className="ggmp-watermark" src={menOverlay.url} alt="" draggable={false} />
    </div>
  );
}
