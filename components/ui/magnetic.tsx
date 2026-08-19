import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const SPRING_CONFIG = { stiffness: 140, damping: 18, mass: 0.28 };

export type MagneticProps = {
  children: React.ReactNode;
  intensity?: number;
  range?: number;
  className?: string;
};

/**
 * Magnetic attraction wrapper, adapted from 21st.dev @ibelick/magnetic.
 * Uses the project's framer-motion install and respects reduced motion.
 */
export const Magnetic: React.FC<MagneticProps> = ({
  children,
  intensity = 0.22,
  range = 90,
  className,
}) => {
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const calculateDistance = (event: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      const absoluteDistance = Math.hypot(distanceX, distanceY);

      if (isHovered && absoluteDistance <= range) {
        const scale = 1 - absoluteDistance / range;
        x.set(distanceX * intensity * scale);
        y.set(distanceY * intensity * scale);
        return;
      }

      x.set(0);
      y.set(0);
    };

    document.addEventListener('mousemove', calculateDistance);
    return () => document.removeEventListener('mousemove', calculateDistance);
  }, [isHovered, intensity, range, reducedMotion, x, y]);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};
