"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import PreviewMain from "@/pages/Preview/view/PreviewMain";

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <PreviewMain />
      <Footer />
    </main>
  );
}
