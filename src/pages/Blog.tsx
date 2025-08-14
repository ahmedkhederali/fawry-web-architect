import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/solutionsData';
import Card from '@/components/Card';



const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-16">
        
<Card 
  title={t('blog_title')}
  desc={t('blog_desc')}
  img_src="/images/hero section 1 .png"
  img_alt="Blog illustration"
/>
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
