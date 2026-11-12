import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-37-ratus-promo.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_RATUS_PRICE_PROMO } from './ggs-ratus-price-promo';
import './GgsRatusPriceSlide.css';

/** GGS Feed slide 37: static Ratus promo on the owner's real smoking-burner photo. */
export function GgsRatusPriceSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggrt-root"
      aria-label={`GGS Beauty — ${GGS_RATUS_PRICE_PROMO.kicker} ${GGS_RATUS_PRICE_PROMO.title} ${GGS_RATUS_PRICE_PROMO.currency} ${GGS_RATUS_PRICE_PROMO.price}`}
    >
      <img className="ggrt-photo" src={photoAsset.url} alt="" aria-hidden="true" />
      <div className="ggrt-shade" aria-hidden="true" />

      <section className="ggrt-head">
        <p className="ggrt-kicker">{GGS_RATUS_PRICE_PROMO.kicker}</p>
        <h2 className="ggrt-title">{GGS_RATUS_PRICE_PROMO.title}</h2>
        <p className="ggrt-price">
          <span>{GGS_RATUS_PRICE_PROMO.currency}</span>
          {GGS_RATUS_PRICE_PROMO.price}
        </p>
      </section>

      <img className="ggrt-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
