import React, { useEffect, useRef } from 'react';

/**
 * A lightweight, procedurally generated glass sculpture.
 * Decorative only: product content and navigation remain native HTML.
 * Automatically suspends rendering when offscreen, hidden, or reduced motion.
 */
const OrbitScene: React.FC<{ active: boolean }> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let disposed = false;
    let requestId = 0;
    let visible = true;
    let ready = false;
    let reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderFrame: ((t: number) => void) | undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const visibilityObserver = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting ?? true; schedule(); }, { threshold: 0.01 })
      : null;
    visibilityObserver?.observe(canvas);

    const schedule = () => {
      if (!ready || disposed) return;
      cancelAnimationFrame(requestId);
      if (!visible || document.hidden) return;
      if (reduced || !activeRef.current) { renderFrame?.(0); return; }
      requestId = requestAnimationFrame(tick);
    };
    const tick = (time: number) => {
      if (disposed || document.hidden || !visible || reduced || !activeRef.current) return;
      renderFrame?.(time);
      requestId = requestAnimationFrame(tick);
    };
    const onVisibility = () => schedule();
    const onMotion = () => { reduced = mq.matches; schedule(); };
    document.addEventListener('visibilitychange', onVisibility);
    mq.addEventListener?.('change', onMotion);

    let teardown = () => {};
    const init = async () => {
      try {
        const THREE = await import('three');
        if (disposed || !canvas) return;
        let renderer: InstanceType<typeof THREE.WebGLRenderer>;
        try {
          renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
        } catch {
          canvas.hidden = true;
          return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.5;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
        camera.position.set(0, 0.15, 8.8);

        const root = new THREE.Group();
        scene.add(root);
        const coreMat = new THREE.MeshPhysicalMaterial({
          color: 0xea75a6, metalness: 0.04, roughness: 0.18,
          transmission: 0.35, thickness: 1.8, clearcoat: 1,
          clearcoatRoughness: 0.12, ior: 1.35,
          flatShading: true, transparent: true, opacity: 0.94,
          side: THREE.DoubleSide,
        });
        // Deliberately low-poly geometry creates a crystalline, editorial sculpture.
        const coreGeometry = new THREE.IcosahedronGeometry(1.55, 1);
        const core = new THREE.Mesh(coreGeometry, coreMat);
        core.scale.set(1, 1.13, 0.94);
        root.add(core);
        const innerMat = new THREE.MeshStandardMaterial({
          color: 0xffdab6, metalness: 0.3, roughness: 0.28,
          emissive: 0xae346c, emissiveIntensity: 0.12, flatShading: true,
        });
        const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(0.87, 1), innerMat);
        inner.rotation.set(0.3, 0.5, 0.15);
        root.add(inner);

        const edgeMat = new THREE.LineBasicMaterial({ color: 0xfff6ec, transparent: true, opacity: 0.57 });
        const edges = new THREE.LineSegments(new THREE.EdgesGeometry(coreGeometry, 13), edgeMat);
        edges.scale.copy(core.scale).multiplyScalar(1.009);
        root.add(edges);

        const loops = new THREE.Group();
        const rings = [
          { radius: 2.12, tube: 0.045, rx: 1.02, ry: 0.15, color: 0xfcecc9 },
          { radius: 2.28, tube: 0.028, rx: 0.35, ry: 0.95, color: 0xb783e5 },
          { radius: 2.48, tube: 0.015, rx: -0.53, ry: 0.12, color: 0xffc5ad },
        ];
        for (const ring of rings) {
          const mesh = new THREE.Mesh(
            new THREE.TorusGeometry(ring.radius, ring.tube, 6, 138),
            new THREE.MeshStandardMaterial({ color: ring.color, metalness: 0.28, roughness: 0.3, transparent: true, opacity: 0.95 })
          );
          mesh.rotation.set(ring.rx, ring.ry, 0);
          loops.add(mesh);
        }
        root.add(loops);

        const satelliteGeometry = new THREE.OctahedronGeometry(0.15, 0);
        const satelliteColors = [0x7c63d6, 0xffc86a, 0xf3a6c0, 0xaff0da, 0xb9acff];
        const satellites: InstanceType<typeof THREE.Mesh>[] = [];
        for (let i = 0; i < 11; i += 1) {
          const satellite = new THREE.Mesh(satelliteGeometry, new THREE.MeshStandardMaterial({
            color: satelliteColors[i % satelliteColors.length], metalness: 0.18, roughness: 0.29, flatShading: true,
          }));
          satellite.scale.setScalar(0.65 + (i % 4) * 0.17);
          satellites.push(satellite);
          root.add(satellite);
        }
        scene.add(new THREE.AmbientLight(0xfff5eb, 2.2));
        const pink = new THREE.PointLight(0xffb4cb, 80, 16);
        pink.position.set(-4, 3, 5); scene.add(pink);
        const blue = new THREE.PointLight(0x9ab7ff, 65, 12);
        blue.position.set(4, -2, 2); scene.add(blue);
        const white = new THREE.DirectionalLight(0xffffff, 3.0);
        white.position.set(1, 5, 6); scene.add(white);

        let pointerX = 0;
        let pointerY = 0;
        const handleMove = (event: PointerEvent) => {
          if (event.pointerType !== 'mouse') return;
          const b = canvas.getBoundingClientRect();
          pointerX = (event.clientX - b.left) / b.width - 0.5;
          pointerY = (event.clientY - b.top) / b.height - 0.5;
        };
        canvas.addEventListener('pointermove', handleMove, { passive: true });
        const resize = () => {
          const box = canvas.getBoundingClientRect();
          const w = Math.max(1, box.width), h = Math.max(1, box.height);
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.position.z = w < 470 ? 11 : 8.8;
          camera.updateProjectionMatrix();
        };
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);
        resize();

        renderFrame = (time: number) => {
          const t = (time || 0) / 1000;
          root.rotation.y = t * 0.16 + pointerX * 0.24 - 0.15;
          root.rotation.x = Math.sin(t * 0.22) * 0.08 - pointerY * 0.16;
          core.rotation.z = t * 0.065;
          inner.rotation.y = t * -0.19;
          loops.rotation.z = Math.sin(t * 0.1) * 0.11;
          satellites.forEach((satellite, i) => {
            const a = i * Math.PI * 2 / satellites.length + t * (0.05 + (i % 3) * 0.017);
            satellite.position.set(Math.cos(a) * (2.55 + i % 3 * 0.18), Math.sin(a * 1.1) * 1.84, Math.sin(a) * 1.18);
            satellite.rotation.y = a;
            satellite.rotation.x = a * 0.7;
          });
          renderer.render(scene, camera);
        };
        ready = true;
        schedule();
        teardown = () => {
          resizeObserver.disconnect();
          canvas.removeEventListener('pointermove', handleMove);
          coreGeometry.dispose(); coreMat.dispose(); inner.geometry.dispose(); innerMat.dispose();
          edges.geometry.dispose(); edgeMat.dispose(); satelliteGeometry.dispose();
          satellites.forEach(s => (s.material as InstanceType<typeof THREE.Material>).dispose());
          loops.children.forEach(child => {
            if (child instanceof THREE.Mesh) {
              child.geometry.dispose(); (child.material as InstanceType<typeof THREE.Material>).dispose();
            }
          });
          renderer.dispose();
        };
      } catch {
        // The static CSS visual remains visible if the WebGL bundle cannot initialize.
        if (canvas) canvas.hidden = true;
      }
    };
    init();
    return () => {
      disposed = true;
      cancelAnimationFrame(requestId);
      visibilityObserver?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      mq.removeEventListener?.('change', onMotion);
      teardown();
    };
  }, []);

  useEffect(() => {
    // The canvas loop observes this state through a ref. A visibility change
    // starts a fresh frame without recreating the WebGL context.
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    // A new render loop is created by the event below; no React render-cycle scheduling.
    document.dispatchEvent(new Event('visibilitychange'));
  }, [active]);

  return <div className="kin-orbit">
    <div className="kin-orbit__halo" aria-hidden="true" />
    <div className="kin-orbit__fallback" aria-hidden="true"><span /><span /><span /><i /></div>
    <canvas ref={canvasRef} className="kin-orbit__canvas" aria-hidden="true" />
  </div>;
};

export default OrbitScene;
