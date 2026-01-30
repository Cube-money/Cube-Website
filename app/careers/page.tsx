"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Careers from "@/pages/Careers/view/Careers";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Careers />
      <Footer />
    </main>
  );
}
