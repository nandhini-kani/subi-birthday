"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroPortrait() {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <div className="hero-art">
      <div className="hero-sparkle sparkle-one" aria-hidden="true">✳</div>
      <div className="hero-sparkle sparkle-two" aria-hidden="true">✦</div>
      <div className="portrait-frame">
        {!imageUnavailable ? (
          <Image
            src="/images/subi/subi-main.jpg"
            alt="A favorite photo of Subi"
            fill
            sizes="(max-width: 580px) 235px, 300px"
            className="portrait-photo"
            priority
            onError={() => setImageUnavailable(true)}
          />
        ) : (
          <div className="portrait-placeholder">
            <span className="portrait-sun" />
            <span className="portrait-initial">S</span>
            <span className="portrait-caption">your favorite photo goes here</span>
          </div>
        )}
        <span className="portrait-sticker">the birthday girl <span>♡</span></span>
      </div>
      <div className="hero-date"><span>today is all about</span><strong>YOU</strong></div>
      <span className="hero-flower" aria-hidden="true">✿</span>
    </div>
  );
}
