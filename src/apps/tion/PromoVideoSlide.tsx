import type { TionPromo } from './tion-promos';

type PromoVideoSlideProps = {
  promo: TionPromo;
  videoUrl: string;
  posterUrl: string;
  /** Extra modifier class for per-slide layout tweaks, e.g. `tion13--hoka`. */
  variant?: string;
};

/** Animated promo slide in the slide 12 (Heyam) look, over looping café footage (slides 13+). */
export default function PromoVideoSlide({ promo, videoUrl, posterUrl, variant }: PromoVideoSlideProps) {
  return (
    <div className={variant ? `tion13 ${variant}` : 'tion13'}>
      <video
        className="tion13__video"
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="tion13__shade" aria-hidden="true" />

      <header className="tion13__top">
        <p className="tion13__kicker">{promo.kicker}</p>
        <h1 className="tion13__headline">{promo.deal}</h1>
      </header>

      <div
        className="tion13__price"
        role="img"
        aria-label={`Harga ${promo.price}, normal ${promo.normalPrice}, hemat ${promo.discount}`}
      >
        <span className="tion13__price-off">{promo.discount}</span>
        <span className="tion13__price-now">
          <small>Rp</small>
          {promo.priceNumber}
        </span>
        <s className="tion13__price-was">{promo.normalPrice}</s>
      </div>

      <footer className="tion13__bottom">
        <p className="tion13__menu">
          {promo.menu.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <strong>{promo.bonus}</strong>
        </p>
        <p className="tion13__cta">
          <span className="tion13__cta-arrow" aria-hidden="true">
            ↓
          </span>
          Klik link lokasi di bawah
        </p>
      </footer>
    </div>
  );
}
