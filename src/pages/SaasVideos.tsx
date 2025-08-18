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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-6 py-8">
      {/* Video 1 */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
        <video
          ref={video1Ref}
          src="/icons/saas video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls   // ✅ enable full video controls
          className="w-full h-full object-cover"
        />
        {/* <button
          onClick={() => toggleMute(video1Ref, setIsMuted1, isMuted1)}
          className="absolute bottom-4 right-4 bg-[#006b99] text-white p-2 rounded-full shadow-lg hover:bg-[#ffd400] transition"
        >
          {isMuted1 ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button> */}
      </div>

      {/* Video 2 */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
        <video
          ref={video2Ref}
          src="/icons/saas video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls   // ✅ enable full video controls
          className="w-full h-full object-cover"
        />
        {/* <button
          onClick={() => toggleMute(video2Ref, setIsMuted2, isMuted2)}
          className="absolute bottom-4 right-4 bg-[#006b99] text-white p-2 rounded-full shadow-lg hover:bg-[#ffd400] transition"
        >
          {isMuted2 ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button> */}
      </div>
    </div>
  );
};

export default SaaSVideos;
