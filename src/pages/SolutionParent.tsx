import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import solutions from '../lib/solutionsData';
import { CheckCircleIcon } from 'lucide-react';

const SolutionParent = () => {
  const { id } = useParams();
  const parent = solutions.find((s) => s.id === id);
  const [activeTab, setActiveTab] = useState(0);

  if (!parent) return <div className="p-8 text-center">Parent solution not found.</div>;

  const activeChild = parent.children?.[activeTab];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full bg-[#006b99] text-white pt-20 pb-8 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 relative z-10">
            <h1 className="text-4xl font-bold mb-6 text-[#ffd400] drop-shadow-lg">{parent.title}</h1>
            <p className="text-lg mb-6 leading-relaxed tracking-wide text-white">{parent.description}</p>
          </div>


          {/* Image with 3D effect */}
          <div className="md:w-1/2">
            <img
              src={parent.image}
              alt={parent.title}
              className="rounded-xl shadow-2xl w-full max-h-[400px] object-cover transform"
              style={{ perspective: '1200px' }}
            />
          </div>
        </div>

        {/* Tabs integrated into hero */}
        <div className="container mx-auto px-6 mt-12  border-[white]/30">
          <div className="flex space-x-8 overflow-x-auto">
            {parent.children.map((child, index) => (
              <button
                key={child.id}
                onClick={() => setActiveTab(index)}
                className={`relative pb-2 text-lg font-medium transition duration-300 ease-in-out ${index === activeTab ? 'text-[#ffd400]' : 'text-white/70'
                  }`}
              >
                {child.title}
                {index === activeTab && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ffd400] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Section */}
      {activeChild && (
        <div className="container mx-auto px-6 py-12 space-y-12">
          {/* Full-width description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#006b99]">{activeChild.description}</h2>
            {/* <p className="text-[#003366] leading-relaxed text-lg">{activeChild.description}</p> */}
            <p className="text-[#003366] mt-4 leading-relaxed">{activeChild.summary}</p>
            {activeChild?.DownloadLink && (
              <a
                href={activeChild.DownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-[#ffd400] text-[#006b99] font-semibold py-2 px-4 rounded-full hover:bg-[#006b99] hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 14.5a.5.5 0 00.5.5h13a.5.5 0 000-1h-13a.5.5 0 00-.5.5zM10 2a.5.5 0 01.5.5v9.793l2.146-2.147a.5.5 0 11.708.708l-3 3a.498.498 0 01-.708 0l-3-3a.5.5 0 01.708-.708L9.5 12.293V2.5A.5.5 0 0110 2z" />
                </svg>
                Download Bourshour
              </a>
            )}
          </div>

          {/* Logos */}
          {activeChild.logos?.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
              {activeChild.logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Logo ${idx}`}
                  className="h-12 object-contain mx-auto grayscale hover:grayscale-0 transition"
                />
              ))}
            </div>
          )}

          {/* Features */}
          {activeChild.benefits?.length > 0 && (
            <div className="bg-[#006b99] text-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-6 text-[#ffd400]">Benefits of {activeChild.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeChild.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircleIcon className="h-6 w-6 text-[#ffd400] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{benefit.title}</h4>
                      <p className="text-sm text-white/80">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default SolutionParent;
