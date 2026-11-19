
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const access = sessionStorage.getItem("subi-birthday-unlocked");

    if (access !== "true") {
      router.replace("/");
      return;
    }

    setAllowed(true);

    // Start birthday music after access is confirmed
    window.dispatchEvent(new Event("birthday-music-start"));
  }, [router]);

  if (!allowed) {
    return (
      <div className="bg-magic flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="floating text-5xl">🌸</div>

          <p className="mt-5 font-bold text-pink-300">
            Preparing your little surprise...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}