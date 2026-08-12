"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const documentHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const currentPosition = window.scrollY;

        const nextProgress =
          documentHeight > 0
            ? Math.min(currentPosition / documentHeight, 1)
            : 0;

        setProgress(nextProgress);
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-primary via-cyan-300 to-secondary shadow-[0_0_12px_rgba(34,211,238,0.55)] transition-[transform] duration-100 ease-out"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}
