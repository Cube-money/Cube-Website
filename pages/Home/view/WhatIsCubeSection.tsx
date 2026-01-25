export default function WhatIsCubeSection() {
  return (
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
  );
}
