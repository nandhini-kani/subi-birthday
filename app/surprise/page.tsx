
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Gift,
  Sparkles,
  Smile,
  ArrowLeft,
  Flower2,
} from "lucide-react";

import AccessGuard from "@/components/AccessGuard";
import Navigation from "@/components/Navigation";
import FlowerRain from "@/components/FlowerRain";
import celebrate from "@/components/Confetti";

const messages = [
  "You are stronger than every difficult day you survived. 💗",
  "You deserve happiness without having to earn it. 🌷",
  "Your smile is precious. Never let the world take it away. ✨",
  "One day, your dream job will be your reality. Keep going! 🏦",
  "You are not behind in life. You are growing at your own pace. 🦋",
  "Today is your reminder that you are loved, appreciated, and important. 💌",
];

export default function SurprisePage() {
  const [message, setMessage] = useState("");
  const [letterOpen, setLetterOpen] = useState(false);
  const [smileClicked, setSmileClicked] = useState(false);

  function showMessage() {
    const random = Math.floor(Math.random() * messages.length);
    setMessage(messages[random]);
    celebrate();
  }

  function openLetter() {
    setLetterOpen(!letterOpen);

    if (!letterOpen) {
      celebrate();
    }
  }

  function smileChallenge() {
    setSmileClicked(true);
    celebrate();
  }

  return (
    <AccessGuard>
      <main className="page-shell bg-magic min-h-screen pb-24">
        <Navigation />
        <FlowerRain />

        <section className="relative z-10 mx-auto max-w-4xl px-5 pt-32">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-5xl">🎁💗</span>

            <p className="mt-5 font-bold tracking-[4px] text-pink-500">
              A FEW MORE THINGS
            </p>

            <h1 className="mt-3 text-4xl font-black text-pink-200 sm:text-6xl">
              Just For You
            </h1>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-pink-300">
              Your birthday comes once a year, but you deserve beautiful
              things, kind words, and happiness every single day.
            </p>
          </motion.header>

          {/* Surprise Messages */}
          <div className="magic-card mt-12 rounded-3xl p-7 text-center sm:p-10">
            <Gift size={38} className="mx-auto text-pink-400" />

            <h2 className="mt-4 text-2xl font-black text-pink-200">
              Open a Little Happiness
            </h2>

            <p className="mt-3 text-pink-300">
              Click whenever you need a little reminder.
            </p>

            <button
              onClick={showMessage}
              className="btn-primary btn-pink mt-6"
            >
              Give Me a Surprise 💌
            </button>

            <AnimatePresence mode="wait">
              {message && (
                <motion.div
                  key={message}
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mt-7 rounded-2xl p-6 text-lg font-bold leading-8"
                  style={{ backgroundColor: "#4a2b3b", border: "1px solid #d987a8", color: "#ffe6f0" }}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Smile Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="magic-card mt-7 rounded-3xl p-7 text-center sm:p-10"
          >
            <Smile size={38} className="mx-auto text-pink-300" />

            <h2 className="mt-4 text-2xl font-black text-pink-200">
              Smile Challenge 😌
            </h2>

            <p className="mt-4 text-pink-300">
              Okay, birthday girl. For the next few seconds, forget
              every problem. No overthinking. No worrying about tomorrow.
              Just smile for no reason.
            </p>

            <button
              onClick={smileChallenge}
              className="btn-primary mt-6"
            >
              I Smiled! 😊
            </button>

            {smileClicked && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mt-6 text-2xl font-bold text-pink-500"
              >
                Mission accomplished! Your smile is today's best gift. 💗
              </motion.div>
            )}
          </motion.div>

          

          {/* Finale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pink-gradient glow mt-7 rounded-[32px] p-8 text-center sm:p-12"
          >
            <Flower2 size={42} className="mx-auto text-pink-200" />

            <h2 className="gold-text mt-5 text-4xl font-black sm:text-5xl">
              Keep Blooming, Subi 🌸
            </h2>

            <p className="mt-5 leading-8 text-pink-100">
              No matter what life brings, may you keep blooming in your
              own beautiful way. May all your dreams find their way to you.
            </p>

            <button
              onClick={celebrate}
              className="btn-primary btn-pink mt-8 text-lg"
            >
              Happy Birthday Once Again! 🎉
              <Sparkles size={18} />
            </button>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Link href="/dreams" className="btn-primary btn-pink">
              <ArrowLeft size={18} /> Back to Her Dreams
            </Link>
          </div>

          <p className="mt-12 text-center text-sm font-medium text-pink-500">
            Made with love, just for Subi 💚🌷
          </p>
        </section>
      </main>
    </AccessGuard>
  );
}