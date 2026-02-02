"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import AboutMain from "@/pages/About/view/AboutMain";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <AboutMain />
      <Footer />
    </main>
  );
}
