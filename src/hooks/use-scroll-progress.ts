"use client";

import { useEffect, useRef } from "react";

export function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const documentHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        if (documentHeight <= 0) {
          progress.current = 0;
          return;
        }

        progress.current = Math.min(
          Math.max(window.scrollY / documentHeight, 0),
          1,
        );
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return progress;
}
