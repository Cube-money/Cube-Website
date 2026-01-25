"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Explore from "@/pages/Explore/view/Explore";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Explore />
      <Footer />
    </main>
  );
}
