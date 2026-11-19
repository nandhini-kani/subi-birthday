
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Lock, Sparkles, Gift } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const BIRTHDAY_DATE = "2004-11-20";

  function enterWebsite() {
    if (name.trim().toLowerCase() !== "subihksha") {
      setError("Hmm... this little surprise is only for Subi 💚");
      return;
    }

    if (date !== BIRTHDAY_DATE) {
      setError("Wrong birthday date! Try again, birthday girl 🌸");
      return;
    }

    sessionStorage.setItem("subi-birthday-unlocked", "true");
    router.push("/birthday");
  }

  return (
    <main className="page-shell bg-magic relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      {/* TWINKLE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="twinkle absolute text-xs text-pink-300 sm:text-base"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 61) % 100}%`,
              animationDelay: `${(i % 5) * 0.4}s`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="magic-card relative z-10 my-auto w-full max-w-md rounded-[24px] p-5 sm:rounded-[32px sm:p-8 md:p-10"
      >
        {/* GIFT ICON */}
        <div className="mb-5 flex justify-center sm:mb-7">
          <div className="floating glow pink-gradient relative flex h-16 w-16 items-center justify-center rounded-full sm:h-24 sm:w-24">
            <Gift size={30} className="text-pink-200 sm:h-[42px] sm:w-[42px]" />
            <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-pink-300 sm:-right-2 sm:-top-1 sm:h-5 sm:w-5" />
          </div>
        </div>

        {/* HEADING */}
        <div className="text-center">
          <p className="mb-2 text-[10px] font-semibold tracking-[3px] text-pink-500 sm:mb-3 sm:text-xs sm:tracking-[4px]">
            A LITTLE SECRET
          </p>

          <h1 className="text-3xl font-black text-pink-200 sm:text-5xl">
            Hey, Subi!
          </h1>

          <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-pink-300 sm:text-base sm:leading-normal">
            Someone made something special just for you.
          </p>

          <p className="mt-2 text-xl sm:text-2xl">💗🌸✨</p>
        </div>

        {/* INPUTS */}
        <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
          {/* NAME */}
          <div>
            <label className="mb-2 block text-xs font-bold text-pink-200 sm:text-sm">
              Your beautiful name
            </label>

            <div className="relative">
              <Heart
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-pink-400 sm:left-4 sm:h-[18px] sm:w-[18px]"
              />

              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                placeholder="Enter your name..."
                className="w-full rounded-xl border border-pink-200/30 bg-white/10 px-3 py-3 pl-10 text-sm text-pink-100 outline-none transition placeholder:text-pink-200/50 focus:border-pink-300 focus:ring-2 focus:ring-pink-300/20 sm:rounded-2xl sm:px-4 sm:py-4 sm:pl-12 sm:text-base"
              />
            </div>
          </div>

          {/* BIRTHDAY */}
          <div>
            <label className="mb-2 block text-xs font-bold text-pink-200 sm:text-sm">
              Your birthday
            </label>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-400 sm:left-4 sm:h-[18px] sm:w-[18px]"
              />

              <input
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setError("");
                }}
                className="w-full rounded-xl border border-pink-200/30 bg-white/10 px-3 py-3 pl-10 text-sm text-pink-100 outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-300/20 sm:rounded-2xl sm:px-4 sm:py-4 sm:pl-12 sm:text-base"
              />
            </div>
          </div>

          {/* ERROR */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl bg-pink-50 p-3 text-center text-xs font-medium text-pink-600 sm:text-sm"
            >
              {error}
            </motion.p>
          )}

          {/* BUTTON */}
          <button
            onClick={enterWebsite}
            className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm sm:rounded-2xl sm:py-4 sm:text-lg"
          >
            Open Your Surprise
            <Sparkles size={16} className="sm:h-[18px] sm:w-[18px]" />
          </button>
        </div>

        {/* FOOTER */}
        <p className="mt-5 text-center text-[10px] text-pink-300 sm:mt-7 sm:text-xs">
          Made with lots of love, just for you ♡
        </p>
      </motion.div>
    </main>
  );
}
