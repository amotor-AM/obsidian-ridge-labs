import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  className,
  delay = 0,
  amount = 0.2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const inView = useInView(ref, { once: true, amount });

  useEffect(() => setEnhanced(true), []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={!enhanced || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default MotionReveal;
