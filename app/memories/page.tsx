
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import AccessGuard from "@/components/AccessGuard";
import Navigation from "@/components/Navigation";
import FlowerRain from "@/components/FlowerRain";
import MemoryCard from "@/components/MemoryCard";

const memories = [
  {
    image: "/images/subi/memories/memory-1.jpg",
  },
  {
    image: "/images/subi/memories/memory-2.jpg",
  },
  {
    image: "/images/subi/memories/memory-3.jpg",
  },
  {
    image: "/images/subi/memories/memory-4.jpg",
  },
  {
    image: "/images/subi/memories/memory-5.jpg",
  },
];

export default function MemoriesPage() {
  return (
    <AccessGuard>
      <main className="page-shell bg-magic min-h-screen overflow-x-hidden pb-20 sm:pb-24">
        <Navigation />
        <FlowerRain />

        <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          {/* PAGE HEADING */}
          <motion.header
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center sm:mb-14"
          >
            <span className="text-4xl sm:text-5xl">📸💌</span>

            <p className="mt-4 text-xs font-bold tracking-[2px] text-pink-500 sm:mt-5 sm:text-sm sm:tracking-[4px]">
              LITTLE MOMENTS, BIG FEELINGS
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight text-pink-200 sm:text-5xl md:text-6xl">
              Our Little Memories
            </h1>

            <p className="mx-auto mt-4 max-w-xl px-2 text-sm leading-6 text-pink-300 sm:mt-5 sm:text-base sm:leading-7">
              Some memories are kept in pictures. Some stay in our hearts.
            </p>
          </motion.header>

          {/* IMAGES ONLY */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.image}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-3xl"
              >
                <img
                  src={memory.image}
                  alt={`Memory ${index + 1}`}
                  className="h-80 w-full rounded-3xl object-cover transition-transform duration-500 hover:scale-105 sm:h-96"
                />
              </motion.div>
            ))}
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/birthday"
              className="btn-primary btn-pink inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Birthday Page
            </Link>

            <Link
              href="/dreams"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Her Dreams
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </AccessGuard>
  );
}