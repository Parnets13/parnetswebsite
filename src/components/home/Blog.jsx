import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Transforming Ideas into Digital Realities.',
    category: 'Agency',
    author: 'Admin',
    date: 'Oct 25, 2024',
    image: '/assets/images/blog/h10-blog-1.webp',
    link: '/blog-details/transforming-ideas'
  },
  {
    id: 2,
    title: 'Navigating the Digital Landscape with Us.',
    category: 'Technology',
    author: 'Admin',
    date: 'Oct 23, 2024',
    image: '/assets/images/blog/h10-blog-2.webp',
    link: '/blog-details/digital-landscape'
  },
  {
    id: 3,
    title: 'Your Partner for Digital the Transformation.',
    category: 'Development',
    author: 'Admin',
    date: 'Oct 21, 2024',
    image: '/assets/images/blog/h10-blog-3.webp',
    link: '/blog-details/digital-transformation'
  }
];

const Blog = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              Recent News
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Exploring the World of IT Strategies and Tech.
            </h2>
          </div>
          <Link 
            to="/blog-grid" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-colors whitespace-nowrap"
          >
            Explore More
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop' }}
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-white text-gray-900 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full shadow-lg">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-6 text-sm text-gray-500 font-medium mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-primary" />
                    By {blog.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    {blog.date}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  <Link to={blog.link} className="hover:text-brand-primary transition-colors">
                    {blog.title}
                  </Link>
                </h4>
                
                <Link to={blog.link} className="inline-flex items-center gap-2 text-brand-secondary font-bold hover:text-brand-primary transition-colors group/btn">
                  Read More
                  <span className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-white transition-colors">
                    <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
