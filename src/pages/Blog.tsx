import React from 'react';
import { useLanguage } from '../components/LanguageContext';

const blogPosts = [
  {
    id: 1,
    title: "How ERP Software Transforms Businesses",
    excerpt: "Discover how ERP solutions streamline operations, improve efficiency, and drive growth for modern companies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    date: "2025-07-13",
    author: "Ahmed Ali",
  },
  {
    id: 2,
    title: "5 Key Features Every Payment Solution Needs",
    excerpt: "Explore the must-have features for secure and scalable payment platforms in today's digital world.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    date: "2025-06-28",
    author: "Sara Mostafa",
  },
  {
    id: 3,
    title: "Integrating Your Business with Modern APIs",
    excerpt: "A guide to connecting your business systems using robust and flexible APIs for seamless integration.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    date: "2025-06-10",
    author: "Mohamed Fathy",
  },
    {
    id: 1,
    title: "How ERP Software Transforms Businesses",
    excerpt: "Discover how ERP solutions streamline operations, improve efficiency, and drive growth for modern companies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    date: "2025-07-13",
    author: "Ahmed Ali",
  },
  {
    id: 2,
    title: "5 Key Features Every Payment Solution Needs",
    excerpt: "Explore the must-have features for secure and scalable payment platforms in today's digital world.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    date: "2025-06-28",
    author: "Sara Mostafa",
  },
  {
    id: 3,
    title: "Integrating Your Business with Modern APIs",
    excerpt: "A guide to connecting your business systems using robust and flexible APIs for seamless integration.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    date: "2025-06-10",
    author: "Mohamed Fathy",
  },
];

const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-secondary">{t('blog')}</h1>
          <p className="text-xl text-muted-foreground">Latest insights and industry news</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h2 className="text-xl font-semibold mb-2 text-secondary">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-gray-400">{post.author}</span>
                <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
