"use client";

import { useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* 3D Isometric Cube Logo */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" fill="url(#cube-gradient)" />
                <path d="M16 2V16L29 9.5L16 2Z" fill="url(#cube-light)" opacity="0.8" />
                <path d="M16 16L3 9.5V22.5L16 30V16Z" fill="url(#cube-dark)" opacity="0.6" />
                <defs>
                  <linearGradient id="cube-gradient" x1="3" y1="9.5" x2="29" y2="22.5">
                    <stop stopColor="#9ca3af" />
                    <stop offset="1" stopColor="#6b7280" />
                  </linearGradient>
                  <linearGradient id="cube-light" x1="16" y1="2" x2="29" y2="9.5">
                    <stop stopColor="#d1d5db" />
                    <stop offset="1" stopColor="#9ca3af" />
                  </linearGradient>
                  <linearGradient id="cube-dark" x1="3" y1="9.5" x2="16" y2="30">
                    <stop stopColor="#6b7280" />
                    <stop offset="1" stopColor="#4b5563" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-bold text-white">
                Cube
              </span>
            </div>
            <a
              href="#waitlist"
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 font-medium"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        {/* Hero Background Image */}
        <div className="absolute -top-20 right-0 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
          <img 
            src="/hero-golden-cube.png" 
            alt="Golden Cube" 
            className="w-full h-full object-contain object-right"
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gray-900 border border-gray-800 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-gray-300 font-medium text-sm">
              Coming Soon - Join the Waitlist
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-6 text-balance leading-tight">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Money is Human
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Cube revolutionizes community savings with rotational accounts where members contribute together and receive lump sum payouts in turns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#waitlist"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black rounded-full hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 font-semibold text-lg"
            >
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-gray-900 text-white rounded-full hover:shadow-lg transition-all duration-300 font-semibold text-lg border-2 border-gray-800 hover:border-amber-500/50"
            >
              Learn More
            </a>
          </div>

          {/* Hero Visual - Rotational Savings Illustration */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gray-900 rounded-3xl shadow-2xl p-8 sm:p-10 max-w-5xl mx-auto border border-gray-800">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">How It Works: 5 Friends, $200 Each</h3>
                <p className="text-gray-400 text-sm">Everyone contributes $200 monthly. Each cycle, one member receives $1,000.</p>
              </div>

              {/* Visual Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Cycle 1 */}
                <div className="bg-gradient-to-br from-amber-500/10 to-yellow-600/10 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 relative">
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                    MONTH 1
                  </div>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">5 members contribute</span>
                      <span className="text-amber-400 font-semibold">$200 each</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3">
                      <div className="text-xs text-gray-400 mb-1">Pot Total</div>
                      <div className="text-3xl font-bold text-amber-500">$1,000</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 border border-gray-700">
                      <div className="text-xs text-gray-400 mb-1">Recipient</div>
                      <div className="text-white font-semibold">👤 Member A</div>
                      <div className="text-amber-400 text-sm mt-1">Receives $1,000 ✓</div>
                    </div>
                  </div>
                </div>

                {/* Cycle 2 */}
                <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 relative opacity-90">
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-gray-700 text-gray-300 text-xs font-bold rounded-full">
                    MONTH 2
                  </div>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">5 members contribute</span>
                      <span className="text-gray-300 font-semibold">$200 each</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3">
                      <div className="text-xs text-gray-500 mb-1">Pot Total</div>
                      <div className="text-3xl font-bold text-gray-300">$1,000</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 border border-gray-700">
                      <div className="text-xs text-gray-500 mb-1">Recipient</div>
                      <div className="text-gray-300 font-semibold">👤 Member B</div>
                      <div className="text-gray-400 text-sm mt-1">Receives $1,000</div>
                    </div>
                  </div>
                </div>

                {/* Cycle 3 */}
                <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 relative opacity-70">
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-gray-800 text-gray-400 text-xs font-bold rounded-full">
                    MONTH 3
                  </div>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">5 members contribute</span>
                      <span className="text-gray-400 font-semibold">$200 each</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3">
                      <div className="text-xs text-gray-600 mb-1">Pot Total</div>
                      <div className="text-3xl font-bold text-gray-400">$1,000</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 border border-gray-700">
                      <div className="text-xs text-gray-600 mb-1">Recipient</div>
                      <div className="text-gray-400 font-semibold">👤 Member C</div>
                      <div className="text-gray-500 text-sm mt-1">Receives $1,000</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom explanation */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  Continues until all 5 members have received their turn 🔄
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cube Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              What is Cube?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A modern take on traditional community savings, powered by technology and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                The Power of Rotational Savings
              </h3>
              <p className="text-lg text-gray-400 mb-4">
                Cube brings together trusted groups of people who pool their money together. Each cycle, one member receives the entire pot, allowing them to make big purchases, investments, or cover important expenses.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                It's like having a group of friends who save together and take turns accessing the collective funds - but with the security, transparency, and convenience of modern banking technology.
              </p>
              <div className="flex items-start space-x-3 bg-gray-900 border border-gray-800 p-4 rounded-xl">
                <span className="text-2xl">💡</span>
                <p className="text-gray-300">
                  <strong className="text-amber-500">Traditional name:</strong> Also known as ROSCA (Rotating Savings and Credit Association) or "Susu" in various cultures.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <div className="space-y-4">
                <div className="bg-gray-950 rounded-2xl p-6 border border-gray-800 shadow-lg shadow-amber-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-white">Month 1</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30">
                      Active
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">5 members × $200 = $1,000</div>
                  <div className="text-xl font-bold text-amber-500">→ Member A receives $1,000</div>
                </div>

                <div className="bg-gray-950 rounded-2xl p-6 border border-gray-800 shadow-lg opacity-70">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-white">Month 2</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm font-medium border border-gray-700">
                      Next
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">5 members × $200 = $1,000</div>
                  <div className="text-xl font-bold text-amber-500">→ Member B receives $1,000</div>
                </div>

                <div className="bg-gray-950 rounded-2xl p-6 border border-gray-800 shadow-lg opacity-40">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-white">Month 3</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-500 rounded-full text-sm font-medium border border-gray-700">
                      Upcoming
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">5 members × $200 = $1,000</div>
                  <div className="text-xl font-bold text-amber-500">→ Member C receives $1,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Why Choose Cube?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Traditional community savings meets modern banking technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🔒"
              title="Secure & Transparent"
              description="Bank-level security with complete transparency. Track every contribution and payout in real-time."
            />
            <FeatureCard
              icon="🤝"
              title="Trusted Community"
              description="Build savings circles with people you trust. Set your own rules, amounts, and schedules."
            />
            <FeatureCard
              icon="📱"
              title="Easy to Use"
              description="Simple mobile app to manage contributions, track cycles, and receive notifications."
            />
            <FeatureCard
              icon="💰"
              title="Flexible Amounts"
              description="Choose contribution amounts that work for your group, from $50 to $5,000 per cycle."
            />
            <FeatureCard
              icon="⚡"
              title="Instant Payouts"
              description="When it's your turn, receive your lump sum instantly - no delays, no hassle."
            />
            <FeatureCard
              icon="📊"
              title="Smart Insights"
              description="Track your savings progress, view history, and plan for future cycles with detailed analytics."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Getting started with Cube is simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Create or Join",
                description: "Start a new savings circle or join one created by someone you trust."
              },
              {
                step: "2",
                title: "Set Terms",
                description: "Agree on contribution amount, frequency, and rotation order with your group."
              },
              {
                step: "3",
                title: "Contribute",
                description: "Make automatic contributions each cycle. Never miss a payment with reminders."
              },
              {
                step: "4",
                title: "Receive",
                description: "When it's your turn, receive the full lump sum instantly to your account."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
                  <span className="text-black text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.3),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-black mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto">
            Be among the first to experience the future of community savings. Early members get exclusive benefits and priority access.
          </p>
          
          <WaitlistForm />

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-black mb-2">1000+</div>
              <div className="text-black/70 text-sm">People Waiting</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">$0</div>
              <div className="text-black/70 text-sm">Fees to Join</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">24/7</div>
              <div className="text-black/70 text-sm">Support Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              {/* 3D Isometric Cube Logo */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" fill="url(#footer-cube-gradient)" />
                <path d="M16 2V16L29 9.5L16 2Z" fill="url(#footer-cube-light)" opacity="0.8" />
                <path d="M16 16L3 9.5V22.5L16 30V16Z" fill="url(#footer-cube-dark)" opacity="0.6" />
                <defs>
                  <linearGradient id="footer-cube-gradient" x1="3" y1="9.5" x2="29" y2="22.5">
                    <stop stopColor="#9ca3af" />
                    <stop offset="1" stopColor="#6b7280" />
                  </linearGradient>
                  <linearGradient id="footer-cube-light" x1="16" y1="2" x2="29" y2="9.5">
                    <stop stopColor="#d1d5db" />
                    <stop offset="1" stopColor="#9ca3af" />
                  </linearGradient>
                  <linearGradient id="footer-cube-dark" x1="3" y1="9.5" x2="16" y2="30">
                    <stop stopColor="#6b7280" />
                    <stop offset="1" stopColor="#4b5563" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-bold">Cube</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; 2025 Cube. All rights reserved.</p>
              <p className="mt-2">Revolutionizing community savings, one circle at a time.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}


