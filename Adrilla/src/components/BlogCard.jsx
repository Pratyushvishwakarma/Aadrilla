// BlogCard Component
const BlogCard = ({ title, date }) => {
  return (
    <div data-scroll className="bg-white border border-gray-200 rounded-2xl p-8 text-left transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-12">
      <div className="text-gray-400 text-sm mb-4">{date}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
      </p>
    </div>
  );
};
export default BlogCard