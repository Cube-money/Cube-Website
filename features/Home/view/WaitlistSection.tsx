import WaitlistForm from "@/components/WaitlistForm";

export default function WaitlistSection() {
  return (
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
  );
}
