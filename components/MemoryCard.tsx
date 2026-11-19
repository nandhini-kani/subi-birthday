"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

type Props = {
  title: string;
  message: string;
  emoji: string;
  index: number;
};

export default function MemoryCard({
  title,
  message,
  emoji,
  index,
}: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      onClick={() => setOpened(!opened)}
      className="magic-card w-full rounded-3xl p-6 text-left transition hover:-translate-y-2"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-4xl">{emoji}</span>

        <Heart
          size={20}
          className="text-pink-400"
          fill={opened ? "#ffb7d5" : "none"}
        />
      </div>

      <h3 className="mb-2 text-xl font-bold text-pink-200">
        {title}
      </h3>

      <p className="text-sm leading-6 text-pink-300">
        {opened ? message : "Tap to open this little memory ✨"}
      </p>

      <div className="mt-4 text-xs font-bold text-pink-500">
        {opened ? "Tap to hide ♥" : "Tap to discover 💌"}
      </div>
    </motion.button>
  );
}