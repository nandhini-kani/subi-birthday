
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";

const links = [
  { href: "/birthday", label: "Birthday" },
  { href: "/memories", label: "Memories" },
  { href: "/dreams", label: "Dreams" },
  { href: "/surprise", label: "Surprise" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-1/2 top-3 z-50 w-[96%] -translate-x-1/2 sm:top-4 sm:w-[94%] sm:max-w-4xl">
      <div className="rounded-full border border-pink-300/20 bg-white/10 px-2 py-2 shadow-lg backdrop-blur-xl sm:px-4 sm:py-3">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          
          {/* Logo */}
          <Link
            href="/birthday"
            className="flex shrink-0 items-center gap-1.5 font-extrabold text-pink-200 sm:gap-2"
          >
            <Heart
              size={16}
              fill="#ffb7d5"
              className="text-pink-400 sm:h-[18px] sm:w-[18px]"
            />
            <span className="hidden sm:inline text-sm">For Subi</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-0.5 sm:gap-2 md:gap-3">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-2 py-2 text-[10px] font-bold transition-all duration-300 sm:px-3 sm:text-xs md:text-sm ${
                    active
                      ? "pink-gradient text-pink-100 shadow-md"
                      : "text-pink-300 hover:bg-pink-100/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
}
