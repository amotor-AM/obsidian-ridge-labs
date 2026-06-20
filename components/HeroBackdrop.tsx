import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* A subtle Three.js layer behind the hero: a field of glowing points laid out
   as a slowly undulating ridge, a quiet nod to "Obsidian Ridge". Loaded
   client-only and code-split, so it never runs during SSR/prerender. Respects
   reduced-motion, pauses when the tab is hidden, and cleans up fully. GSAP adds
   a gentle scroll parallax as you move past the hero. */

const HeroBackdrop: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = root.clientWidth || window.innerWidth;
    let height = root.clientHeight || 600;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(width, height);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    root.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 7, 16);
    camera.lookAt(0, 1, -2);

    // Build a grid of points across an XZ plane; y is animated into ridges.
    const GX = 74;
    const GZ = 50;
    const SPAN_X = 54;
    const SPAN_Z = 34;
    const count = GX * GZ;
    const positions = new Float32Array(count * 3);
    const baseXZ: { x: number; z: number }[] = [];
    let p = 0;
    for (let ix = 0; ix < GX; ix++) {
      for (let iz = 0; iz < GZ; iz++) {
        const x = (ix / (GX - 1) - 0.5) * SPAN_X;
        const z = (iz / (GZ - 1) - 0.5) * SPAN_Z - 6;
        baseXZ.push({ x, z });
        positions[p++] = x;
        positions[p++] = 0;
        positions[p++] = z;
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: new THREE.Color('#00f0ff'),
      size: 0.07,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const ridge = (x: number, z: number, t: number) =>
      Math.sin(x * 0.28 + t) * 1.15 +
      Math.cos(z * 0.34 + t * 0.8) * 0.9 +
      Math.sin((x + z) * 0.16 + t * 0.5) * 0.6;

    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const writeRidge = (t: number) => {
      for (let i = 0; i < count; i++) {
        const { x, z } = baseXZ[i];
        positions[i * 3 + 1] = ridge(x, z, t);
      }
      pos.needsUpdate = true;
    };

    // Pointer parallax target
    const pointer = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    let raf = 0;
    let running = true;
    const clock = new THREE.Clock();

    const renderFrame = () => {
      const t = clock.getElapsedTime() * 0.35;
      writeRidge(t);
      points.rotation.y = Math.sin(t * 0.06) * 0.12;
      camera.position.x += (pointer.x * 2.2 - camera.position.x) * 0.04;
      camera.position.y += (7 + pointer.y * -1.2 - camera.position.y) * 0.04;
      camera.lookAt(0, 1, -2);
      renderer.render(scene, camera);
    };

    const loop = () => {
      if (!running) return;
      renderFrame();
      raf = requestAnimationFrame(loop);
    };

    if (prefersReduced) {
      writeRidge(0.6);
      renderer.render(scene, camera);
    } else {
      loop();
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!prefersReduced && !running) {
        running = true;
        clock.start();
        loop();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const resize = () => {
      width = root.clientWidth || window.innerWidth;
      height = root.clientHeight || 600;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (!running) renderer.render(scene, camera);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(root);

    // GSAP scroll parallax on the whole layer.
    let st: ScrollTrigger | undefined;
    if (!prefersReduced) {
      gsap.registerPlugin(ScrollTrigger);
      const section = root.closest('section') || root.parentElement || undefined;
      const tween = gsap.to(root, {
        yPercent: 28,
        ease: 'none',
        scrollTrigger: { trigger: section as Element, start: 'top top', end: 'bottom top', scrub: true },
      });
      st = tween.scrollTrigger;
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVisibility);
      ro.disconnect();
      st?.kill();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === root) root.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={rootRef} aria-hidden="true" className="absolute inset-0 -z-0 pointer-events-none" />;
};

export default HeroBackdrop;
