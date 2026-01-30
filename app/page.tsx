"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Home from "@/pages/Home/view/Home";

export default function HomePage() {
  return (
    <main className="min-h-screen-dvh bg-black">
      <Header />
      <Home />
      <Footer />
    </main>
  );
}
