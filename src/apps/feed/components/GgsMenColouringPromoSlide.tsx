import type { CSSProperties, RefObject } from 'react';
import photoAsset from '@/assets/ggs-men-colouring-hair.jpg.asset.json';
import maskAsset from '@/assets/ggs-men-06-hair-mask.png.asset.json';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import { formatRupiah } from './ggs-men-perm-promo';
import {
  GGS_MEN_COLOURING_PROMO,
  GGS_MEN_HAIR_COLORS,
  GGS_MEN_HAIR_COLOR_SECONDS,
  GGS_MEN_HAIR_LOOP_SECONDS,
} from './ggs-men-colouring-promo';
import './GgsMenPermPromoSlide.css';
import './GgsMenColouringPromoSlide.css';

const { kicker, service, subtitle, price } = GGS_MEN_COLOURING_PROMO;
const formattedPrice = formatRupiah(price);
const N = GGS_MEN_HAIR_COLORS.length;
const HOLD = 0.7; // share of each step the colour stays still; the rest is the blend into the next colour
const pct = (v: number) => `${((v / N) * 100).toFixed(3)}%`;
const first = GGS_MEN_HAIR_COLORS[0];
const steps = (prop: string, pick: (c: (typeof GGS_MEN_HAIR_COLORS)[number]) => string, end: string) =>
  `${GGS_MEN_HAIR_COLORS.map((c, i) => `${pct(i)},${pct(i + HOLD)}{${prop}:${pick(c)}}`).join('')}100%{${prop}:${end}}`;

const keyframes =
  `@keyframes ggmh-tint{${steps('background-color', (c) => c.hex, first.hex)}}` +
  `@keyframes ggmh-lift{${steps('background-color', (c) => c.lift, first.lift)}}` +
  `@keyframes ggmh-on{0%,${pct(HOLD)}{opacity:1;transform:none}${pct(HOLD + 0.15)},${(100 - (0.15 / N) * 100).toFixed(3)}%{opacity:0;transform:translateY(1cqw)}100%{opacity:1;transform:none}}` +
  `@keyframes ggmh-chip{0%,${pct(HOLD)}{transform:translateY(-.6cqw) scale(1.18);box-shadow:var(--ggmh-chip-on)}${pct(1)},${(100 - ((1 - HOLD) / N) * 100).toFixed(3)}%{transform:none;box-shadow:var(--ggmh-chip-off)}100%{transform:translateY(-.6cqw) scale(1.18);box-shadow:var(--ggmh-chip-on)}}`;

/** Same delay for every per-colour element: colour i's turn lines up with the shared hair loop. */
const delay = (i: number) => (i === 0 ? '0s' : `${-(GGS_MEN_HAIR_LOOP_SECONDS - i * GGS_MEN_HAIR_COLOR_SECONDS)}s`);
const hairMask = { maskImage: `url(${maskAsset.url})`, WebkitMaskImage: `url(${maskAsset.url})` } as CSSProperties;

/** GGS Cowok slide 6: Colouring Rp200.000 — close-up of the client's hair cycling through the colour menu. */
export function GgsMenColouringPromoSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div ref={exportRef as RefObject<HTMLDivElement | null>} className="ggmp-root ggmh-root" role="img"
      style={{ '--ggmh-loop': `${GGS_MEN_HAIR_LOOP_SECONDS}s` } as CSSProperties}
      aria-label={`GGS Barber Hairstudio — ${kicker} ${service}, ${subtitle}, ${formattedPrice}, ${N} pilihan warna rambut`}>
      <style>{keyframes}</style>
      <img className="ggmp-photo" src={photoAsset.url} width={1440} height={1920} alt="" />
      <span className="ggmh-hair ggmh-lift" style={hairMask} aria-hidden="true" />
      <span className="ggmh-hair ggmh-tint" style={hairMask} aria-hidden="true" />
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
