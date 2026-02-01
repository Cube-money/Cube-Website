"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import TrustMain from "@/pages/Trust/view/TrustMain";

export default function TrustPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <TrustMain />
      <Footer />
    </main>
  );
}
