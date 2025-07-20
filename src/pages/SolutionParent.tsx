import React from 'react';
import { useParams, Link } from 'react-router-dom';
import solutions from '../lib/solutionsData';

const SolutionParent = () => {
  const { id } = useParams();
  const parent = solutions.find((s) => s.id === id);

  if (!parent) return <div className="p-8 text-center">Parent solution not found.</div>;

  // If no children, show as a child details page with Fawry styling
  if (!parent.children || parent.children.length === 0) {
    return (
      <div className="w-full min-h-screen bg-white">
        <div className="container mx-auto px-4 pt-20">
          <Link
            to="/solutions"
            className="text-blue-600 font-bold mb-6 inline-block"
          >
            &larr; Back to Solutions
          </Link>
        </div>
        {/* Full-width image */}
        <div className="container w-full">
          <img
            src={parent.image}
            alt={parent.title}
            className="w-full h-[380px] md:h-[500px] object-cover"
          />
        </div>
        {/* Content below the image */}
        <div className="container px-6 py-10 ">
          <h1 className="text-4xl font-bold mb-4 text-left" style={{ color: '#FFD600' }}>
            {parent.title}
          </h1>
          <p className="text-lg text-left mb-6" style={{ color: '#003366' }}>{parent.description}</p>

          {parent.summary && (
            <p className="text-base text-gray-700 mb-6 text-left" style={{ color: '#003366' }}>{parent.summary}</p>
          )}

          {parent.benefits && (
            <>
              <h2 className="text-xl font-semibold mb-2 text-left" style={{ color: '#FFD600' }}>
                Key Benefits
              </h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700" style={{ color: '#003366' }}>
                {parent.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </>
          )}

          {parent.features && (
            <>
              <h2 className="text-xl font-semibold mb-2 text-left" style={{ color: '#FFD600' }}>
                Highlighted Features
              </h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700" style={{ color: '#003366' }}>
                {parent.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </>
          )}

          {parent.conclusion && (
            <p className="text-base text-gray-700 mt-8 text-left" style={{ color: '#003366' }}>{parent.conclusion}</p>
          )}
        </div>
      </div>
    );
  }

  // Parent with children - show as a list of children (cards)
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6 text-secondary">{parent.title}</h1>
      <p className="mb-8 text-lg text-gray-700">{parent.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {parent.children.map((child) => (
          <Link
            to={`/solutions/${parent.id}/${child.id}`}
            key={child.id}
            className="block group relative overflow-hidden rounded-lg shadow-lg card-hover"
          >
            <img src={child.image} alt={child.title} className="w-full h-56 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-secondary/80 text-white">
              <h2 className="text-xl font-bold">{child.title}</h2>
              <p className="text-blue-100 opacity-80">{child.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SolutionParent;
