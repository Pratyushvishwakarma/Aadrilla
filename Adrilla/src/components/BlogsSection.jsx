// BlogsSection Component
import BlogCard from "./BlogCard";
const BlogsSection = () => {
  const blogs = [
    { title: 'How AI is Revolutionizing Document Management for Enterprises', date: '24 July, 2023' },
    { title: 'Top 5 Fraud Prevention Strategies for Financial Institutions', date: '24 July, 2023' },
    { title: 'The Future of OCR: From Basic Extraction to AI-Driven Intelligence', date: '24 July, 2023' }
  ];

  return (
    <section className="px-16 py-24 bg-white text-center" id="blog">
      <h2 className="text-5xl font-bold mb-5">Blogs</h2>
      <p className="max-w-3xl mx-auto mb-16 text-gray-600 text-lg">
        <span className="text-orange-600">Lorem Ipsum</span> is simply dummy text of the printing and typesetting{' '}
        <span className="text-orange-600">industry</span>. Lorem Ipsum has been the industry's standard.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {blogs.map((blog, i) => (
          <BlogCard key={i} title={blog.title} date={blog.date} />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection