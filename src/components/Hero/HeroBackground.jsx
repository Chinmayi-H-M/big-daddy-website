import { useEffect, useRef, useCallback } from 'react';

/* ═══════════════════════════════════════════════════════════════════════════════
   HeroBackground — Looping Canvas Frame Animation
   Plays the clothing image frames as a subtle, continuous background loop
   behind the Hero section content.
   ═══════════════════════════════════════════════════════════════════════════════ */

const TOTAL_FRAMES = 60;
const FRAME_RATE = 10; // FPS
const FRAME_INTERVAL = 1000 / FRAME_RATE;

/** Build sorted frame URL list: ezgif-frame-001.jpg … ezgif-frame-060.jpg */
function getFrameUrls() {
  const urls = [];
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    urls.push(`/intro-frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`);
  }
  return urls;
}

/**
 * Preload images in parallel. Returns array of HTMLImageElement | null.
 * Loads gracefully — broken frames resolve as null instead of rejecting.
 */
function preloadImages(urls) {
  return Promise.all(
    urls.map(
      (src, idx) =>
        new Promise((resolve) => {
          const img = new Image();
          img.decoding = 'async';
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.warn(`[HeroBackground] Failed to load frame ${idx + 1}: ${src}`);
            resolve(null);
          };
          img.src = src;
        })
    )
  );
}

export default function HeroBackground() {
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const animRef = useRef(null);
  const loadedRef = useRef(false);

  // Check reduced-motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  /**
   * Draw a single frame onto the canvas using "cover" scaling.
   * This ensures the frame fills the entire canvas without letterboxing,
   * similar to CSS object-fit: cover.
   */
  const drawCover = useCallback((ctx, img, canvasW, canvasH) => {
    const imgW = img.naturalWidth || img.width;
    const imgH = img.naturalHeight || img.height;

    const scale = Math.max(canvasW / imgW, canvasH / imgH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const dx = (canvasW - drawW) / 2;
    const dy = (canvasH - drawH) / 2;

    ctx.drawImage(img, dx, dy, drawW, drawH);
  }, []);

  /**
   * Resize the canvas to match its CSS display size (devicePixelRatio-aware).
   * Returns true if the canvas dimensions actually changed.
   */
  const resizeCanvas = useCallback((canvas) => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2x for perf
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      return true;
    }
    return false;
  }, []);

  // ── Preload frames on mount ─────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;

    preloadImages(getFrameUrls()).then((images) => {
      if (cancelled) return;
      framesRef.current = images;
      loadedRef.current = true;
    });

    return () => { cancelled = true; };
  }, []);

  // ── Animation loop ──────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // For reduced-motion: draw a single static frame once loaded and stop.
    if (prefersReducedMotion) {
      const waitForLoad = setInterval(() => {
        if (!loadedRef.current) return;
        clearInterval(waitForLoad);

        resizeCanvas(canvas);
        // Use mid-point frame (frame 30) as static fallback — shows a nice shot
        const staticFrame = framesRef.current[29] || framesRef.current.find(f => f !== null);
        if (staticFrame) {
          drawCover(ctx, staticFrame, canvas.width, canvas.height);
        }
      }, 100);

      return () => clearInterval(waitForLoad);
    }

    // Normal animated playback
    let frameIndex = 0;
    let lastTime = 0;
    let running = true;

    function loop(timestamp) {
      if (!running) return;

      // Wait until frames are loaded
      if (!loadedRef.current) {
        animRef.current = requestAnimationFrame(loop);
        return;
      }

      const frames = framesRef.current;
      const validFrames = frames.filter(f => f !== null);
      if (validFrames.length === 0) return; // all failed

      // Handle resize
      resizeCanvas(canvas);

      if (lastTime === 0) lastTime = timestamp;
      const delta = timestamp - lastTime;

      if (delta >= FRAME_INTERVAL) {
        lastTime = timestamp - (delta % FRAME_INTERVAL);

        const img = frames[frameIndex % TOTAL_FRAMES];
        if (img) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawCover(ctx, img, canvas.width, canvas.height);
        }

        frameIndex++;
        // Loop continuously
        if (frameIndex >= TOTAL_FRAMES) {
          frameIndex = 0;
        }
      }

      animRef.current = requestAnimationFrame(loop);
    }

    animRef.current = requestAnimationFrame(loop);

    return () => {
      running = false;
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      }
    };
  }, [prefersReducedMotion, drawCover, resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="hero__video-canvas"
      aria-hidden="true"
    />
  );
}
