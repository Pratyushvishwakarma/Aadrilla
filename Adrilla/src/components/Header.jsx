// Header Component
const Header = ({ showHeader }) => {
  return (
    <header className={`fixed top-0 w-full bg-white shadow-md px-16 py-5 flex justify-between items-center z-40 transition-all duration-700 ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="flex items-center gap-3 text-3xl font-bold">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
          A
        </div>
        <div>
          <div className="text-3xl">AADRILA</div>
          <div className="text-xs font-normal text-gray-600">TECHNOLOGIES</div>
        </div>
      </div>
      <nav className="flex gap-9 items-center">
        <a href="#home" className="text-gray-800 font-medium hover:text-indigo-600 transition">Home</a>
        <a href="#industries" className="text-gray-800 font-medium hover:text-indigo-600 transition">Industries</a>
        <a href="#products" className="text-gray-800 font-medium hover:text-indigo-600 transition">Products</a>
        <a href="#blog" className="text-gray-800 font-medium hover:text-indigo-600 transition">Blog</a>
        <a href="#contact" className="text-gray-800 font-medium hover:text-indigo-600 transition">Contact Us</a>
        <a href="#about" className="text-gray-800 font-medium hover:text-indigo-600 transition">About Us</a>
        <a href="#demo" className="bg-indigo-600 text-white px-7 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition">
          Get a Demo
        </a>
      </nav>
    </header>
  );
};
 
export default Header