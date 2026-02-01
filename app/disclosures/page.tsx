"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Disclosures from "@/pages/Disclosures/view/Disclosures";

export default function DisclosuresPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Disclosures />
      <Footer />
    </main>
  );
}
