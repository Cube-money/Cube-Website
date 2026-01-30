"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Press from "@/pages/Press/view/Press";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Press />
      <Footer />
    </main>
  );
}
