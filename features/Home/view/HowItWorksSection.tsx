export default function HowItWorksSection() {
  return (
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
  );
}
