"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Support from "@/pages/Support/view/Support";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Support />
      <Footer />
    </main>
  );
}
