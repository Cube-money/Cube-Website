"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import StoriesMain from "@/pages/Stories/view/StoriesMain";

export default function StoriesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <Header />
      <StoriesMain />
      <Footer />
    </main>
  );
}
