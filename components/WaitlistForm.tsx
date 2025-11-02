"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, you'd send this to your backend/API
    console.log("Waitlist signup:", { name, email });

    setIsSubmitted(true);
    setIsLoading(false);
    setName("");
    setEmail("");

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 text-center border border-black/40">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-black mb-2">You're on the list!</h3>
        <p className="text-black/70">
          We'll notify you as soon as Cube launches. Get ready to revolutionize your savings!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-gray-800">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-xl focus:border-amber-500 focus:outline-none transition-colors text-white placeholder-gray-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-xl focus:border-amber-500 focus:outline-none transition-colors text-white placeholder-gray-500"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:shadow-xl hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Joining...
            </span>
          ) : (
            "Join the Waitlist"
          )}
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          By joining, you agree to receive updates about Cube. Unsubscribe anytime.
        </p>
      </div>
    </form>
  );
}


