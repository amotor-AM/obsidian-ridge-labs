import React from 'react';

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  role?: string;
}

// Layout wrapper retained for existing routes. The site shell owns text motion.
const MotionReveal: React.FC<MotionRevealProps> = ({ children, className, role }) => (
  <div className={className} role={role}>{children}</div>
);

export default MotionReveal;
