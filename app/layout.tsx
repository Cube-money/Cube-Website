import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cube - Smart Rotational Savings & Checking",
  description: "Join the future of community finance. Save together, prosper together with Cube's rotational savings accounts.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  );
}


