import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-34-nail-lamp.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_NAIL_LAMP_PROMO } from './ggs-nail-lamp';
import './GgsNailLampSlide.css';

const photo = photoAsset.url;

/** GGS Feed slide 34: Nail Art mulai Rp 35.000 over the owner's retouched photo of hands resting on the bedazzled lamp. */
export function GgsNailLampSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggnl-root"
      aria-label={`GGS Beauty — promo ${GGS_NAIL_LAMP_PROMO.title} mulai Rp ${GGS_NAIL_LAMP_PROMO.price}`}
    >
      <img className="ggnl-photo" src={photo} alt="" aria-hidden="true" />
      <span className="ggnl-fade" aria-hidden="true" />

      <section className="ggnl-head">
        <div className="ggnl-title-col">
          <h2 className="ggnl-title">
            Nail <em>Art</em>
          </h2>
          <p className="ggnl-sub">Di kuku aslimu, rapi dan bersih</p>
        </div>
        <div className="ggnl-price-col">
          <p className="ggnl-kicker">Promo</p>
          <p className="ggnl-start">{GGS_NAIL_LAMP_PROMO.start}</p>
          <p className="ggnl-price">
            <small>Rp</small>
            <strong>{GGS_NAIL_LAMP_PROMO.price}</strong>
          </p>
        </div>
      </section>

      <img className="ggnl-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
