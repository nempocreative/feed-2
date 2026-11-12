import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-36-pov-customer-judes.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_POV_JUDES } from './ggs-pov-judes';
import './GgsPovJudesSlide.css';

/** GGS Feed slide 36: the owner's salon photo full bleed with the "POV: dapat customer judes" line set straight on it (no boxes). */
export function GgsPovJudesSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggpov-root"
      aria-label={`GGS Beauty — ${GGS_POV_JUDES.kicker} ${GGS_POV_JUDES.line} ${GGS_POV_JUDES.punch}`}
    >
      <img className="ggpov-photo" src={photoAsset.url} alt="" aria-hidden="true" />
      <div className="ggpov-shade" aria-hidden="true" />

      <section className="ggpov-head">
        <p className="ggpov-kicker">{GGS_POV_JUDES.kicker}</p>
        <h2 className="ggpov-title">
          {GGS_POV_JUDES.line}
          <em>{GGS_POV_JUDES.punch}</em>
        </h2>
      </section>

      <img className="ggpov-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
