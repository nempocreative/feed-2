import cafeLoopAsset from '@/assets/tion/tion-slide-14-hoka-cafe-loop.mp4.asset.json';
import cafePosterAsset from '@/assets/tion/tion-slide-14-hoka-cafe-poster.jpg.asset.json';
import PromoVideoSlide from './PromoVideoSlide';
import { hokaSeruPromo } from './tion-promos';

/** Slide 14: Hoka Seru 3 + Beef Teriyaki promo, same look as slide 13. */
export default function HokaSeruPromoSlide() {
  return (
    <PromoVideoSlide
      promo={hokaSeruPromo}
      videoUrl={cafeLoopAsset.url}
      posterUrl={cafePosterAsset.url}
      variant="tion13--hoka"
    />
  );
}
