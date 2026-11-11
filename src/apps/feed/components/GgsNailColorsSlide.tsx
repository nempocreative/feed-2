import type { CSSProperties, RefObject } from 'react';
import photo from '@/assets/ggs-feed-32-nail-coaster.jpg.asset.json';
import nailMask from '@/assets/ggs-feed-32-nail-mask.png.asset.json';
import nailShade from '@/assets/ggs-feed-32-nail-shade.png.asset.json';
import nailGloss from '@/assets/ggs-feed-32-nail-gloss.png.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_NAIL_COLORS, GGS_NAIL_COLORS_PROMO, GGS_NAIL_COLOR_SECONDS, GGS_NAIL_LOOP_SECONDS } from './ggs-nail-colors';
import './GgsNailColorsSlide.css';

const N = GGS_NAIL_COLORS.length;
const HOLD = 0.72; // share of each step the color stays still; the rest is the fade to the next color
const pct = (v: number) => `${((v / N) * 100).toFixed(3)}%`;

/** Paint keyframes: hold color i, then fade into color i+1, looping back to the first color. */
const paintKeyframes = `@keyframes ggna-paint{${GGS_NAIL_COLORS.map(
  (c, i) => `${pct(i)},${pct(i + HOLD)}{background-color:${c.hex}}`,
).join('')}100%{background-color:${GGS_NAIL_COLORS[0].hex}}}`;

/** Chip keyframes: active while its color is on the nails (chip delays line each one up with its color). */
const chipKeyframes = `@keyframes ggna-chip{0%,${pct(HOLD)}{transform:translateY(-1.1cqw) scale(1.16);box-shadow:var(--ggna-chip-on)}${pct(
  1,
)},${(100 - ((1 - HOLD) / N) * 100).toFixed(3)}%{transform:none;box-shadow:var(--ggna-chip-off)}100%{transform:translateY(-1.1cqw) scale(1.16);box-shadow:var(--ggna-chip-on)}}`;

/** GGS Feed slide 32: Nail Art Rp 35.000 — a hand on the GGS coaster whose plain natural nails cycle through every swatch color. */
export function GgsNailColorsSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const loop = `${GGS_NAIL_LOOP_SECONDS}s`;
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggna-root"
      style={{ '--ggna-loop': loop } as CSSProperties}
      aria-label={`GGS Beauty — promo ${GGS_NAIL_COLORS_PROMO.title} Rp ${GGS_NAIL_COLORS_PROMO.price}, kuku polos dengan ${N} pilihan warna`}
    >
      <style>{paintKeyframes + chipKeyframes}</style>
      <img className="ggna-photo" src={photo.url} width={1440} height={1920} alt="" aria-hidden="true" />

      <div className="ggna-nails" aria-hidden="true">
        <span
          className="ggna-paint"
          style={{ maskImage: `url(${nailMask.url})`, WebkitMaskImage: `url(${nailMask.url})` } as CSSProperties}
        />
        <img className="ggna-shade" src={nailShade.url} alt="" />
        <img className="ggna-gloss" src={nailGloss.url} alt="" />
      </div>

      <span className="ggna-fade" aria-hidden="true" />

      <section className="ggna-head">
        <div className="ggna-title-col">
          <p className="ggna-kicker">Promo</p>
          <h2 className="ggna-title">
            Nail <em>Art</em>
          </h2>
          <p className="ggna-sub">Warna polos di kuku aslimu</p>
        </div>
        <p className="ggna-price">
          <small>Rp</small>
          <strong>{GGS_NAIL_COLORS_PROMO.price}</strong>
        </p>
      </section>

      <section className="ggna-palette" aria-hidden="true">
        <p className="ggna-palette-label">Pilih warnanya</p>
        <ul className="ggna-chips">
          {GGS_NAIL_COLORS.map((c, i) => (
            <li
              key={c.hex}
              className="ggna-chip"
              style={
                {
                  background: c.hex,
                  animationDelay: i === 0 ? '0s' : `${-(GGS_NAIL_LOOP_SECONDS - i * GGS_NAIL_COLOR_SECONDS)}s`,
                } as CSSProperties
              }
            />
          ))}
        </ul>
      </section>

      <img className="ggna-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
