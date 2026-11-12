import type { RefObject } from 'react';
import { Scissors } from 'lucide-react';
import burstFadePhoto from '@/assets/ggs-men-burst-fade-arch-enhanced.jpg';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import './GgsMenCutCoverSlide.css';

const SEAL_TEXT = 'Barber Hairstudio · Grooming is Better · ';

type CutCoverProps = {
  exportRef?: RefObject<HTMLElement | null>;
  /** Big italic serif word of the haircut name. */
  lead?: string;
  /** Small spaced capitals word of the haircut name. */
  tail?: string;
  photo?: string;
  photoWidth?: number;
  photoHeight?: number;
  /** CSS object-position for the arch photo. */
  photoPosition?: string;
};

/** GGS Cowok cut cover (slides 4 and 7): elegant cover naming the haircut — client photo in an arch window. */
export function GgsMenCutCoverSlide({
  exportRef,
  lead = 'Burst',
  tail = 'Fade',
  photo = burstFadePhoto,
  photoWidth = 1488,
  photoHeight = 1648,
  photoPosition = '50% 34%',
}: CutCoverProps) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggmc-root"
      role="img"
      aria-label={`GGS Barber Hairstudio — model rambut ${lead} ${tail}`}
    >
      <span className="ggmc-glow" aria-hidden="true" />

      <section className="ggmc-head" aria-hidden="true">
        <p className="ggmc-kicker">
          <span />
          Model Rambut
          <span />
        </p>
        <h2 className="ggmc-title">
          <em>{lead}</em>
          <b>{tail}</b>
        </h2>
      </section>

      <figure className="ggmc-arch" aria-hidden="true">
        <span className="ggmc-arch-line" />
        <img className="ggmc-photo" src={photo} width={photoWidth} height={photoHeight} alt="" style={{ objectPosition: photoPosition }} />
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
