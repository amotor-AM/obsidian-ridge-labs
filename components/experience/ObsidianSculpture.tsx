import React, { useEffect, useRef } from 'react';

/** Three machined frames, contained in one volume. No textures or external requests. */
export default function ObsidianSculpture() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    let dispose = () => {};
    const setup = async () => {
      const [THREE, { RoomEnvironment }] = await Promise.all([import('three'), import('three/examples/jsm/environments/RoomEnvironment.js')]);
      const root = rootRef.current;
      if (cancelled || !root) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); } catch { return; }
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.setClearColor(0x050505, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      root.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.set(0, 0.1, 12.5);
      const pmrem = new THREE.PMREMGenerator(renderer);
      const environment = new RoomEnvironment();
      const environmentMap = pmrem.fromScene(environment, 0.025);
      scene.environment = environmentMap.texture;
      environment.dispose();
      pmrem.dispose();
      const material = new THREE.MeshStandardMaterial({ color: 0x73767b, metalness: 1, roughness: 0.2, envMapIntensity: 2.1 });
      const shape = new THREE.Shape();
      const rounded = (path: InstanceType<typeof THREE.Path>, x: number, y: number, w: number, h: number, r: number) => {
        path.moveTo(x + r, y); path.lineTo(x + w - r, y); path.quadraticCurveTo(x + w, y, x + w, y + r);
        path.lineTo(x + w, y + h - r); path.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        path.lineTo(x + r, y + h); path.quadraticCurveTo(x, y + h, x, y + h - r);
        path.lineTo(x, y + r); path.quadraticCurveTo(x, y, x + r, y);
      };
      rounded(shape, -1.5, -2.15, 3, 4.3, 0.62);
      const hole = new THREE.Path(); rounded(hole, -1.1, -1.75, 2.2, 3.5, 0.3); shape.holes.push(hole);
      const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.18, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.075, bevelThickness: 0.075, curveSegments: 24 });
      geometry.center();
      const sculpture = new THREE.Group();
      [-1, 0, 1].forEach((index) => {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = index * 0.7;
        mesh.rotation.z = index * 0.17;
        mesh.rotation.y = index * 0.11;
        sculpture.add(mesh);
      });
      sculpture.rotation.set(0.3, -0.65, -0.36);
      scene.add(sculpture);
      const rim = new THREE.DirectionalLight(0xe4ebff, 5); rim.position.set(-3, 4, 5); scene.add(rim);
      const fill = new THREE.DirectionalLight(0xffffff, 3); fill.position.set(4, -2, 1); scene.add(fill);
      const reduced = matchMedia('(prefers-reduced-motion: reduce)');
      let frame = 0, visible = true, contextLost = false, time = 0, previous = 0;
      const pointer = { x: 0, y: 0 }, target = { x: 0, y: 0 };
      const draw = (now: number) => {
        if (!visible || document.hidden || contextLost) { frame = 0; return; }
        time += Math.min((now - previous) / 1000, 0.035); previous = now;
        pointer.x += (target.x - pointer.x) * 0.045; pointer.y += (target.y - pointer.y) * 0.045;
        sculpture.rotation.y = -0.65 + (reduced.matches ? 0 : Math.sin(time * 0.18) * 0.2 + pointer.x * 0.18);
        sculpture.rotation.x = 0.3 + (reduced.matches ? 0 : pointer.y * 0.12);
        sculpture.position.y = reduced.matches ? 0 : Math.sin(time * 0.3) * 0.065;
        renderer.render(scene, camera);
        root.dataset.ready = 'true';
        frame = reduced.matches ? 0 : requestAnimationFrame(draw);
      };
      const restart = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw); };
      const resize = () => { const { width, height } = root.getBoundingClientRect(); renderer.setSize(width, height, false); camera.aspect = width / Math.max(height, 1); camera.updateProjectionMatrix(); restart(); };
      const onPointer = (event: PointerEvent) => { target.x = event.clientX / innerWidth - 0.5; target.y = event.clientY / innerHeight - 0.5; };
      const onContextLost = (event: Event) => { event.preventDefault(); contextLost = true; cancelAnimationFrame(frame); delete root.dataset.ready; };
      const onContextRestored = () => { contextLost = false; resize(); };
      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); });
      const resizer = new ResizeObserver(resize); resizer.observe(root); observer.observe(root);
      window.addEventListener('pointermove', onPointer, { passive: true });
      document.addEventListener('visibilitychange', restart);
      reduced.addEventListener('change', restart);
      renderer.domElement.addEventListener('webglcontextlost', onContextLost);
      renderer.domElement.addEventListener('webglcontextrestored', onContextRestored);
      resize();
      dispose = () => {
        cancelAnimationFrame(frame); observer.disconnect(); resizer.disconnect();
        window.removeEventListener('pointermove', onPointer); document.removeEventListener('visibilitychange', restart); reduced.removeEventListener('change', restart);
        renderer.domElement.removeEventListener('webglcontextlost', onContextLost); renderer.domElement.removeEventListener('webglcontextrestored', onContextRestored);
        geometry.dispose(); material.dispose(); environmentMap.dispose(); renderer.dispose(); renderer.domElement.remove();
      };
    };
    void setup();
    return () => { cancelled = true; dispose(); };
  }, []);
  return <div ref={rootRef} className="vx-sculpture" aria-hidden="true"><div className="vx-sculpture-fallback"><i /><i /><i /></div></div>;
}
