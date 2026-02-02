"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import CareersMain from "@/pages/Careers/view/CareersMain";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <CareersMain />
      <Footer />
    </main>
  );
}
