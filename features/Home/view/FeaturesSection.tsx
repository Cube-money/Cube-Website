import FeatureCard from "@/components/FeatureCard";

export default function FeaturesSection() {
  return (
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
            number="01"
            title="Secure & Transparent"
            description="Bank-level security with complete transparency. Track every contribution and payout in real-time."
          />
          <FeatureCard
            number="02"
            title="Trusted Community"
            description="Build savings circles with people you trust. Set your own rules, amounts, and schedules."
          />
          <FeatureCard
            number="03"
            title="Easy to Use"
            description="Simple mobile app to manage contributions, track cycles, and receive notifications."
          />
          <FeatureCard
            number="04"
            title="Flexible Amounts"
            description="Choose contribution amounts that work for your group, from $50 to $5,000 per cycle."
          />
          <FeatureCard
            number="05"
            title="Instant Payouts"
            description="When it's your turn, receive your lump sum instantly - no delays, no hassle."
          />
          <FeatureCard
            number="06"
            title="Smart Insights"
            description="Track your savings progress, view history, and plan for future cycles with detailed analytics."
          />
        </div>
      </div>
    </section>
  );
}
