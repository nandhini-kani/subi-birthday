import type { Metadata } from "next";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";

export const metadata: Metadata = {
  title: "A Special Day for Subi 💚",
  description: "A birthday surprise made with love for Subi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}