import React, { useState } from "react";

const SaaSVideos = () => {
  const videos = [
    {
      id: 1,
      type: "youtube",
      src: "https://www.youtube.com/embed/P4f6q6IvTso",
    },
    {
      id: 2,
      type: "mp4",
      src: "/icons/saas video1.mp4",
    },
    {
      id: 3,
      type: "mp4",
      src: "/icons/saas video1.mp4",
    },
    {
      id: 4,
      type: "youtube",
      src: "https://www.youtube.com/embed/P4f6q6IvTso",
    },
  ];

  // Show 2 at a time
  const visibleCount = 2;
  const [startIdx, setStartIdx] = useState(0);

  // Infinite scroll logic
  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + videos.length) % videos.length);
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % videos.length);
  };

  // Only show the visible ones
  const visibleVideos = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleVideos.push(videos[(startIdx + i) % videos.length]);
  }

  return (
    <section className="py-10 bg-gray-50 overflow-hidden w-full">
      {/* Title */}
      <div className="px-4 mb-10 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#006b99]">
          Testimonials
        </h2>
        <p className="text-gray-600">See how our SaaS helps businesses grow 🚀</p>
      </div>

      <div className="relative flex items-center w-full">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center
            h-14 w-14 rounded-full border-2 border-[#006b99] bg-white
            hover:bg-[#006b99] hover:text-white transition-all duration-300 group z-20 shadow-lg"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-[#006b99] group-hover:stroke-white"
          >
            <path
              d="M15.5 19L9.5 12L15.5 5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Carousel */}
        <div className="overflow-hidden w-full px-16">
          <div className="flex gap-12 justify-center">
            {visibleVideos.map((video, idx) => (
              <div
                key={video.id + "-" + idx}
                className="bg-white rounded-xl shadow-xl w-[500px] max-w-full aspect-video shrink-0 overflow-hidden"
              >
                {video.type === "youtube" ? (
                  <iframe
                    src={video.src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                ) : (
                  <video
                    src={video.src}
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center
            h-14 w-14 rounded-full border-2 border-[#006b99] bg-white
            hover:bg-[#006b99] hover:text-white transition-all duration-300 group z-20 shadow-lg"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-[#006b99] group-hover:stroke-white"
          >
            <path
              d="M8.5 5L14.5 12L8.5 19"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SaaSVideos;
