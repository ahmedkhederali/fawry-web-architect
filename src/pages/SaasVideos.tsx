import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // custom icons

const SaaSVideos = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

  const toggleMute = (
    videoRef: React.RefObject<HTMLVideoElement>,
    setMuted: React.Dispatch<React.SetStateAction<boolean>>,
    isMuted: boolean
  ) => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full px-6 py-12">
      {/* Background with two colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#006b99] to-[#ffd400] opacity-20 rounded-lg"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Video 1 */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl bg-white">
          <video
            ref={video1Ref}
            src="/icons/saas video1.mp4"
            muted
            loop
            playsInline
            controls // ✅ user must click play
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video 2 */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl bg-white">
          <video
            ref={video2Ref}
            src="/icons/saas video1.mp4"
            muted
            loop
            playsInline
            controls // ✅ user must click play
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SaaSVideos;
