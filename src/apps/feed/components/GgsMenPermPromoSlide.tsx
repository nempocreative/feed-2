import type { RefObject } from 'react';
import poster from '@/assets/ggs-men-perm-real-barber.jpg';
import clip from '@/assets/ggs-men-perm-real-barber.mp4.asset.json';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import { formatRupiah, GGS_MEN_PERM_PROMO } from './ggs-men-perm-promo';
import './GgsMenPermPromoSlide.css';

const { kicker, service, subtitle, price } = GGS_MEN_PERM_PROMO;
const [rp, amount] = [formatRupiah(price).slice(0, 2), formatRupiah(price).slice(2)];

/** GGS Cowok slide 5: perm promo over a looping clip of a curly-perm client in the real GGS barbershop. */
export function GgsMenPermPromoSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggmp-root"
      role="img"
      aria-label={`GGS Barber Hairstudio — ${kicker} ${service}, ${subtitle}, ${formatRupiah(price)}`}
    >
      <video className="ggmp-photo" src={clip.url} poster={poster} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
      <span className="ggmp-fade" aria-hidden="true" />

      <section className="ggmp-head" aria-hidden="true">
        <p className="ggmp-kicker"><span />{kicker}<span /></p>
        <h2 className="ggmp-title">{service}</h2>
        <p className="ggmp-sub">{subtitle}</p>
      </section>

      <div className="ggmp-price" aria-hidden="true">
        <span className="ggmp-price-rp">{rp}</span>
        <span className="ggmp-price-amount">{amount}</span>
      </div>

      <img className="ggmp-watermark" src={menOverlay.url} alt="" draggable={false} />
    </div>
  );
}
