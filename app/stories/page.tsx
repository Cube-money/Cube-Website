"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Stories from "@/pages/Stories/view/Stories";

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Stories />
      <Footer />
    </main>
  );
}
