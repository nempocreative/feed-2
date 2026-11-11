import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-35-red-mahogany.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_RED_MAHOGANY } from './ggs-red-mahogany';
import './GgsRedMahoganySlide.css';

/** GGS Feed slide 35: the owner's Red Mahogany client photo, full bleed, with the title set straight on the photo (no boxes or shapes). */
export function GgsRedMahoganySlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggrm-root"
      aria-label={`GGS Beauty — ${GGS_RED_MAHOGANY.kicker} ${GGS_RED_MAHOGANY.title}`}
    >
      <img className="ggrm-photo" src={photoAsset.url} alt="" aria-hidden="true" />
      <div className="ggrm-shade" aria-hidden="true" />

      <section className="ggrm-head">
        <p className="ggrm-kicker">{GGS_RED_MAHOGANY.kicker}</p>
        <h2 className="ggrm-title">
          Red <em>Mahogany</em>
        </h2>
      </section>

      <img className="ggrm-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
