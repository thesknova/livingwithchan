"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap, prefersReducedMotion } from "@/lib/motion";

const BG = 0x17140f; // matches --color-primary-deep
const BRONZE = 0xa3856f;
const DUST = 0xd8c4ae;

/** Line-art house: every wall, window, and rafter as 3D segments, ordered so
 *  setDrawRange() sketches it in like an architect's pen. */
function buildHouseGeometry() {
  const pts: number[] = [];
  const seg = (
    ax: number, ay: number, az: number,
    bx: number, by: number, bz: number
  ) => pts.push(ax, ay, az, bx, by, bz);

  // Axis-aligned rectangle on a wall plane
  const rectXY = (x1: number, y1: number, x2: number, y2: number, z: number) => {
    seg(x1, y1, z, x2, y1, z);
    seg(x2, y1, z, x2, y2, z);
    seg(x2, y2, z, x1, y2, z);
    seg(x1, y2, z, x1, y1, z);
  };

  const W = 2.5;  // half width  (x)
  const D = 1.7;  // half depth  (z)
  const H = 2.4;  // wall height
  const R = 3.8;  // ridge height

  // Ground platform
  seg(-3.8, 0, -2.8, 3.8, 0, -2.8);
  seg(3.8, 0, -2.8, 3.8, 0, 2.8);
  seg(3.8, 0, 2.8, -3.8, 0, 2.8);
  seg(-3.8, 0, 2.8, -3.8, 0, -2.8);

  // Garden path leading from the door
  seg(-0.5, 0, D, -0.9, 0, 3.6);
  seg(0.5, 0, D, 0.9, 0, 3.6);
  seg(-0.62, 0, 2.3, 0.62, 0, 2.3);
  seg(-0.75, 0, 2.95, 0.75, 0, 2.95);

  // Base perimeter
  seg(-W, 0, -D, W, 0, -D);
  seg(W, 0, -D, W, 0, D);
  seg(W, 0, D, -W, 0, D);
  seg(-W, 0, D, -W, 0, -D);

  // Corner posts
  seg(-W, 0, -D, -W, H, -D);
  seg(W, 0, -D, W, H, -D);
  seg(W, 0, D, W, H, D);
  seg(-W, 0, D, -W, H, D);

  // Eave line (top of walls)
  seg(-W, H, -D, W, H, -D);
  seg(W, H, -D, W, H, D);
  seg(W, H, D, -W, H, D);
  seg(-W, H, D, -W, H, -D);

  // Roof: ridge along x, gable rafters on both ends
  seg(-W, R, 0, W, R, 0);
  seg(-W, H, D, -W, R, 0);
  seg(-W, H, -D, -W, R, 0);
  seg(W, H, D, W, R, 0);
  seg(W, H, -D, W, R, 0);

  // Front door + handle
  seg(-0.4, 0, D, -0.4, 1.85, D);
  seg(-0.4, 1.85, D, 0.4, 1.85, D);
  seg(0.4, 1.85, D, 0.4, 0, D);
  seg(0.26, 0.92, D, 0.26, 1.08, D);

  // Front windows with cross mullions
  for (const [x1, x2] of [[-1.95, -0.85], [0.85, 1.95]] as const) {
    rectXY(x1, 0.95, x2, 1.85, D);
    const cx = (x1 + x2) / 2;
    seg(cx, 0.95, D, cx, 1.85, D);
    seg(x1, 1.4, D, x2, 1.4, D);
  }

  // Small gable windows on both ends
  for (const x of [-W, W]) {
    seg(x, 2.7, -0.35, x, 2.7, 0.35);
    seg(x, 2.7, 0.35, x, 3.2, 0.35);
    seg(x, 3.2, 0.35, x, 3.2, -0.35);
    seg(x, 3.2, -0.35, x, 2.7, -0.35);
    seg(x, 2.95, -0.35, x, 2.95, 0.35);
  }

  // Chimney rising through the rear roof slope
  const roofY = (z: number) => H + (R - H) * (1 - Math.abs(z) / D);
  const cz1 = -0.75, cz2 = -0.25, cx1 = 1.1, cx2 = 1.6, top = 4.25;
  seg(cx1, top, cz1, cx2, top, cz1);
  seg(cx2, top, cz1, cx2, top, cz2);
  seg(cx2, top, cz2, cx1, top, cz2);
  seg(cx1, top, cz2, cx1, top, cz1);
  seg(cx1, top, cz1, cx1, roofY(cz1), cz1);
  seg(cx2, top, cz1, cx2, roofY(cz1), cz1);
  seg(cx1, top, cz2, cx1, roofY(cz2), cz2);
  seg(cx2, top, cz2, cx2, roofY(cz2), cz2);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
  return geometry;
}

/** Lawn sign post + crossarm, drawn after the house. The panel itself is a
 *  textured plane (see makeSignTexture) so it can flip to SOLD BY CHAN. */
function buildSignGeometry() {
  const pts: number[] = [];
  const seg = (
    ax: number, ay: number, az: number,
    bx: number, by: number, bz: number
  ) => pts.push(ax, ay, az, bx, by, bz);

  const Z = 2.3;
  seg(1.05, 0, Z, 1.05, 1.55, Z);        // post
  seg(1.05, 1.55, Z, 2.1, 1.55, Z);      // crossarm
  seg(1.05, 1.25, Z, 1.7, 1.55, Z);      // diagonal brace
  seg(1.2, 1.55, Z, 1.2, 1.42, Z);       // hangers
  seg(1.85, 1.55, Z, 1.85, 1.42, Z);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
  return geometry;
}

/** Sign panel face rendered to a canvas: bordered FOR SALE, then SOLD BY CHAN.
 *  Uses the site's real font families via the next/font CSS variables. */
function makeSignTexture(kind: "forsale" | "sold") {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 320;
  const ctx = c.getContext("2d")!;
  const rootStyle = getComputedStyle(document.documentElement);
  const display =
    rootStyle.getPropertyValue("--font-marcellus").trim() || "Georgia, serif";
  const sans =
    rootStyle.getPropertyValue("--font-hanken").trim() || "sans-serif";

  // Solid dark face so the house lines behind never bleed through the text
  ctx.fillStyle = "rgba(23, 20, 15, 0.94)";
  ctx.fillRect(0, 0, 512, 320);

  // Panel border, part of the flipping face
  ctx.strokeStyle = "#a3856f";
  ctx.lineWidth = 4;
  ctx.strokeRect(6, 6, 500, 308);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  try {
    // Not supported in every browser; the sign reads fine without it.
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "6px";
  } catch {}

  if (kind === "forsale") {
    ctx.fillStyle = "#e9dccb";
    ctx.font = `600 82px ${sans}`;
    ctx.fillText("FOR SALE", 256, 162);
  } else {
    ctx.fillStyle = "#c89b77";
    ctx.font = `132px ${display}`;
    ctx.fillText("SOLD", 256, 116);
    ctx.fillStyle = "#e9dccb";
    ctx.font = `600 52px ${sans}`;
    ctx.fillText("BY CHAN", 256, 242);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** Soft round sprite for the dust particles. */
function makeDustTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,244,230,1)");
  g.addColorStop(0.4, "rgba(255,244,230,0.45)");
  g.addColorStop(1, "rgba(255,244,230,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export default function HeroScene({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // No WebGL — the CSS gradient behind the canvas carries the hero.
    }

    const reduced = prefersReducedMotion();

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = "block";
    mount.appendChild(renderer.domElement);

    const tweens: (gsap.core.Tween | gsap.core.Timeline)[] = [];

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(BG, 10, 21);

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 60);
    camera.position.set(0, 2.1, 10.8);
    camera.lookAt(0, 1.55, 0);

    // House
    const houseGroup = new THREE.Group();
    const houseGeometry = buildHouseGeometry();
    const houseMaterial = new THREE.LineBasicMaterial({
      color: BRONZE,
      transparent: true,
      opacity: 0.85,
    });
    const house = new THREE.LineSegments(houseGeometry, houseMaterial);
    houseGroup.add(house);

    // Warm pool of light under the house
    const glowTexture = makeDustTexture();
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(13, 9),
      new THREE.MeshBasicMaterial({
        map: glowTexture,
        color: BRONZE,
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
      })
    );
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.01;
    houseGroup.add(glow);

    // Lawn sign: line-art post, plus a hanging panel that flips to SOLD BY CHAN
    const signGeometry = buildSignGeometry();
    const signMaterial = new THREE.LineBasicMaterial({
      color: BRONZE,
      transparent: true,
      opacity: 0.85,
    });
    const sign = new THREE.LineSegments(signGeometry, signMaterial);
    houseGroup.add(sign);

    // Panel pivots at its top edge, like a sign hanging from the crossarm
    const panelGroup = new THREE.Group();
    panelGroup.position.set(1.525, 1.42, 2.31);
    const panelMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.06, 0.66), panelMaterial);
    panel.position.y = -0.33;
    panelGroup.add(panel);
    houseGroup.add(panelGroup);

    let flipped = false;
    const setPanelTexture = (kind: "forsale" | "sold") => {
      panelMaterial.map?.dispose();
      panelMaterial.map = makeSignTexture(kind);
      panelMaterial.needsUpdate = true;
    };
    setPanelTexture("forsale");

    const baseRotation = -0.48;
    houseGroup.rotation.y = baseRotation;
    scene.add(houseGroup);

    // Dust particles
    const COUNT = 650;
    const positions = new Float32Array(COUNT * 3);
    const basePositions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      basePositions[i * 3] = positions[i * 3] = (Math.random() - 0.5) * 20;
      basePositions[i * 3 + 1] = positions[i * 3 + 1] = Math.random() * 7;
      basePositions[i * 3 + 2] = positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 1;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const dustTexture = makeDustTexture();
    const dustMaterial = new THREE.PointsMaterial({
      map: dustTexture,
      color: DUST,
      size: 0.09,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // Responsive framing: house sits right of the copy on wide screens
    const totalVertices = houseGeometry.getAttribute("position").count;
    const layout = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const wide = w / h >= 1.05;
      houseGroup.position.x = wide ? 3.0 : 0;
      houseGroup.scale.setScalar(wide ? 0.82 : 0.62);
      // Behind the copy on small screens the house is texture, not subject
      houseMaterial.opacity = wide ? 0.85 : 0.45;
    };
    layout();

    const renderFrame = () => renderer.render(scene, camera);

    // The panel's flip angle; the render loop adds a gentle hanging sway on top
    const flip = { x: 0 };

    // Redraw the panel text once the real webfonts arrive
    document.fonts.ready.then(() => {
      if (!panelMaterial.map) return; // already cleaned up
      setPanelTexture(flipped ? "sold" : "forsale");
      if (reduced) renderFrame();
    });

    if (reduced) {
      // Static, fully drawn frame — no animation loop at all.
      dustMaterial.opacity = 0.4;
      flipped = true;
      setPanelTexture("sold");
      panelMaterial.opacity = 1;
      renderFrame();
    } else {
      houseGeometry.setDrawRange(0, 0);
      signGeometry.setDrawRange(0, 0);

      const draw = { progress: 0 };
      tweens.push(
        gsap.to(draw, {
          progress: 1,
          duration: 3,
          delay: 0.5,
          ease: "power2.inOut",
          onUpdate: () => {
            // Snap to segment pairs so lines never end mid-segment
            const v = Math.round((draw.progress * totalVertices) / 2) * 2;
            houseGeometry.setDrawRange(0, v);
          },
        }),
        gsap.to(dustMaterial, { opacity: 0.5, duration: 2.4, delay: 0.8, ease: "power1.inOut" })
      );

      // The story beat: sign sketches in, FOR SALE appears, then flips to SOLD BY CHAN
      const signVertices = signGeometry.getAttribute("position").count;
      const signDraw = { progress: 0 };
      const signTl = gsap.timeline({ delay: 3.3 });
      signTl
        .to(signDraw, {
          progress: 1,
          duration: 0.7,
          ease: "power2.out",
          onUpdate: () => {
            const v = Math.round((signDraw.progress * signVertices) / 2) * 2;
            signGeometry.setDrawRange(0, v);
          },
        })
        .to(panelMaterial, { opacity: 1, duration: 0.6, ease: "power1.inOut" }, 0.45)
        .to(flip, { x: Math.PI / 2, duration: 0.32, ease: "power2.in" }, "+=2.4")
        .call(() => {
          flipped = true;
          setPanelTexture("sold");
        })
        .to(flip, { x: 0, duration: 0.7, ease: "expo.out" });
      tweens.push(signTl);
    }

    // Mouse parallax
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    // Pause rendering while offscreen
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(mount);

    let raf = 0;
    const clock = new THREE.Clock();
    if (!reduced) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });

      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!visible) return;
        const t = clock.getElapsedTime();

        // Slow idle sway + mouse-led look-around
        const targetY = baseRotation + Math.sin(t * 0.08) * 0.04 + mouse.x * 0.07;
        houseGroup.rotation.y += (targetY - houseGroup.rotation.y) * 0.04;
        const targetX = mouse.y * 0.02;
        houseGroup.rotation.x += (targetX - houseGroup.rotation.x) * 0.04;

        // Hanging sign sways gently around its top edge
        panelGroup.rotation.x = flip.x + Math.sin(t * 0.9) * 0.03;

        // Rising dust drift
        const pos = dustGeometry.getAttribute("position") as THREE.BufferAttribute;
        for (let i = 0; i < COUNT; i++) {
          const y = (basePositions[i * 3 + 1] + t * 0.14 + i * 0.011) % 7;
          pos.setY(i, y);
          pos.setX(i, basePositions[i * 3] + Math.sin(t * 0.25 + i) * 0.22);
        }
        pos.needsUpdate = true;

        renderFrame();
      };
      loop();
    }

    const ro = new ResizeObserver(() => {
      layout();
      if (reduced) renderFrame();
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      io.disconnect();
      ro.disconnect();
      tweens.forEach((t) => t.kill());
      houseGeometry.dispose();
      houseMaterial.dispose();
      signGeometry.dispose();
      signMaterial.dispose();
      panel.geometry.dispose();
      panelMaterial.map?.dispose();
      panelMaterial.map = null; // signals the fonts.ready callback to bail
      panelMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      glow.geometry.dispose();
      (glow.material as THREE.Material).dispose();
      glowTexture.dispose();
      dustTexture.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
