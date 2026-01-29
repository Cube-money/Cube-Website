"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import HowItWorksMain from "@/pages/HowItWorks/view/HowItWorksMain";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HowItWorksMain />
      <Footer />
    </main>
  );
}
