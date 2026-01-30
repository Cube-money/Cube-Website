"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Community from "@/pages/Community/view/Community";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Community />
      <Footer />
    </main>
  );
}
