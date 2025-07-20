import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import solutions, { clientTabs } from '../lib/solutionsData';

const SolutionChild = () => {
  const [activeTab, setActiveTab] = useState('carton');

  const { parentId, childId } = useParams();
  const parent = solutions.find((s) => s.id === parentId);
  const child = parent?.children?.find((c) => c.id === childId);

  if (!parent || !child)
    return <div className="p-8 text-center">Project not found.</div>;

  // Always create a fresh reference to logos, NEVER mutate!
  const logosToShow =
    clientTabs.find(tab => tab.key === activeTab)?.logos ?? [];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-20">
        <Link
          to={`/solutions/${parent.id}`}
          className="text-blue-600 font-bold mb-6 inline-block"
        >
          &larr; Back to {parent.title}
        </Link>
      </div>
      {/* Full-width image */}
      <div className="container w-full">
        <img
          src={child.image}
          alt={child.title}
          className="w-full h-[380px] md:h-[500px] object-cover"
        />
      </div>
      {/* Content below the image */}
      <div className="container px-6 py-10 ">
        <h1 className="text-4xl font-bold mb-4 text-left" style={{ color: '#FFD600' }}>
          {child.title}
        </h1>
        <p className="text-lg text-left mb-6" style={{ color: '#003366' }}>{child.description}</p>

        {child.summary && (
          <p className="text-base text-gray-700 mb-6 text-left" style={{ color: '#003366' }}>{child.summary}</p>
        )}

        {child.benefits && (
          <>
            <h2 className="text-xl font-semibold mb-2 text-left" style={{ color: '#FFD600' }}>
              Key Benefits
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700" style={{ color: '#003366' }}>
              {child.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </>
        )}

        {child.features && (
          <>
            <h2 className="text-xl font-semibold mb-2 text-left" style={{ color: '#FFD600' }}>
              Highlighted Features
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700" style={{ color: '#003366' }}>
              {child.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </>
        )}

        {child.conclusion && (
          <p className="text-base text-gray-700 mt-8 text-left" style={{ color: '#003366' }}>{child.conclusion}</p>
        )}
      </div>

      {/* Tabs and client logos */}
      <div className="container px-6 py-10">
        <div className="mb-6 flex gap-4">
          {clientTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 rounded-full font-semibold border-2 ${
                activeTab === tab.key
                  ? 'border-yellow-400 bg-yellow-100 text-yellow-800'
                  : 'border-gray-300 bg-gray-100 text-gray-500'
              } transition`}
              type="button"
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-start items-center">
          {logosToShow.map(logo => (
            <div key={logo.name} className="flex flex-col items-center">
              <img
                src={logo.logo}
                alt={logo.name}
                className="h-16 w-auto object-contain mb-2"
              />
              <span className="text-gray-500 text-xs">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionChild;
