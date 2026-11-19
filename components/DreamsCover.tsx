"use client";

import Image from "next/image";
import { useState } from "react";

export default function DreamsCover() {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <div className="dreams-note">
      {!imageUnavailable ? (
        <Image
          src="/images/subi/subi-dream.jpg"
          alt="A photo to dream about the year ahead"
          fill
          sizes="(max-width: 580px) 100vw, 35vw"
          className="dreams-photo"
          onError={() => setImageUnavailable(true)}
        />
      ) : (
        <span className="dreams-sun" aria-hidden="true">☼</span>
      )}
      <p className="handwritten">For your next trip around the sun...</p>
      <span className="dreams-flower" aria-hidden="true">✿</span>
    </div>
  );
}
