import React, { useState, useEffect } from 'react';

const carouselImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=1200",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=1200",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=1200"
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Solution", href: "#" },
  { label: "About Us", href: "#" }
];

const FawryHeaderHero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-row overflow-hidden bg-[#006b99]">
      {/* Left Side */}
      <div
        className="relative flex flex-col justify-between bg-[#ffd300] px-8 py-12  z-10"
        style={{
          width: '60%',
          borderBottomRightRadius: '150px'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-12" style={{ width: '70%' }}>
          <span className="text-2xl font-bold text-[#0074d9]">Fawry</span>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#0074d9] font-medium hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <span className="md:block hidden text-[#0074d9] text-base font-semibold px-2 rounded">
            +20 123-456-789
          </span>
        </div>
        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-6 leading-tight">
            Insurance for the<br />digital revolution
          </h1>
          <p className="text-base md:text-lg text-[#222] mb-8 max-w-md">
            Protect your communities and offer them exclusive insurance products.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#0074d9] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#005fa3] transition">
              Get a Quote
            </button>
            <button className="bg-white text-[#0074d9] border border-[#0074d9] px-6 py-3 rounded-md font-semibold shadow hover:bg-[#ffe066] transition">
              Learn More
            </button>
          </div>
        </div>
      </div>    
    <div
    className="relative flex flex-col items-center justify-center "
    style={{ width: '30%' }}
    >
    {/* Carousel Card */}
    <div className="relative w-[155%] h-[500px]  flex items-center justify-center overflow-hidden rounded-tl-[80px] shadow-2xl bg-white z-20">
        <img
        src={carouselImages[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover"
        />
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, idx) => (
            <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border border-[#0074d9] ${
                current === idx ? "bg-[#0074d9]" : "bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            />
        ))}
        </div>
    </div>
    {/* Carousel Controls BELOW the card */}
    <div className="flex gap-6 mt-6">
        <button
        onClick={() => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
        className="bg-white text-[#0074d9] p-3 rounded-full border border-[#ffd300] shadow hover:bg-[#ffe066] z-30"
        aria-label="Previous"
        >
        &#8592;
        </button>
        <button
        onClick={() => setCurrent((prev) => (prev + 1) % carouselImages.length)}
        className="bg-white text-[#0074d9] p-3 rounded-full border border-[#ffd300] shadow hover:bg-[#ffe066] z-30"
        aria-label="Next"
        >
        &#8594;
        </button>
    </div>
    </div>
    </section>
  );
};

export default FawryHeaderHero;