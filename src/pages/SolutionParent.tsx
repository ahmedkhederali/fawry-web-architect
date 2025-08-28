import { useParams, Link } from 'react-router-dom';
import solutions from '../lib/solutionsData';
import { CheckCircleIcon } from 'lucide-react';
import FawrySassSection from '@/components/FawrySassSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import { useLanguage } from '@/components/LanguageContext';
import { useEffect, useRef, useState } from 'react';

interface ChildSolution {
  id: string;
  title: string;
  description: string;
  summary: string;
  title_why?: string; 
  benefits: { title: string; description: string }[];
  whyChooseDirac?: { title: string; description: string }[];
  logos: string[];
  DownloadLink: string;
  isSass: boolean;
  isVansale?: boolean;
  live_img?: string;
  pricing?: {
    title: string;
    price: string;
    features: string[];
    cta: string;
  }[];
}

const SolutionParent = () => {
  const { id } = useParams();
  const parent = solutions.find((s) => s.id === id);
  const { language, t } = useLanguage();
  const descriptionRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentChildren, setCurrentChildren] = useState<ChildSolution[]>([]);

  useEffect(() => {
    if (parent?.children) {
      setCurrentChildren(parent.children);
      setActiveTab(0);
      setIsExpanded(false);
    }
  }, [id, parent]);

  if (!parent) {
    return <div className="p-8 text-center">Parent solution not found.</div>;
  }

  const activeChild = currentChildren[activeTab] as ChildSolution | undefined;
  const formattedSummary = activeChild?.summary?.replace(/\/n/g, '\n') || '';
  const summaryLines = formattedSummary.split('\n');
  const displayLines = isExpanded ? summaryLines : summaryLines.slice(0, 3);

  const getProductImage = (childTitle: string) => {
    const images = {
      diracenterprise: "/products/diracenterprise/diracenterprise.png?height=400&width=600",
      DiraPack: "/products/dirapack/dirapack.png?height=400&width=600",
      DiraPanel: "/products/dirapack/dirapack.png?height=400&width=600",
      DiraTail: "/products/dirapack/dirapack.png?height=400&width=600",
      DiraPlast: "/products/dirapack/dirapack.png?height=400&width=600",
    };
    return images[childTitle as keyof typeof images] || activeChild?.live_img || "/images/EnterpriseEdition.png";
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setTimeout(() => {
      descriptionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full bg-[#006b99] text-white mt-10 pt-20 pb-8 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 relative z-10">
            <h1 className="text-4xl font-bold mb-6 text-[#ffd400] drop-shadow-lg">{parent.title}</h1>
            <p className="text-lg mb-6 leading-relaxed tracking-wide text-white text-justify">{parent.description}</p>
          </div>


          <div className="md:w-1/2">
            <img
              src={parent.image}
              alt={parent.title}
              className="rounded-xl shadow-2xl w-full max-h-[400px] object-cover transform"
              style={{ perspective: '1200px' }}
            />
          </div>
        </div>

        <div className="container mx-auto px-6 mt-12  border-[white]/30">
          <div className="flex space-x-8 overflow-x-auto">
  {currentChildren.map((child, index) => (
    <button
      key={child.id}
      onClick={() => handleTabClick(index)}
      className={`relative pb-2 text-lg font-medium transition duration-300 ease-in-out 
        ${index === activeTab ? "text-[#ffd400]" : "text-white/70"}`}
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
          <div ref={descriptionRef} className={`flex flex-col md:flex-row items-center justify-between gap-8`}>
            {/* LEFT SIDE - TEXT */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-2xl font-bold mb-4 text-[#006b99]">
                {activeChild.description}
              </h2>
              <div className="text-[#003366] mt-1 leading-relaxed text-justify">
                {displayLines.map((line, index) => (
                  <div key={index} className="min-h-[1.5em] flex items-center">
                    <span className="inline-block w-full text-left break-words">
                      {line || <br />}
                    </span>
                  </div>
                ))}

                {!isExpanded && summaryLines.length > 3 && (
                  <button
                    className="mt-2 text-[#006b99] hover:text-[#003366] underline focus:outline-none"
                    onClick={() => setIsExpanded(true)}
                  >
                    Read More
                  </button>
                )}
                {isExpanded && summaryLines.length > 3 && (
                  <button
                    className="mt-2 text-[#006b99] hover:text-[#003366] underline focus:outline-none"
                    onClick={() => setIsExpanded(false)}
                  >
                    Show Less
                  </button>
                )}
              </div>


              <div className="flex flex-wrap gap-4 mt-6">
                {activeChild?.DownloadLink && (
                  <a
                    href={activeChild.DownloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#ffd400] text-[#006b99] font-semibold py-2 px-4 rounded-full hover:bg-[#006b99] hover:text-white transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 14.5a.5.5 0 00.5.5h13a.5.5 0 000-1h-13a.5.5 0 00-.5.5zM10 2a.5.5 0 01.5.5v9.793l2.146-2.147a.5.5 0 11.708.708l-3 3a.498.498 0 01-.708 0l-3-3a.5.5 0 01.708-.708L9.5 12.293V2.5A.5.5 0 0110 2z" />
                    </svg>
                    Download Brochure
                  </a>
                )}
                {activeChild?.isSass && (
                  <button
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 bg-[#ffd400] text-[#006b99] font-semibold py-2 px-4 rounded-full hover:bg-[#006b99] hover:text-white transition"
                  >
                    Request Trial Version
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE if isSass */}
            <div className="w-full md:w-1/2">
              <img
                src={getProductImage(activeChild.title) || "/placeholder.svg"}
                alt={`${activeChild.title} Interface`}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
          {activeChild?.isSass && <FawrySassSection />}
          {/* Logos */}
          {activeChild.logos?.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-8">
              {activeChild.logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="w-40 h-40 flex items-center justify-center rounded-xl shadow-md bg-white border"
                >
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Logo ${idx}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}
               {/* Features */}
          {activeChild?.isVansale && activeChild.whyChooseDirac?.length > 0 && (
            <div className="bg-[#006b99] text-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-6 text-[#ffd400]">{activeChild?.title_why}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeChild.whyChooseDirac.map((whyuse, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircleIcon className="h-6 w-6 text-[#ffd400] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{whyuse.title}</h4>
                      <p className="text-sm text-white/80">{whyuse.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Features */}
          {!activeChild?.isSass && activeChild.benefits?.length > 0 && (
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
          {activeChild?.pricing && activeChild.pricing.length > 0 && (
            <PricingSection plans={activeChild.pricing} />
          )}
          {activeChild?.isSass && <ContactSection
            hubspotFormId={
              language === 'ar'
                ? 'ce9aac90-b7aa-4bd7-9441-0ceec3dfe7de'
                : 'b9ee4a06-45dc-41ce-a9cd-656d33b32da9'
            }
          />}
        </div>
      )}
    </div>
  );
};

export default SolutionParent;
