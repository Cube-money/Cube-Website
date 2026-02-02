"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import PressMain from "@/pages/Press/view/PressMain";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <PressMain />
      <Footer />
    </main>
  );
}
