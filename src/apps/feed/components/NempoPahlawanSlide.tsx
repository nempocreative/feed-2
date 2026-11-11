import { useEffect, useRef, useState, type CSSProperties, type RefObject } from 'react';
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import loopAsset from '@/assets/nempo-feed-slide-44-loop.mp4.asset.json';
import posterAsset from '@/assets/nempo-feed-slide-44-poster.jpg.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { nempoPahlawan } from './nempo-pahlawan';
import './NempoPahlawanSlide.css';

const EMBERS = [
  { x: 8, d: 0, s: 1.1 }, { x: 17, d: 2.4, s: 0.8 }, { x: 26, d: 4.1, s: 1.3 }, { x: 34, d: 1.2, s: 0.9 },
  { x: 43, d: 5.3, s: 1.2 }, { x: 52, d: 3.0, s: 0.7 }, { x: 61, d: 0.7, s: 1 }, { x: 69, d: 4.8, s: 1.4 },
  { x: 77, d: 2.0, s: 0.8 }, { x: 85, d: 5.9, s: 1.1 }, { x: 92, d: 3.6, s: 0.9 }, { x: 12, d: 6.1, s: 1.2 },
  { x: 48, d: 1.8, s: 1 }, { x: 81, d: 0.4, s: 1.3 },
];

export function NempoPahlawanSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [muted, setMuted] = useState(true);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (paused || reduced) video.pause();
    else void video.play().catch(() => {});
  }, [paused, reduced, replayKey]);

  const { kicker, titleLines, dateLabel, battleYear, year, yearsSinceBattle, quote, quoteBy, closing } = nempoPahlawan;

  return (
    <div className="w-full max-w-[430px]">
      <div className="nphl-controls">
        <Button size="icon" variant="outline" title={paused ? 'Putar' : 'Jeda'} aria-label={paused ? 'Putar slide 44' : 'Jeda slide 44'} onClick={() => { setReduced(false); setPaused(!paused); }}>
          {paused ? <Play size={16} /> : <Pause size={16} />}
        </Button>
        <Button size="icon" variant="outline" title="Ulangi" aria-label="Ulangi slide 44" onClick={() => {
          const video = videoRef.current;
          if (video) video.currentTime = 0;
          setReduced(false); setPaused(false); setReplayKey((key) => key + 1);
        }}>
          <RotateCcw size={16} />
        </Button>
        <Button size="icon" variant="outline" title={muted ? 'Nyalakan suara' : 'Matikan suara'} aria-label={muted ? 'Nyalakan suara slide 44' : 'Matikan suara slide 44'} onClick={() => setMuted(!muted)}>
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </Button>
      </div>
      <div
        ref={exportRef as RefObject<HTMLDivElement | null>}
        className={`nphl-root${paused ? ' is-paused' : ''}${reduced ? ' is-reduced' : ''}`}
      >
        <video
          ref={videoRef}
          className="nphl-video"
          src={loopAsset.url}
          poster={posterAsset.url}
          muted={muted}
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden="true"
        />
        <div key={replayKey} className="nphl-stage">
          <span className="nphl-shade" aria-hidden="true" />
          <span className="nphl-glow" aria-hidden="true" />
          <span className="nphl-embers" aria-hidden="true">
            {EMBERS.map((ember, i) => (
              <i key={i} style={{ '--x': `${ember.x}%`, '--d': `${ember.d}s`, '--s': ember.s } as CSSProperties} />
            ))}
          </span>

          <NempoHeader badge={dateLabel} />

          <div className="nphl-title-block">
            <p className="nphl-kicker">{kicker}</p>
            <h2 className="nphl-title">
              {titleLines.map((line, lineIdx) => (
                <span key={line} className={`nphl-line nphl-line-${lineIdx + 1}`}>{line}</span>
              ))}
            </h2>
            <p className="nphl-date">
              <span className="nphl-flag" aria-hidden="true"><i /><i /></span>
              {battleYear} — {year}
            </p>
          </div>

          <div className="nphl-bottom">
            <p className="nphl-years"><b>{yearsSinceBattle}</b> tahun Pertempuran Surabaya</p>
            <blockquote className="nphl-quote">
              <p>“{quote}”</p>
              <cite>— {quoteBy}</cite>
            </blockquote>
            <p className="nphl-closing">{closing}</p>
          </div>

          <NempoFooter />
        </div>
      </div>
    </div>
  );
}
