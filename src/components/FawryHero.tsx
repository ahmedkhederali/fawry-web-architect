import { carouselSlides } from "@/lib/solutionsData";
import React, { useState, useEffect } from "react";

const FawryHeaderHero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden bg-[#006b99]">
      {/* Yellow Left Side */}
      <div
        className="relative flex flex-col justify-between bg-[#ffd300] py-6 px-4 md:px-8 z-10 w-full md:w-[55%]"
        style={{ borderBottomRightRadius: "120px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <img
            src="/images/DiracSystems.png"
            alt="Dirac Systems"
            className="w-[110px] h-auto rounded-xl shadow-lg border-4 border-white bg-white object-contain transform transition-transform duration-300 hover:scale-110"
          />

          {/* Desktop Navbar */}
          <nav className="hidden md:flex gap-6 lg:gap-10 ml-auto mr-[10%] font-semibold">
            <a href="/" className="text-[#006b99] hover:underline">Home</a>
            <div className="relative group">
              <a href="/about" className="text-[#006b99] hover:underline">About Us</a>
              <div className="absolute left-0 mt-2 w-40 bg-[#006b99] text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all">
                <a href="/about" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">About us</a>
                <a href="/career" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">Career</a>
                <a href="/clients" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">Our Clients</a>
                <a href="/partner" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">Our Partners</a>
              </div>
            </div>
            <a href="/products" className="text-[#006b99] hover:underline">Products</a>
            <a href="/blog" className="text-[#006b99] hover:underline">Blog</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#006b99]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 text-[#006b99]">
            <a href="/" className="block px-4 py-2">Home</a>
            <a href="/about" className="block px-4 py-2">About Us</a>
            <a href="/career" className="block px-4 py-2">Career</a>
            <a href="/clients" className="block px-4 py-2">Our Clients</a>
            <a href="/partner" className="block px-4 py-2">Our Partners</a>
            <a href="/products" className="block px-4 py-2">Products</a>
            <a href="/blog" className="block px-4 py-2">Blog</a>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex-1 text-gray-900 flex flex-col justify-center mt-6">
          <div className="max-w-3xl space-y-3 text-center md:text-left font-sans">
            <h2 className="text-lg md:text-xl text-[#006b99] font-semibold">
              Empowering the Digital Shift
            </h2>
            <h1 className="text-3xl md:text-6xl font-bold text-[#006b99]">
              Dirac Systems
            </h1>
            <p className="text-sm md:text-lg text-[#006b99] leading-relaxed">
               Drives Digital Evolution And Operational Efficiency With Cutting-Edge Technology Solutions Tailored To Modern Business Needs
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <button className="bg-[#006b99] text-[#ffd300] px-6 py-2 rounded-md font-semibold shadow hover:bg-[#005fa3] transition">
              Get a Quote
            </button>
            <button
              className="flex items-center gap-2 bg-white text-[#006b99] border border-[#0074d9] px-6 py-2 rounded-md shadow hover:bg-[#ffe066] transition"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/files/Dirac_Co.Profile.pdf";
                link.download = "CompanyProfile.pdf";
                link.click();
              }}
            >
              <span className="font-semibold">Company Profile</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Blue Right Side with Carousel */}
      <div className="relative flex flex-col items-center justify-center w-full md:w-[45%] bg-[#006b99]">
        <div className="absolute top-4 right-4 text-[#ffd300] font-semibold text-sm md:text-base">
          +20 123-456-789
        </div>

        {/* Carousel */}
        <div className="relative h-auto md:w-[125%] md:h-[300px] xl:h-[450px] flex items-center justify-center overflow-hidden rounded-tl-[80px] shadow-2xl bg-white z-20">
          <img
            key={current} // force re-render to trigger fade-in
            src={carouselSlides[current].image}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover transition-opacity duration-700 animate-fade"
          />

          {/* ✅ Centered Bottom Caption */}
          <div
            key={`caption-${current}`} 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-[#006b99]/70 text-white px-4 py-3 rounded-lg max-w-[80%] shadow-lg text-left transition-opacity duration-700 animate-fade ">
            <h2 className="text-lg md:text-xl font-extrabold">{carouselSlides[current].title}</h2>
            <p className="text-sm md:text-base font-medium">{carouselSlides[current].description}</p>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full border border-[#006b99] ${current === idx ? "bg-[#006b99]" : "bg-white"}`}
              />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-2 justify-center items-center mt-2">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
            }
            className="bg-[#ffd300] hover:bg-[#f9d853] transition-all duration-300 p-2 rounded-full shadow-lg border-2 border-white"
          >
            <svg className="w-3.5 h-3.5 text-[#006b99]" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() =>
              setCurrent((prev) => (prev + 1) % carouselSlides.length)
            }
            className="bg-[#ffd300] hover:bg-[#f9d853] transition-all duration-300 p-2 rounded-full shadow-lg border-2 border-white"
          >
            <svg className="w-3.5 h-3.5 text-[#006b99]" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FawryHeaderHero;
