export default function HeroSection() {
  return (
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
  );
}
