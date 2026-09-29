import type { gsap } from 'gsap';

type ArtworkTreatment = {
  selector: string;
  trigger: string;
  from: gsap.TweenVars;
  to: gsap.TweenVars;
};

/** Scroll changes the artwork's depth; captions and interactive screen transforms stay untouched. */
export function createArtworkMotion(motion: typeof gsap, compact: boolean) {
  const records = new Map<HTMLElement, gsap.Context>();
  const distance = compact ? 0.55 : 1;
  const treatments: ArtworkTreatment[] = [
    {
      selector: '.ec-preview-art, .ec-answer-surface',
      trigger: 'figure',
      from: { y: 15 * distance, scale: compact ? 1 : 0.98 },
      to: { y: -6 * distance, scale: 1 },
    },
    {
      selector: '.ls-workbench-visual > .ls-echo-screen-stack',
      trigger: '.ls-workbench-visual',
      from: { y: 26 * distance, scale: compact ? 0.99 : 0.975 },
      to: { y: -14 * distance, scale: 1 },
    },
    {
      selector: '.ls-feature-art > .ls-feature-phone',
      trigger: '.ls-feature-art',
      from: { y: 24 * distance, scale: compact ? 0.99 : 0.975 },
      to: { y: -10 * distance, scale: 1 },
    },
    {
      selector: '.ls-feature-art > .ls-feature-artwork',
      trigger: '.ls-feature-art',
      from: { y: 10 * distance, scale: 1.035 },
      to: { y: -8 * distance, scale: 1 },
    },
    {
      // The wrapper owns scroll depth; .lp-screen children own selection/rotation.
      selector: '.lp-screen-stage',
      trigger: '.lp-preview',
      from: { y: 22 * distance, scale: compact ? 0.99 : 0.975 },
      to: { y: -8 * distance, scale: 1 },
    },
  ];

  return {
    scan(root: HTMLElement) {
      let changed = false;
      records.forEach((context, element) => {
        if (root.contains(element)) return;
        context.revert();
        records.delete(element);
        changed = true;
      });

      treatments.forEach(({ selector, trigger, from, to }) => {
        root.querySelectorAll<HTMLElement>(selector).forEach((element) => {
          if (records.has(element)) return;
          const anchor = element.closest(trigger);
          if (!anchor || !root.contains(anchor)) return;
          // Late scans run outside matchMedia's initial callback. Each treatment
          // gets a context so route/media cleanup still restores its CSS transform.
          const context = motion.context(() => {
            motion.fromTo(element, from, {
              ...to,
              ease: 'none',
              scrollTrigger: {
                trigger: anchor,
                start: 'top 96%',
                end: 'bottom 14%',
                scrub: compact ? 0.55 : 0.8,
                invalidateOnRefresh: true,
              },
            });
          }, root);
          records.set(element, context);
          changed = true;
        });
      });
      return changed;
    },
    revert() {
      records.forEach((context) => context.revert());
      records.clear();
    },
  };
}
