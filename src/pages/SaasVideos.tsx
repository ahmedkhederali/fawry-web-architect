import React, { useRef } from "react";

const SaaSVideos = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full px-6 py-16 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006b99]">Testimonials</h2>
        <p className="text-gray-600 mt-2">See how our SaaS helps businesses grow 🚀</p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {/* Video 1 */}
        <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-xl bg-white">
          <video
            ref={video1Ref}
            src="/icons/saas video1.mp4"
            muted
            loop
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video 2 */}
        <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-xl bg-white">
          <video
            ref={video2Ref}
            src="/icons/saas video2.mp4"
            muted
            loop
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SaaSVideos;
