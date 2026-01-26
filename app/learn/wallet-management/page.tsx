"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import Link from "next/link";

export default function WalletManagementPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-display font-bold text-white mb-8">
            What is wallet management?
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Content for this article coming soon...
          </p>
          <Link 
            href="/learn"
            className="text-gray-400 hover:text-white underline"
          >
            ← Back to Library
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
