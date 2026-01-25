"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import HowItWorks from "@/pages/HowItWorks/view/HowItWorks";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HowItWorks />
      <Footer />
    </main>
  );
}
