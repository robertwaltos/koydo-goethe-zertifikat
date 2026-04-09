import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koydo Goethe-Zertifikat — Goethe-Zertifikat German Language Certificate Prep",
  description:
    "Free Goethe-Zertifikat practice for Lesen, Hören, Schreiben, and Sprechen with AI analytics.",
  metadataBase: new URL("https://goethe-zertifikat.koydo.app"),
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#059669" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
