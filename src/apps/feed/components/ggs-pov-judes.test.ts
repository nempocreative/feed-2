import { describe, expect, it } from 'vitest';
import { GGS_POV_JUDES, GGS_POV_JUDES_SLIDE } from './ggs-pov-judes';

describe('GGS Feed slide 36 POV customer judes', () => {
  it('reads "POV: Dapat customer judes"', () => {
    expect(`${GGS_POV_JUDES.kicker} ${GGS_POV_JUDES.line} ${GGS_POV_JUDES.punch}`).toBe('POV: Dapat customer judes');
  });

  it('shows no price', () => {
    expect(GGS_POV_JUDES.price).toBeNull();
  });

  it('is slide 36', () => {
    expect(GGS_POV_JUDES_SLIDE).toBe(36);
  });
});
