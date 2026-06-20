import React, { useState, useEffect, ReactNode } from 'react';

/* Renders children only after mount, so heavy client-only visuals (Three.js,
   GSAP) never run during SSR/prerender and never cause a hydration mismatch. */
const ClientOnly: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
};

export default ClientOnly;
