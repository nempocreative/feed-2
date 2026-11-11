import type { ReactElement, RefObject } from 'react';
import { Flower2, HandHeart, Leaf } from 'lucide-react';
import skyBackdrop from '@/assets/ggs-feed-31-1111-pastel-sky.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_1111_PROMO, type Ggs1111PriceKey } from './ggs-1111-promo';
import './GgsDoubleDaySlide.css';

function NailPolishIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2.5h4v6h-4z" />
      <path d="M9 8.5h6l1.6 2.2c.3.4.4.8.4 1.3V19a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 19v-7c0-.5.1-.9.4-1.3z" />
      <path d="M9.5 14.5h5" />
    </svg>
  );
}

const PRICE_ICONS: Record<Ggs1111PriceKey, () => ReactElement> = {
  nail: NailPolishIcon,
  massage: () => <HandHeart aria-hidden="true" strokeWidth={1.6} />,
  ratus: () => <Leaf aria-hidden="true" strokeWidth={1.6} />,
};

/** GGS Feed slide 31: 11.11 "Double Day Sale" — discount range for all treatment plus three promo prices. */
export function GgsDoubleDaySlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { date, discountMin, discountMax, scope, prices } = GGS_1111_PROMO;
  const [left, right] = date.split('.');
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="gg11-root"
      aria-label={`GGS Beauty Double Day Sale ${date}: diskon ${discountMin}% sampai ${discountMax}% ${scope}. ${prices
        .map((p) => `${p.name} Rp${p.price}`)
        .join(', ')}`}
    >
      <img className="gg11-bg" src={skyBackdrop.url} width={1440} height={1920} alt="" aria-hidden="true" />
      <span className="gg11-halo" aria-hidden="true" />

      <section className="gg11-head">
        <p className="gg11-script">Double Day Sale</p>
        <h2 className="gg11-date">
          <span>{left}</span>
          <span className="gg11-dot">.</span>
          <span>{right}</span>
        </h2>
      </section>

      <div className="gg11-ribbon">
        <div className="gg11-seg">
          <span className="gg11-pct" aria-hidden="true">%</span>
          <p className="gg11-disc">
            <small>Diskon</small>
            <b>
              {discountMin}%<i>–</i>{discountMax}%
            </b>
          </p>
        </div>
        <span className="gg11-divider" aria-hidden="true" />
        <div className="gg11-seg">
          <Flower2 className="gg11-spark" aria-hidden="true" strokeWidth={1.8} />
          <p className="gg11-scope">
            {scope.split(' ').map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p>
        </div>
      </div>

      <section className="gg11-prices">
        <p className="gg11-prices-label">Harga spesial {date}</p>
        <ul className="gg11-cards">
          {prices.map((item) => {
            const Icon = PRICE_ICONS[item.key];
            return (
              <li key={item.key} className="gg11-card">
                <span className="gg11-icon">
                  <Icon />
                </span>
                <span className="gg11-name">{item.name}</span>
                <strong className="gg11-price">
                  <small>Rp</small>
                  {item.price}
                </strong>
              </li>
            );
          })}
        </ul>
      </section>

      <img className="gg11-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
