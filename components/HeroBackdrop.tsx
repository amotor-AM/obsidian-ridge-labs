import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  uniform float uPointSize;
  varying float vElevation;
  varying float vFade;

  float ridge(vec2 p) {
    float primary = sin(p.x * 0.42 + uTime * 0.16) * 1.15;
    float secondary = cos(p.y * 0.31 - uTime * 0.1) * 0.72;
    float detail = sin((p.x + p.y) * 0.23 + uTime * 0.08) * 0.46;
    float peak = exp(-pow((p.x + 3.5) * 0.15, 2.0)) * 2.4;
    return primary + secondary + detail + peak;
  }

  void main() {
    vec3 pos = position;
    float elevation = ridge(pos.xy);
    pos.z += elevation;
    vElevation = elevation;
    vFade = 1.0 - smoothstep(8.0, 25.0, length(pos.xy));
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = uPointSize * (30.0 / max(1.0, -viewPosition.z));
  }
`;

const lineFragmentShader = `
  uniform vec3 uColor;
  varying float vElevation;
  varying float vFade;

  void main() {
    float peak = smoothstep(-1.5, 3.4, vElevation);
    gl_FragColor = vec4(uColor, (0.08 + peak * 0.22) * max(0.1, vFade));
  }
`;

const pointFragmentShader = `
  uniform vec3 uColor;
  varying float vElevation;
  varying float vFade;

  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    if (distanceToCenter > 0.5) discard;
    float peak = smoothstep(-1.5, 3.5, vElevation);
    gl_FragColor = vec4(uColor, (0.28 + peak * 0.55) * vFade);
  }
`;

const HeroBackdrop: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const isCompact = window.matchMedia('(max-width: 760px)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      });
    } catch {
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isCompact ? 1.2 : 1.55));
    root.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
    camera.position.set(isCompact ? 1 : 2.5, isCompact ? 6 : 5.5, isCompact ? 18 : 16);
    camera.lookAt(2, -1.5, -5);

    const geometry = new THREE.PlaneGeometry(
      isCompact ? 30 : 44,
      isCompact ? 24 : 32,
      isCompact ? 34 : 62,
      isCompact ? 24 : 42,
    );

    const uniforms = {
      uTime: { value: 0.55 },
      uPointSize: { value: isCompact ? 2.4 : 2.8 },
      uColor: { value: new THREE.Color('#a8c89a') },
    };

    const lineMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: lineFragmentShader,
      uniforms,
      wireframe: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const pointMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: pointFragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const terrain = new THREE.Mesh(geometry, lineMaterial);
    terrain.rotation.x = -Math.PI / 2;
    terrain.rotation.z = -0.08;
    terrain.position.set(isCompact ? 0 : 5, -4.7, -6);
    scene.add(terrain);

    const points = new THREE.Points(geometry, pointMaterial);
    points.rotation.copy(terrain.rotation);
    points.position.copy(terrain.position);
    scene.add(points);

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let scrollOffset = 0;
    let visible = true;
    let frame = 0;
    let start = performance.now();

    const resize = () => {
      const width = Math.max(1, root.clientWidth);
      const height = Math.max(1, root.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (reducedMotion) renderer.render(scene, camera);
    };

    const onPointerMove = (event: PointerEvent) => {
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      scrollOffset = Math.min(1, window.scrollY / Math.max(1, root.clientHeight));
    };

    const draw = (now: number) => {
      if (!visible) return;
      const elapsed = (now - start) / 1000;
      if (!reducedMotion) uniforms.uTime.value = elapsed;
      pointer.x += (target.x - pointer.x) * 0.035;
      pointer.y += (target.y - pointer.y) * 0.035;
      camera.position.x = (isCompact ? 1 : 2.5) + pointer.x * 0.14;
      camera.position.y = (isCompact ? 6 : 5.5) - pointer.y * 0.1 + scrollOffset * 0.35;
      camera.lookAt(2 + pointer.x * 0.05, -1.5, -5);
      renderer.render(scene, camera);
      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reducedMotion) {
        start = performance.now() - uniforms.uTime.value * 1000;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(frame);
      }
    }, { rootMargin: '120px' });

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(root);
    observer.observe(root);
    if (finePointer) window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    resize();
    onScroll();
    if (reducedMotion) draw(performance.now());

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      if (finePointer) window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      geometry.dispose();
      lineMaterial.dispose();
      pointMaterial.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === root) root.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={rootRef} className="orl-hero__terrain" aria-hidden="true" />;
};

export default HeroBackdrop;
