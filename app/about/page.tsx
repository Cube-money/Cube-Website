"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import About from "@/pages/About/view/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
