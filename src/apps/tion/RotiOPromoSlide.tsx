import cafeLoopAsset from '@/assets/tion/tion-slide-13-roti-o-cafe-loop.mp4.asset.json';
import cafePosterAsset from '@/assets/tion/tion-slide-13-roti-o-cafe-poster.jpg.asset.json';
import PromoVideoSlide from './PromoVideoSlide';
import { rotiOPromo } from './tion-promos';

export { rotiOPromo };

/** Slide 13: Roti'O B1G1 promo in the slide 12 (Heyam) look, over looping café footage. */
export default function RotiOPromoSlide() {
  return <PromoVideoSlide promo={rotiOPromo} videoUrl={cafeLoopAsset.url} posterUrl={cafePosterAsset.url} />;
}
