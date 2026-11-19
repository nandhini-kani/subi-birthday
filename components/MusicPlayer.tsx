
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

    const startMusic = async () => {
      try {
        await audio.play();
        sessionStorage.setItem("birthday-music-playing", "true");
      } catch (error) {
        console.log("Music playback was blocked:", error);
        setPlaying(false);
      }
    };

    const handleMusicStart = () => {
      startMusic();
    };

    window.addEventListener("birthday-music-start", handleMusicStart);

    // Play automatically if login was already completed
    if (
      sessionStorage.getItem("subi-birthday-unlocked") === "true" &&
      sessionStorage.getItem("birthday-music-playing") !== "false"
    ) {
      startMusic();
    }

    return () => {
      window.removeEventListener("birthday-music-start", handleMusicStart);
    };
  }, []);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        sessionStorage.setItem("birthday-music-playing", "true");
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      sessionStorage.setItem("birthday-music-playing", "false");
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
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