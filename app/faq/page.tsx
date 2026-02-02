"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import FAQMain from "@/pages/FAQ/view/FAQMain";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <FAQMain />
      <Footer />
    </main>
  );
}
