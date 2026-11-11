import type { ReactElement, RefObject } from 'react';
import { Droplets, HandHeart, MapPin, Scissors } from 'lucide-react';
import studio from '@/assets/ggs-men-1111-cream-studio.jpg';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import { GGS_MEN_1111_PROMO } from './ggs-men-1111-promo';
import './GgsMenDoubleDaySlide.css';

const ITEM_ICONS: Record<string, () => ReactElement> = {
  Potong: () => <Scissors aria-hidden="true" strokeWidth={1.6} />,
  Cuci: () => <Droplets aria-hidden="true" strokeWidth={1.6} />,
  Pijit: () => <HandHeart aria-hidden="true" strokeWidth={1.6} />,
};

/** GGS Cowok slide 3: 11.11 "Paket GP Ganteng Pisan" — 11% off Potong · Cuci · Pijit, laid out like GGS Feed slide 31. */
export function GgsMenDoubleDaySlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const p = GGS_MEN_1111_PROMO;
  const [left, right] = p.date.split('.');
  const items = p.packageItems.split(' · ');
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggm11-root"
      role="img"
      aria-label={`GGS Barber Hairstudio Diskon ${p.date}: ${p.packageBadge} ${p.packageName} (${p.packageItems}) diskon ${p.discount}%. ${p.location}`}
    >
      <img className="ggm11-bg" src={studio} width={1440} height={1920} alt="" aria-hidden="true" />
      <span className="ggm11-halo" aria-hidden="true" />

      <section className="ggm11-head">
        <p className="ggm11-kicker">
          <span aria-hidden="true" />
          Diskon
          <span aria-hidden="true" />
        </p>
        <h2 className="ggm11-date">
          <span>{left}</span>
          <span className="ggm11-dot">.</span>
          <span>{right}</span>
        </h2>
        <p className="ggm11-tagline">
          {p.taglineTop} <em>{p.taglineHighlight}</em>
        </p>
      </section>

      <div className="ggm11-ribbon">
        <div className="ggm11-seg">
          <span className="ggm11-pct" aria-hidden="true">%</span>
          <p className="ggm11-disc">
            <small>Diskon</small>
            <b>{p.discount}%</b>
          </p>
        </div>
        <span className="ggm11-divider" aria-hidden="true" />
        <p className="ggm11-pack">
          <small>{p.packageBadge}</small>
          <b>{p.packageName}</b>
        </p>
      </div>

      <section className="ggm11-items">
        <p className="ggm11-items-label">{p.urgency}</p>
        <ul className="ggm11-cards">
          {items.map((name) => {
            const Icon = ITEM_ICONS[name];
            return (
              <li key={name} className="ggm11-card">
                <span className="ggm11-icon">{Icon ? <Icon /> : null}</span>
                <span className="ggm11-name">{name}</span>
              </li>
            );
          })}
        </ul>
        <p className="ggm11-location">
          <MapPin aria-hidden="true" strokeWidth={2} />
          {p.location}
        </p>
      </section>

      <img className="ggm11-watermark" src={menOverlay.url} alt="" draggable={false} />
    </div>
  );
}
