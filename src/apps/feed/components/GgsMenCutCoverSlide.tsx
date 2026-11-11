import type { RefObject } from 'react';
import { Scissors } from 'lucide-react';
import photo from '@/assets/ggs-men-burst-fade-arch-enhanced.jpg';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import './GgsMenCutCoverSlide.css';

const SEAL_TEXT = 'Barber Hairstudio · Grooming is Better · ';

/** GGS Cowok slide 4: elegant video cover naming the haircut (Burst Fade) — client photo in an arch window. */
export function GgsMenCutCoverSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggmc-root"
      role="img"
      aria-label="GGS Barber Hairstudio — model rambut Burst Fade"
    >
      <span className="ggmc-glow" aria-hidden="true" />

      <section className="ggmc-head" aria-hidden="true">
        <p className="ggmc-kicker">
          <span />
          Model Rambut
          <span />
        </p>
        <h2 className="ggmc-title">
          <em>Burst</em>
          <b>Fade</b>
        </h2>
      </section>

      <figure className="ggmc-arch" aria-hidden="true">
        <span className="ggmc-arch-line" />
        <img className="ggmc-photo" src={photo} width={1488} height={1648} alt="" />
      </figure>

      <div className="ggmc-seal" aria-hidden="true">
        <svg className="ggmc-seal-ring" viewBox="0 0 200 200">
          <defs>
            <path id="ggmc-seal-ring" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
          </defs>
          <text>
            <textPath href="#ggmc-seal-ring" textLength="462" lengthAdjust="spacing">{SEAL_TEXT}</textPath>
          </text>
        </svg>
        <Scissors className="ggmc-seal-icon" strokeWidth={1.4} />
      </div>

      <img className="ggmc-watermark" src={menOverlay.url} alt="" draggable={false} />
    </div>
  );
}
