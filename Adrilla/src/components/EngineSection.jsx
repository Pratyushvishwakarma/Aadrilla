// EngineSection Component
const EngineSection = () => {
  return (
    <section className="px-16 py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center gap-20" id="products">
      <div data-scroll className="flex-1 opacity-0 -translate-x-12 transition-all duration-700">
        <h2 className="text-5xl font-bold mb-8">Engine</h2>
        <h3 className="text-2xl mb-5">Features:</h3>
        <ul className="list-none mb-10 space-y-4">
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400 before:text-2xl">
            Detects near-duplicates and tampered documents.
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400 before:text-2xl">
            Identifies fraudulent patterns across large repositories.
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400 before:text-2xl">
            Multi-language support for global adaptability.
          </li>
        </ul>
        <h3 className="text-2xl mb-5">Benefits:</h3>
        <ul className="list-none mb-10 space-y-4">
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400 before:text-2xl">
            Save 30% time on manual checks.
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-indigo-400 before:text-2xl">
            Reduce document fraud by up to 40%.
          </li>
        </ul>
        <div className="flex gap-5">
          <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Learn More
          </a>
          <a href="#" className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
            Schedule a Demo
          </a>
        </div>
      </div>
      <div data-scroll className="flex-1 opacity-0 translate-x-12 transition-all duration-700">
        <div className="relative w-full h-96 bg-gradient-to-br from-blue-800 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
          {[20, 40, 60].map((top, i) => (
            <div
              key={i}
              className="absolute w-4/5 h-16 bg-blue-500/30 backdrop-blur-md border border-white/20 rounded-xl left-[10%]"
              style={{ 
                top: `${top}%`, 
                animation: `float 3s ease-in-out infinite ${i * 0.5}s` 
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineSection