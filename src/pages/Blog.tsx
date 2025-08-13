import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/solutionsData';



const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-self-start mb-12">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-bold mb-12 text-secondary">{t('blog')}</h1>
            <p className="text-xl text-muted-foreground">
              imply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
              imply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when and
              
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/images/hero section 1 .png"
              alt="Blog illustration"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

          <h2 className="text-2xl font-bold mb-12 text-secondary">{t('our_recent_blog')}</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogPosts && blogPosts.length > 0 && blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <div key={post.id} className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-md mb-4 w-full h-40 object-cover"
                />
                <h2 className="text-xl font-semibold mb-2 text-secondary">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-400">{post.author}</span>
                  <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
