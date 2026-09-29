let motionPromise: Promise<any> | undefined;

export const loadMotion = () => {
  motionPromise ||= Promise.all([import('gsap'), import('gsap/ScrollTrigger'), import('gsap/SplitText')]).then(([core, scroll, split]) => {
    const { gsap } = core;
    const { ScrollTrigger } = scroll;
    const { SplitText } = split;
    gsap.registerPlugin(ScrollTrigger, SplitText);
    return { gsap, ScrollTrigger, SplitText };
  });
  return motionPromise;
};
