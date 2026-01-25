"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Learn from "@/pages/Learn/view/Learn";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Learn />
      <Footer />
    </main>
  );
}
