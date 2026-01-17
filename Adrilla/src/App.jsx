// Main App Component
import { useState } from "react";
import { useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import EngineSection from "./components/EngineSection";
import BlogsSection from "./components/BlogsSection";
import ContactSection from "./components/Contactsection";
import CardCarousel from "./components/CardCarousal";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [cardPositions, setCardPositions] = useState([0, 1, 2]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setShowHeader(true);
      setShowHero(true);
    }, 2000);

    const cardInterval = setInterval(() => {
      setCardPositions(prev => prev.map(pos => (pos + 1) % 3));
    }, 3000);

    return () => clearInterval(cardInterval);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-scroll]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />
      <Header showHeader={showHeader} />
      <HeroSection showHero={showHero} cardPositions={cardPositions} />
      <IndustriesSection />
      <EngineSection />
      <BlogsSection />
      <ContactSection />
      

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        [data-scroll].visible {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
      `}</style>
    </div>
  );
};

export default App;
