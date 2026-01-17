// Card Component
const DocumentCard = ({ card, position }) => {
  let transformClass = '';
  let zIndex = 5;
  let opacity = 0.6;

  if (position === 0) {
    transformClass = 'scale-100';
    zIndex = 10;
    opacity = 1;
  } else if (position === 1) {
    transformClass = 'translate-x-56 scale-75';
  } else {
    transformClass = '-translate-x-56 scale-75';
  }

  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-white rounded-2xl shadow-2xl p-5 transition-all duration-700 ${transformClass}`}
      style={{ zIndex, opacity }}
    >
      <div className="bg-gray-900 text-white px-3 py-3 rounded-t-lg text-center font-semibold -mx-5 -mt-5 mb-5">
        {card.header}
      </div>
      {card.content}
    </div>
  );
};

export default DocumentCard