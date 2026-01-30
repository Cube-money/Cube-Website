"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Security from "@/pages/Security/view/Security";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Security />
      <Footer />
    </main>
  );
}
