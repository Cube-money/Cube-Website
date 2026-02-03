"use client";

import Header from "@/utils/Header";
import Footer from "@/utils/Footer";
import SignupMain from "@/pages/Signup/view/SignupMain";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <SignupMain />
      <Footer />
    </main>
  );
}
