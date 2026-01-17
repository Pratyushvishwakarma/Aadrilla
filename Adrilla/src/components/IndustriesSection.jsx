// IndustriesSection Component
import IndustryCard from "./IndutryCard";
const IndustriesSection = () => {
  const industries = [
    { icon: '🏥', title: 'Healthcare', description: 'Streamline patient record management and ensure compliance with HIPAA standards.' },
    { icon: '💰', title: 'Lending', description: 'Ensure faster loan approvals with fraud detection and instant verification.' },
    { icon: '🛡️', title: 'Insurance', description: 'Automate claims processing and reduce fraudulent submissions significantly.' }
  ];

  return (
    <section className="px-16 py-24 bg-white" id="industries">
      <div className="text-orange-600 text-lg font-semibold mb-3">AI-driven innovation for growth.</div>
      <h2 className="text-5xl font-bold mb-16">Industries We Empower</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {industries.map((item, i) => (
          <IndustryCard key={i} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection