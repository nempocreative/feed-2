import type { RefObject } from 'react';
import teamPhoto from '@/assets/ggs-feed-30-tim-cahaya.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_PAHLAWAN_PROMO } from './ggs-pahlawan-promo';
import './GgsPahlawanReminderSlide.css';

/** GGS Feed slide 30: "today is Hari Pahlawan" reminder for the slide 27 promo, over the owner's team photo (unchanged pixels). */
export function GgsPahlawanReminderSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { discountPercent, professions, validUntil } = GGS_PAHLAWAN_PROMO;
  const forList = `${professions.slice(0, -1).join(' · ')} · ${professions[professions.length - 1]}`;
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggpi-root"
      aria-label={`GGS Beauty — pengingat promo Hari Pahlawan hari ini, diskon ${discountPercent}% untuk ${professions.join(', ')}`}
    >
      <img
        className="ggpi-photo"
        src={teamPhoto.url}
        alt="Tim GGS Beauty menyalakan senter ponsel di ruangan gelap, menyinari pelanggan yang tersenyum memegang sisir"
      />
      <span className="ggpi-shade" aria-hidden="true" />

      <section className="ggpi-top">
        <h2 className="ggpi-title">
          <span>Hari Ini</span>
          <em>Hari Pahlawan!</em>
        </h2>
        <p className="ggpi-sub">Kalian yang selalu jadi cahaya, hari ini giliran kalian bersinar.</p>
      </section>

      <section className="ggpi-deal">
        <div className="ggpi-badge">
          <p className="ggpi-badge-label">Diskon</p>
          <p className="ggpi-badge-value">
            {discountPercent}
            <small>%</small>
          </p>
        </div>
        <div className="ggpi-terms">
          <p className="ggpi-today">Berlaku sampai tanggal {validUntil}</p>
          <p className="ggpi-for">Khusus {forList}</p>
          <p className="ggpi-note">Tunjukkan kartu identitas profesi saat datang.</p>
        </div>
      </section>

      <img className="ggpi-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
