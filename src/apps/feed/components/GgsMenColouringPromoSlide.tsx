import type { RefObject } from 'react';
import photo from '@/assets/ggs-men-colouring-chair.jpg';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import { formatRupiah } from './ggs-men-perm-promo';
import { GGS_MEN_COLOURING_PROMO } from './ggs-men-colouring-promo';
import './GgsMenPermPromoSlide.css';

const { kicker, service, subtitle, price } = GGS_MEN_COLOURING_PROMO;
const formattedPrice = formatRupiah(price);

export function GgsMenColouringPromoSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div ref={exportRef as RefObject<HTMLDivElement | null>} className="ggmp-root" role="img"
      aria-label={`GGS Barber Hairstudio — ${kicker} ${service}, ${subtitle}, ${formattedPrice}`}>
      <img className="ggmp-photo" src={photo} width={1440} height={1920} alt="" />
      <span className="ggmp-fade" aria-hidden="true" />
      <section className="ggmp-head" aria-hidden="true">
        <p className="ggmp-kicker"><span />{kicker}<span /></p>
        <h2 className="ggmp-title">{service}</h2>
        <p className="ggmp-sub">{subtitle}</p>
      </section>
      <div className="ggmp-price" aria-hidden="true">
        <span className="ggmp-price-rp">{formattedPrice.slice(0, 2)}</span>
        <span className="ggmp-price-amount">{formattedPrice.slice(2)}</span>
      </div>
      <img className="ggmp-watermark" src={menOverlay.url} alt="" draggable={false} />
    </div>
  );
}