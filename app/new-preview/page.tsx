"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import NewPreviewMain from "@/pages/NewPreview/view/NewPreviewMain";

export default function NewPreviewPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <NewPreviewMain />
      <Footer />
    </main>
  );
}
