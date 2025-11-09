interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

export default function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 border border-gray-800 hover:border-amber-500/30 group">
      <div className="w-14 h-14 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl">
        <span className="text-2xl font-bold text-black">{number}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}


