"use client";

import { useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Cube
              </span>
            </div>
            <a
              href="#waitlist"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-800 font-medium text-sm">
              Coming Soon - Join the Waitlist
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance">
            Save Together,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Prosper Together
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance">
            Cube revolutionizes community savings with rotational accounts where members contribute together and receive lump sum payouts in turns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#waitlist"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg"
            >
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-white text-gray-800 rounded-full hover:shadow-lg transition-all duration-300 font-semibold text-lg border-2 border-gray-200"
            >
              Learn More
            </a>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-200">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((cycle) => (
                  <div key={cycle} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <div className="text-sm font-semibold text-gray-500 mb-2">Cycle {cycle}</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">💰</div>
                    <div className="text-xs text-gray-600">Member Receives</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cube Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What is Cube?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A modern take on traditional community savings, powered by technology and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                The Power of Rotational Savings
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Cube brings together trusted groups of people who pool their money together. Each cycle, one member receives the entire pot, allowing them to make big purchases, investments, or cover important expenses.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                It's like having a group of friends who save together and take turns accessing the collective funds - but with the security, transparency, and convenience of modern banking technology.
              </p>
              <div className="flex items-start space-x-3 bg-blue-50 p-4 rounded-xl">
                <span className="text-2xl">💡</span>
                <p className="text-gray-700">
                  <strong>Traditional name:</strong> Also known as ROSCA (Rotating Savings and Credit Association) or "Susu" in various cultures.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Month 1</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">5 members × $200 = $1,000</div>
                  <div className="text-xl font-bold text-blue-600">→ Member A receives $1,000</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg opacity-70">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Month 2</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      Next
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">5 members × $200 = $1,000</div>
                  <div className="text-xl font-bold text-blue-600">→ Member B receives $1,000</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg opacity-40">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Month 3</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      Upcoming
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">5 members × $200 = $1,000</div>
                  <div className="text-xl font-bold text-blue-600">→ Member C receives $1,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Cube?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Be among the first to experience the future of community savings. Early members get exclusive benefits and priority access.
          </p>
          
          <WaitlistForm />

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100 text-sm">People Waiting</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$0</div>
              <div className="text-blue-100 text-sm">Fees to Join</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100 text-sm">Support Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
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


