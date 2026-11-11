import type { CSSProperties, RefObject } from 'react';
import photo from '@/assets/ggs-feed-33-cat-eye-glitter.jpg';
import nailMask from '@/assets/ggs-feed-33-glitter-mask.png';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_CAT_EYE_COLORS, GGS_CAT_EYE_COLOR_SECONDS, GGS_CAT_EYE_LOOP_SECONDS, GGS_CAT_EYE_PROMO } from './ggs-cat-eye';
import './GgsCatEyeSlide.css';

const N = GGS_CAT_EYE_COLORS.length;
const HOLD = 0.72; // share of each step the color stays still; the rest is the fade to the next color
const pct = (v: number) => `${((v / N) * 100).toFixed(3)}%`;

/** Paint keyframes: hold color i, then fade into color i+1, looping back to the first color. */
const paintKeyframes = `@keyframes ggce-paint{${GGS_CAT_EYE_COLORS.map(
  (c, i) => `${pct(i)},${pct(i + HOLD)}{background-color:${c.hex}}`,
).join('')}100%{background-color:${GGS_CAT_EYE_COLORS[0].hex}}}`;

/** Chip keyframes: active while its color is on the nails (chip delays line each one up with its color). */
const chipKeyframes = `@keyframes ggce-chip{0%,${pct(HOLD)}{transform:translateY(-.5cqw) scale(1.14);box-shadow:var(--ggce-chip-on)}${pct(
  1,
)},${(100 - ((1 - HOLD) / N) * 100).toFixed(3)}%{transform:none;box-shadow:var(--ggce-chip-off)}100%{transform:translateY(-.5cqw) scale(1.14);box-shadow:var(--ggce-chip-on)}}`;

/** GGS Feed slide 33: Nail Art Cat Eye Rp 85.000 (was Rp 100.000) — the same coaster hand as slide 32, nails cycling through the cat-eye swatches with a sweeping magnetic streak. */
export function GgsCatEyeSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const loop = `${GGS_CAT_EYE_LOOP_SECONDS}s`;
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggce-root"
      style={{ '--ggce-loop': loop, '--ggce-color': `${GGS_CAT_EYE_COLOR_SECONDS}s` } as CSSProperties}
      aria-label={`GGS Beauty — promo Nail Art Cat Eye Rp ${GGS_CAT_EYE_PROMO.price} (dari Rp ${GGS_CAT_EYE_PROMO.was}), kuku cat eye dengan ${N} pilihan warna`}
    >
      <style>{paintKeyframes + chipKeyframes}</style>
      <div className="ggce-scene" aria-hidden="true">
        <img className="ggce-photo" src={photo} width={1440} height={1920} alt="" />

        <div className="ggce-nails">
          <span
            className="ggce-paint"
            style={{ maskImage: `url(${nailMask})`, WebkitMaskImage: `url(${nailMask})` } as CSSProperties}
          />
          <span
            className="ggce-streak"
            style={{ maskImage: `url(${nailMask})`, WebkitMaskImage: `url(${nailMask})` } as CSSProperties}
          />
        </div>
      </div>

      <span className="ggce-fade" aria-hidden="true" />

      <section className="ggce-head">
        <div className="ggce-title-col">
          <h2 className="ggce-title">
            Cat <em>Eye</em>
          </h2>
          <p className="ggce-sub">Motif cat eye di kuku aslimu</p>
        </div>
        <div className="ggce-price-col">
          <p className="ggce-kicker">Promo</p>
          <p className="ggce-was">
            <s>Rp {GGS_CAT_EYE_PROMO.was}</s>
          </p>
          <p className="ggce-price">
            <small>Rp</small>
            <strong>{GGS_CAT_EYE_PROMO.price}</strong>
          </p>
        </div>
      </section>

      <section className="ggce-palette" aria-hidden="true">
        <p className="ggce-palette-label">Pilih warnanya</p>
        <ul className="ggce-chips">
          {GGS_CAT_EYE_COLORS.map((c, i) => (
            <li
              key={c.hex}
              className="ggce-chip"
              style={
                {
                  backgroundColor: c.hex,
                  animationDelay: i === 0 ? '0s' : `${-(GGS_CAT_EYE_LOOP_SECONDS - i * GGS_CAT_EYE_COLOR_SECONDS)}s`,
                } as CSSProperties
              }
            />
          ))}
        </ul>
      </section>

      <img className="ggce-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
