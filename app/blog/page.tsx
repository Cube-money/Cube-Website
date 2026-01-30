"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Blog from "@/pages/Blog/view/Blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Blog />
      <Footer />
    </main>
  );
}
