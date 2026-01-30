"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Contact from "@/pages/Contact/view/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}
