
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Trophy,
} from "lucide-react";

import AccessGuard from "@/components/AccessGuard";
import Navigation from "@/components/Navigation";
import FlowerRain from "@/components/FlowerRain";
import celebrate from "@/components/Confetti";

export default function DreamsPage() {
  return (
    <AccessGuard>
      <main className="page-shell bg-magic min-h-screen pb-24">
        <Navigation />
        <FlowerRain />

        <section className="relative z-10 mx-auto max-w-5xl px-5 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-5xl">🏦✨</span>

            <p className="mt-5 font-bold tracking-[4px] text-pink-500">
              HER DREAM IS BIG
            </p>

            <h1 className="mt-3 text-4xl font-black text-pink-200 sm:text-6xl">
              And I Believe in Her
            </h1>

            <p className="mt-5 text-pink-300">
              The dream that lives inside your heart deserves to become real.
            </p>
          </motion.div>

          <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="photo-frame relative mx-auto h-[400px] w-full max-w-[350px]"
            >
              <Image
                src="/images/subi/subi-dream.jpg"
                alt="Subi chasing her dreams"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="magic-card rounded-3xl p-7 sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl pink-gradient">
                <Trophy size={28} className="text-pink-200" />
              </div>

              <h2 className="mt-5 text-3xl font-black text-pink-200">
                Future Bank Officer 💗
              </h2>

              <p className="mt-5 leading-8 text-pink-300">
                I know you dream of becoming a government bank employee.
                I know that dream means a lot to you. And I know the
                path may not always be easy.
              </p>

              <p className="mt-4 leading-8 text-pink-300">
                There may be difficult days, tired days, moments when
                you feel like giving up, and times when you question
                yourself. But don't let those moments decide your future.
              </p>

              <p className="mt-4 font-bold leading-8 text-pink-600">
                The world may not always make things easy for you, but
                never forget how capable you are of fighting for the life
                you want.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pink-gradient glow mt-12 rounded-[32px] p-8 text-center text-pink-100 sm:p-12"
          >
            <div className="flex justify-center gap-3">
              <Star className="text-pink-300" fill="#e9a8c4" />
              <Star className="text-pink-300" fill="#e9a8c4" />
              <Star className="text-pink-300" fill="#e9a8c4" />
            </div>

            <h2 className="gold-text mt-5 text-3xl font-black sm:text-5xl">
              Your Dream Is Worth It
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-pink-100">
              In a world full of people who might doubt you, I want to be
              someone who reminds you to believe in yourself. Your dream
              matters. Your efforts matter. And I will always be cheering
              for the day you finally say, "I did it!"
            </p>

            <p className="mt-6 text-xl font-bold text-pink-200">
              Keep studying. Keep trying. Keep believing. 💗
            </p>

            <button
              onClick={celebrate}
              className="btn-primary btn-pink mt-8"
            >
              Celebrate Her Dream ✨
            </button>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/memories" className="btn-primary btn-pink">
              <ArrowLeft size={18} /> Memories
            </Link>

            <Link href="/surprise" className="btn-primary">
              One Last Surprise <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </AccessGuard>
  );
}