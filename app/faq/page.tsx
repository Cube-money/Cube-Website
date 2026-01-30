"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import FAQ from "@/pages/FAQ/view/FAQ";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <FAQ />
      <Footer />
    </main>
  );
}
