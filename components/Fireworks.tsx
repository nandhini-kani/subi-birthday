"use client";

import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function Fireworks() {
  useEffect(() => {
    const end = Date.now() + 5 * 1000;

    const colors = [
      "#d987a8",
      "#f2b8d0",
      "#e9a8c4",
      "#ffe6f0",
      "#c56d91",
    ];

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return null;
}