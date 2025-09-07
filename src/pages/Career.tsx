import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Link } from "react-router-dom";
import Card from '@/components/Card';
import { jobs } from '@/lib/solutionsData';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Career = () => {
  const { t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className=" bg-white min-h-screen w-full  mb-8">
      <section className="w-full bg-[#006b99] text-white mt-10 pt-20 md:pt-[7rem] pb-8 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

          {/* Left side text */}
          <div className="md:w-1/2 relative z-10">
            <h1 className="text-4xl font-bold mb-6 text-[#ffd400] drop-shadow-lg">
              {t("Careers")}
            </h1>
            <p className="text-lg mb-6 leading-relaxed tracking-wide text-white text-justify">
              {t("career_desc")}
            </p>
          </div>

          {/* Right side image */}
          <div className="md:w-1/2">
            <LazyLoadImage
              src="/images/career.jpg"
              alt="career illustration"
              className="h-[300px] rounded-xl shadow-2xl w-full contain-content transform"
              // className="rounded-xl shadow-2xl w-full max-h-[400px] object-cover transform"
              style={{ perspective: "1200px" }}
            />
          </div>

        </div>
      </section>

      <h2
        id={`card-title-available-jobs`}
        className="mt-20 text-center text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 md:mb-6 text-[#ffd300]"
      >
        {t('available_jobs')}
      </h2>
      <div className="mt-6 grid gap-6 max-w-6xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg px-6 py-5 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="text-xl font-semibold text-[#0049A3]">{job.title}</h2>
                <p className="text-gray-500 text-sm mt-1">
                  {job.location} &bull; {job.type}
                </p>
              </div>
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-2 md:mt-0 px-5 py-2 text-sm bg-[#0049A3] text-white rounded-md hover:bg-[#00337a] transition-all"
              >
                Show More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-[95%] max-w-3xl max-h-[80vh] overflow-y-auto shadow-lg relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-[#0049A3] mb-1">{selectedJob.title}</h2>
            <p className="text-gray-600 text-sm mb-3">{selectedJob.location} • {selectedJob.type}</p>
            <hr className="mb-4" />

            <div className="text-gray-800 space-y-4 text-[15px]">
              <div>
                <h3 className="font-semibold text-[#0049A3]">Job Summary</h3>
                <p>{selectedJob.description.summary}</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#0049A3]">Responsibilities</h3>
                <ul className="list-disc list-inside">
                  {selectedJob.description.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#0049A3]">Requirements</h3>
                <ul className="list-disc list-inside">
                  {selectedJob.description.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#0049A3]">Benefits</h3>
                <ul className="list-disc list-inside">
                  {selectedJob.description.benefits.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/apply"
                className="bg-[#0049A3] hover:bg-[#00337a] text-white font-semibold px-6 py-2 rounded-md transition-all inline-block"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
