"use client";

import confetti from "canvas-confetti";

export default function celebrate() {
  confetti({
    particleCount: 160,
    spread: 100,
    startVelocity: 45,
    origin: { y: 0.65 },
    colors: ["#a65378", "#d987a8", "#f2b8d0", "#ffe6f0", "#e9a8c4"],
  });

  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#a65378", "#c56d91", "#d987a8", "#f2b8d0"],
    });
  }, 400);
}