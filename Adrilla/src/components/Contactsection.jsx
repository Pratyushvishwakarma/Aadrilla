// ContactSection Component
const ContactSection = () => {
  return (
    <section className="px-16 py-24 bg-gradient-to-br from-blue-50 to-indigo-100 flex gap-20" id="contact">
      <div data-scroll className="flex-1 opacity-0 -translate-x-12 transition-all duration-700">
        <h2 className="text-5xl font-bold mb-5">Contact Us</h2>
        <p className="text-gray-600 mb-10">
          <span className="text-orange-600">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
        </p>
        <div className="mb-8">
          <h3 className="font-bold mb-3 flex items-center gap-2">📍 U.S. Office</h3>
          <p className="text-gray-600 ml-7">
            Aadrila Technologies INC.<br />
            8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19001.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-3 flex items-center gap-2">📍 India Office</h3>
          <p className="text-gray-600 ml-7">
            Aadrila Technologies Private Limited.<br />
            Unit 707, Lotus Trade Centre, Sanakar Nagar, New Link Road, Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.
          </p>
        </div>
      </div>
      <div data-scroll className="flex-1 opacity-0 translate-x-12 transition-all duration-700">
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <div className="grid grid-cols-2 gap-5 mb-5">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 transition" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 transition" />
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 transition" />
            <input type="text" placeholder="Company Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 transition" />
          </div>
          <input type="text" placeholder="Inquiry Type" className="w-full px-4 py-3 border border-gray-200 rounded-lg mb-5 focus:outline-none focus:border-indigo-600 transition" />
          <textarea placeholder="Message" className="w-full px-4 py-3 border border-gray-200 rounded-lg mb-5 resize-y min-h-32 focus:outline-none focus:border-indigo-600 transition"></textarea>
          <button className="w-full bg-indigo-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection