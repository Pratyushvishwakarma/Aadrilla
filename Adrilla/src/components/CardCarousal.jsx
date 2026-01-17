// CardCarousel Component
import DocumentCard from "./DocumentCard";
const CardCarousel = ({ cardPositions }) => {
  const cards = [
    {
      header: 'DRIVING LICENSE',
      content: (
        <>
          <div className="flex gap-4 items-center">
            <div className="w-24 h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-lg"></div>
            <div className="flex-1">
              <div className="font-semibold">LOREM</div>
              <div className="text-sm text-gray-600">IPSUM</div>
              <div className="mt-2 text-green-600 font-semibold">LOREM IPSUM</div>
              <div className="font-semibold">CLASS: B</div>
            </div>
            <div className="bg-yellow-400 px-3 py-2 rounded-lg font-semibold">DL</div>
          </div>
          <div className="w-full h-12 bg-gradient-to-r from-black via-transparent to-black bg-[length:200px_100%] rounded mt-3"></div>
          <div className="text-center text-base font-semibold mt-3">01.234.567</div>
        </>
      )
    },
    {
      header: 'EMPLOYEE RECORDS',
      content: (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-gray-900 text-white p-2 text-xs text-left">#</th>
              <th className="bg-gray-900 text-white p-2 text-xs text-left">PHOTO</th>
              <th className="bg-gray-900 text-white p-2 text-xs text-left">ID</th>
              <th className="bg-gray-900 text-white p-2 text-xs text-left">DEPT</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map(i => (
              <tr key={i}>
                <td className="p-2 border-b border-gray-200 text-xs">{i}</td>
                <td className="p-2 border-b border-gray-200">
                  <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded"></div>
                </td>
                <td className="p-2 border-b border-gray-200 text-xs">E{i}MMMMYYYY</td>
                <td className="p-2 border-b border-gray-200 text-xs">
                  {i === 1 ? 'Engineering' : i === 2 ? 'Marketing' : 'Finance'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    },
    {
      header: 'FINANCIAL REPORT',
      content: (
        <>
          <div className="font-semibold mb-4">Monthly Revenue</div>
          <div className="flex items-end justify-around h-40 gap-2">
            {[60, 80, 70, 90, 85].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-blue-700 to-blue-500 rounded-t" 
                   style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="mt-5 p-4 bg-green-50 rounded-lg">
            <div className="font-semibold text-green-600">Total Revenue</div>
            <div className="text-2xl font-bold text-green-700">$385,000</div>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
      {cards.map((card, index) => (
        <DocumentCard key={index} card={card} position={cardPositions[index]} />
      ))}
    </div>
  );
};

export default CardCarousel