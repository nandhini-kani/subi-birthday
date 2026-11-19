
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import AccessGuard from "@/components/AccessGuard";
import FlowerRain from "@/components/FlowerRain";
import Fireworks from "@/components/Fireworks";


export default function BirthdayPage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(
      sessionStorage.getItem("subi-birthday-unlocked") === "true"
    );
  }, []);

  return (
    <AccessGuard>
      {!unlocked ? (
        <main className="bg-magic flex min-h-screen items-center justify-center">
          <p className="text-lg font-bold text-pink-300">
            Preparing your birthday surprise... 🌸
          </p>
        </main>
      ) : (
        <main className="page-shell bg-magic pb-20">
          <FlowerRain />
          <Fireworks />
         
          <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="font-bold tracking-[5px] text-pink-500">
                TODAY IS ALL ABOUT YOU
              </p>

              <h1 className="mt-4 text-5xl font-black leading-tight sm:text-7xl">
                <span className="gold-text">Happy Birthday</span>
                <br />
                <span className="text-pink-200">Subi! 💗</span>
              </h1>

              <div className="mt-5 flex justify-center gap-3 text-3xl">
                🎂 🌸 🎉 🦋
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, delay: 0.4 }}
              className="photo-frame floating relative mt-10 h-[330px] w-[280px] sm:h-[400px] sm:w-[330px]"
            >
              <Image
                src="/images/subi/subi-main.jpg"
                alt="Subi birthday photo"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 280px, 330px"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="magic-card mt-10 max-w-2xl rounded-3xl p-7 sm:p-10"
            >
              <h2 className="text-2xl font-bold text-pink-200">
                A beautiful day for a beautiful soul ✨
              </h2>

              <p className="mt-5 leading-8 text-pink-300">
                Happy birthday to the girl who is stronger than she knows,
                braver than she thinks, and more special than she will
                ever understand. I hope this new chapter brings you endless
                happiness, peaceful days, unexpected blessings, and all the
                beautiful things your heart has been waiting for.
              </p>

              <p className="mt-5 font-semibold text-pink-500">
                Today, forget every worry. You deserve to smile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-10"
            >
              <Link href="/memories" className="btn-primary btn-pink text-lg">
                Let's Open Our Memories <ArrowRight size={20} />
              </Link>
            </motion.div>

            <Sparkles className="mt-10 animate-pulse text-pink-300" />
          </section>
        </main>
      )}
    </AccessGuard>
  );
}