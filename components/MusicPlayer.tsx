
"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    // Start music
    const startMusic = async () => {
      try {
        await audio.play();
        sessionStorage.setItem("birthday-music-playing", "true");
      } catch (error) {
        console.log("Browser blocked autoplay:", error);
        setPlaying(false);
      }
    };

    // Called after successful login
    const handleMusicStart = () => {
      startMusic();
    };

    window.addEventListener("birthday-music-start", handleMusicStart);

    // Resume if already unlocked after login
    const unlocked =
      sessionStorage.getItem("subi-birthday-unlocked") === "true";

    const musicEnabled =
      sessionStorage.getItem("birthday-music-playing") !== "false";

    if (unlocked && musicEnabled) {
      startMusic();
    }

    return () => {
      window.removeEventListener("birthday-music-start", handleMusicStart);
    };
  }, []);

  // Play / Pause button
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        sessionStorage.setItem("birthday-music-playing", "true");
      } catch (error) {
        console.log("Unable to play music:", error);
        setPlaying(false);
      }
    } else {
      audio.pause();
      sessionStorage.setItem("birthday-music-playing", "false");
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-[9999] flex items-center gap-2 rounded-full pink-gradient px-4 py-3 text-pink-100 shadow-xl transition hover:scale-105"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Pause size={18} /> : <Play size={18} />}
        <Music size={18} />
      </button>
    </>
  );
}