import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';

const jobs = [
  {
    title: 'Frontend Developer',
    location: 'Cairo, Egypt',
    type: 'Full-time',
    description: {
      summary: 'We are looking for a skilled Frontend Developer to build engaging UI experiences.',
      responsibilities: [
        'Develop UI using React and Tailwind CSS.',
        'Collaborate with UX/UI designers.',
        'Ensure cross-browser compatibility.',
        'Write clean, scalable code.'
      ],
      requirements: [
        '2+ years experience with React.',
        'Familiarity with Tailwind CSS and Git.',
        'Strong understanding of responsive design.'
      ],
      benefits: [
        'Flexible hours',
        'Health insurance',
        'Professional development'
      ]
    }
  },
  {
    title: 'Backend Developer',
    location: 'Cairo, Egypt',
    type: 'Full-time',
    description: {
      summary: 'Backend Developer needed to design APIs and support scalable architecture.',
      responsibilities: [
        'Develop RESTful APIs using Node.js or .NET.',
        'Manage databases and integrations.',
        'Optimize server-side performance.'
      ],
      requirements: [
        'Experience with Express, .NET, or Django.',
        'Good understanding of SQL/NoSQL.',
        'Knowledge of security and authentication.'
      ],
      benefits: [
        'Remote work options',
        'Annual bonuses',
        'Team retreats'
      ]
    }
  },
  {
    title: 'Mobile Developer',
    location: 'Remote',
    type: 'Full-time',
    description: {
      summary: 'We’re seeking a Mobile Developer for cross-platform development.',
      responsibilities: [
        'Build apps using React Native or Flutter.',
        'Deploy to Android and iOS stores.',
        'Ensure smooth performance and responsiveness.'
      ],
      requirements: [
        'At least 1 year of mobile dev experience.',
        'Familiar with publishing apps to stores.',
        'Good debugging and testing skills.'
      ],
      benefits: [
        'Fully remote team',
        'Flexible schedule',
        'Performance bonuses'
      ]
    }
  },
  {
    title: 'QA Tester',
    location: 'Cairo, Egypt',
    type: 'Part-time',
    description: {
      summary: 'Join our QA team to ensure bug-free product delivery.',
      responsibilities: [
        'Write and run test cases.',
        'Report and track bugs.',
        'Work with developers to resolve issues.'
      ],
      requirements: [
        'Basic knowledge of QA methodologies.',
        'Experience with tools like Selenium or Cypress.',
        'Attention to detail.'
      ],
      benefits: [
        'Part-time schedule',
        'Collaborative environment',
        'Career growth opportunities'
      ]
    }
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: {
      summary: 'We need a DevOps expert to support our cloud and CI/CD pipeline.',
      responsibilities: [
        'Maintain CI/CD workflows.',
        'Manage AWS or Azure infrastructure.',
        'Monitor performance and uptime.'
      ],
      requirements: [
        'Strong DevOps tooling experience.',
        'Familiarity with Docker, Kubernetes.',
        'Scripting skills (Bash, Python).'
      ],
      benefits: [
        'Remote-friendly',
        'Competitive salary',
        'Tech allowance'
      ]
    }
  },
  {
    title: 'Database Administrator',
    location: 'Cairo, Egypt',
    type: 'Full-time',
    description: {
      summary: 'Seeking a DBA to maintain and optimize databases.',
      responsibilities: [
        'Manage SQL and NoSQL databases.',
        'Ensure data integrity and backups.',
        'Perform tuning and migrations.'
      ],
      requirements: [
        'Experience with MySQL/PostgreSQL.',
        'Knowledge of indexing, replication.',
        'Backup and restore strategy skills.'
      ],
      benefits: [
        'In-office perks',
        'Health and dental insurance',
        'Training programs'
      ]
    }
  }
];

const Career = () => {
  const { t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="bg-white min-h-screen px-4 md:px-20 py-12 relative">
      <h1 className="text-4xl font-bold text-[#0049A3] text-center py-10">Career</h1>
      <p className="text-center text-gray-600 mt-2 text-lg">
        Join our team and build the future together!
      </p>

      <div className="mt-12 grid gap-6 max-w-4xl mx-auto">
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
              <button className="bg-[#0049A3] hover:bg-[#00337a] text-white font-semibold px-6 py-2 rounded-md transition-all">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
