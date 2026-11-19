"use client";

import { useEffect, useState } from "react";

const flowers = ["🌸", "🌺", "🌷", "💮", "🌼", "💗", "✨"];

type Flower = {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
};

export default function FlowerRain() {
  const [items, setItems] = useState<Flower[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      emoji: flowers[Math.floor(Math.random() * flowers.length)],
      left: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 8,
      size: 16 + Math.random() * 22,
    }));

    setItems(generated);
  }, []);

  return (
    <>
      {items.map((flower) => (
        <span
          key={flower.id}
          className="flower"
          style={{
            left: `${flower.left}%`,
            fontSize: `${flower.size}px`,
            animationDuration: `${flower.duration}s`,
            animationDelay: `${flower.delay}s`,
          }}
        >
          {flower.emoji}
        </span>
      ))}
    </>
  );
}