// IndustryCard Component
const IndustryCard = ({ icon, title, description }) => {
  return (
    <div data-scroll className="bg-white border-2 border-gray-200 rounded-2xl p-10 text-center transition-all duration-500 hover:border-indigo-600 hover:shadow-xl hover:-translate-y-2 opacity-0 translate-y-12">
      <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-4xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
export default IndustryCard