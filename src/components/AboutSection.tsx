import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
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
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Detect overflow for md and up
    const checkOverflow = () => {
      if (textRef.current && window.innerWidth >= 768) {
        const hasOverflow =
          textRef.current.scrollHeight > textRef.current.clientHeight;
        setShowButton(hasOverflow);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("resize", checkOverflow);
    setTimeout(checkOverflow, 500);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const diracDescription = `
DIRAC Systems is a leading Egyptian shareholder company specializing in advanced strategic business software solutions that drive digital transformation across various organizations. Established in 2012, with a capital of 27 million EGP, DIRAC has quickly positioned itself as a pivotal player in the region's technology landscape. As a subsidiary of Fawry for Banking Technology and Electronic Payments S.A.E, DIRAC leverages robust financial backing to innovate and expand its offerings.

At the forefront of digital transformation, DIRAC provides a comprehensive suite of Enterprise Resource Planning (ERP) solutions designed to enhance performance, efficiency, and competitiveness for businesses.

As we continue to expand our offerings—including the recent launches of the Fawry Business HR and Accounting systems—DIRAC Systems remains focused on empowering businesses to improve products, enhance customer experiences, and enter new markets. Join us as we transform the future of business through cutting-edge digital solutions.
`;

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div
          key={direction}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* === Text Section === */}
          <div
            id="about-text"
            className={`transition-transform duration-1000 opacity-0 translate-x-[-80px] will-change-transform lg:col-start-1 lg:order-1 ${direction === "rtl" ? "text-right" : "text-left"
              }`}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#ffd300]">
              {t("aboutTitle")}
            </h2>

            <div
              ref={textRef}
              className={`text-secondary text-base leading-relaxed font-sans tracking-wide transition-all duration-500 
              ${expanded
                  ? "max-h-none"
                  : "md:max-h-[250px] md:overflow-hidden"
                }`}
            >
              {diracDescription}
            </div>

            {showButton && (
              <button
                className="mt-4 text-[#ffd300] font-semibold hover:underline"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            )}
          </div>

          {/* === Video Section === */}
          <div
            id="about-video"
            className={`transition-transform duration-1000 opacity-0 translate-x-[80px] will-change-transform lg:col-start-2 lg:order-2`}
          >
            <video
              src="/icons/Software Development.mp4"
              controls
              autoPlay
              muted
              loop
              className="rounded-lg shadow-xl w-full h-[250px] md:h-[250px] lg:h-[350px] object-cover"
            />
          </div>
        </div>

        {/* === Counters === */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#ffd300] mb-2">
                <Counter end={800} duration={1500} />+
              </h3>
              <p className="text-secondary">Active Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#ffd300] mb-2">
                <Counter end={15} duration={1200} />+
              </h3>
              <p className="text-secondary">Strategic Partners</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#ffd300] mb-2">
                <Counter end={3000} duration={1800} />+
              </h3>
              <p className="text-secondary">Product Demos Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#ffd300] mb-2">
                <Counter end={25000} duration={2000} />+
              </h3>
              <p className="text-secondary">
                System Users Across All Platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
