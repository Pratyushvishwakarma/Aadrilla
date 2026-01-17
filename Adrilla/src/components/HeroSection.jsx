// HeroSection Component
import CardCarousel from "./CardCarousal";
const HeroSection = ({ showHero, cardPositions }) => {
  return (
    <section className="flex items-center justify-between px-16 pt-40 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen overflow-hidden" id="home">
      <div className={`flex-1 max-w-2xl transition-all duration-1000 delay-[2.5s] ${showHero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}>
        <div className="text-orange-600 text-xl font-semibold mb-4">AI-Powered</div>
        <h1 className="text-5xl font-bold leading-tight mb-5">Document Automation & Fraud Detection</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
        </p>
      </div>

      <div className={`flex-1 relative h-[600px] flex items-center justify-center transition-all duration-1000 delay-[2.5s] ${showHero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}`} style={{ perspective: '1000px' }}>
        <CardCarousel cardPositions={cardPositions} />
      </div>
    </section>
  );
};

export default HeroSection