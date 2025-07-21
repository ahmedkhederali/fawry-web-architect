import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

// Counter component for animated numbers
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let frame;
    function update() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(update);
      } else {
        setCount(end);
        cancelAnimationFrame(frame);
      }
    }
    update();
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return <span>{count.toLocaleString()}</span>;
};

const AboutSection = () => {
  const { t, direction } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const text = document.getElementById("about-text");
      const video = document.getElementById("about-video");
      if (text && video) {
        const rect = text.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          text.style.opacity = "1";
          text.style.transform = "translateX(0)";
          video.style.opacity = "1";
          video.style.transform = "translateX(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("direction", direction);
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div key={direction} className="grid lg:grid-cols-2 gap-12 items-center">
          {direction === "rtl" ? (
            <>
              {/* Text on right in AR */}
              <div
                id="about-text"
                className="animate-fade-in transition-transform duration-1000 opacity-0 translate-x-[-80px] will-change-transform lg:col-start-1 lg:order-1 text-right"
              >
                <h2 className="text-4xl font-bold mb-6 text-secondary">
                  {t("aboutTitle")}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t("aboutText")}
                </p>
                <p className="text-gray-600 mb-8">{t("aboutExperience")}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <Counter end={800} duration={1500} />+
                    </h3>
                    <p className="text-gray-600">Active Customers</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <Counter end={15} duration={1200} />+
                    </h3>
                    <p className="text-gray-600">Strategic Partners</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <Counter end={3000} duration={1800} />+
                    </h3>
                    <p className="text-gray-600">Product Demos Delivered</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <Counter end={25000} duration={2000} />+
                    </h3>
                    <p className="text-gray-600">System Users Across All Platforms</p>
                  </div>
                </div>
              </div>
              {/* Video on left in AR */}
              <div
                id="about-video"
                className="animate-slide-up transition-transform duration-1000 opacity-0 translate-x-[80px] will-change-transform lg:col-start-2 lg:order-2"
              >
                <video
                  src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-computer-4245-large.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </>
          ) : (
            <>
              {/* Text on left in EN */}
              <div
                id="about-text"
                className="animate-fade-in transition-transform duration-1000 opacity-0 translate-x-[-80px] will-change-transform lg:col-start-1 lg:order-1 text-left"
              >
                <h2 className="text-4xl font-bold mb-6 text-secondary">
                  {t("aboutTitle")}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t("aboutText")}
                </p>
                <p className="text-gray-600 mb-8">{t("aboutExperience")}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <Counter end={800} duration={1500} />+
                    </h3>
                    <p className="text-gray-600">Active Customers</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <Counter end={15} duration={1200} />+
                    </h3>
                    <p className="text-gray-600">Strategic Partners</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <Counter end={3000} duration={1800} />+
                    </h3>
                    <p className="text-gray-600">Product Demos Delivered</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      <Counter end={25000} duration={2000} />+
                    </h3>
                    <p className="text-gray-600">System Users Across All Platforms</p>
                  </div>
                </div>
              </div>
              {/* Video on right in EN */}
              <div
                id="about-video"
                className="animate-slide-up transition-transform duration-1000 opacity-0 translate-x-[80px] will-change-transform lg:col-start-2 lg:order-2"
              >
                <video
                  src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-computer-4245-large.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
