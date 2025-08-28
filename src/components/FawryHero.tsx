import { carouselSlides } from "@/lib/solutionsData";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const FawryHeaderHero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, direction, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full md:min-h-[80vh] flex flex-col md:flex-row overflow-hidden bg-[#006b99]">
      {/* Yellow Left Side */}
      <div
        className="relative flex flex-col justify-between bg-[#ffd300] py-6 px-4 md:px-8 z-10 w-full md:w-[55%] md:rounded-br-[120px]"
        // className="relative flex flex-col justify-between bg-[#ffd300] py-6 px-4 md:px-8 z-10 w-full md:w-[55%] borderBottomRightRadius"
        // style={{ borderBottomRightRadius: "120px" }} // need to remove in mobile
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <img
            src="/images/DiracSystems.png"
            alt="Dirac Systems"
            className="w-[110px] h-auto rounded-xl shadow-lg border-4 border-white bg-white object-contain transform transition-transform duration-300 hover:scale-110"
          />

          {/* Desktop Navbar */}
          <nav className={`hidden md:flex gap-6 lg:gap-10 ml-auto mr-[10%] font-semibold ${direction === "rtl" ? "flex-row-reverse space-x-reverse" : ""
            }`}>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) =>
                  `relative font-bold transition-all duration-300 
                  ${isActive 
                      ? "text-[#006b99] bg-[#ffd300] after:w-full" 
                      : "text-[#006b99] hover:text-white hover:bg-[#006b99] after:w-0 hover:after:w-full"} 
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#006b99] after:transition-all after:duration-300`
                }
              >
                Home
              </NavLink>
            {/* <a href="/" className="text-[#006b99] hover:underline">Home</a> */}
            <div className="relative group">
              <a href="/about" className="text-[#006b99] hover:underline">About Us</a>
              <div className="absolute left-0 mt-2 w-40 bg-[#006b99] text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all">
                <a href="/about" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">About us</a>
                <a href="/career" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">Career</a>
                <a href="/clients" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">Our Clients</a>
                <a href="/partners" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">Our Partners</a>
              </div>
            </div>
            <div className="relative group z-50">
              <a href="/products" className="text-[#006b99] hover:underline">Product</a>

              <div className="absolute left-0 mt-2 w-40 bg-[#006b99] text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all z-50">
                <a href="/solutions/erp" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">ERP Enterprise</a>
                <a href="/solutions/erp-standard" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">ERP Standard </a>
                <a href="/solutions/sass" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">SaaS Solutions</a>
                <a href="/solutions/sass" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">Van Sale</a>
              </div>
            </div>
            <div className="relative group z-50">
              <a href="/solutions" className="text-[#006b99] hover:underline">Solutions</a>

              <div className="absolute left-0 mt-2 w-40 bg-[#006b99] text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all z-50">
                <a href="/solutions/digital-transformation" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">Digital Transformation</a>
                <a href="/solutions/system-integration" className="block px-4 py-2 hover:bg-white hover:text-[#006b99]">System Integration</a>
              </div>
            </div>
            {/* <a href="/blog" className="text-[#006b99] hover:underline">Blog</a> */}
            {/* Language Toggle */}

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
                <div
                  className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col space-y-2 py-6 px-4 z-40 ${direction === "rtl" ? "text-right" : "text-left"
                    }`}
                >
                  {/* Home */}
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="text-[#006b99] font-semibold hover:underline"
                  >
                    {t("home")}
                  </Link>
        
                  {/* About Us Dropdown */}
                  <details className="w-full">
                    <summary className="cursor-pointer text-[#006b99] font-semibold py-2">
                      {t("aboutUs")}
                    </summary>
                    <div className="pl-4 flex flex-col space-y-2 text-[#ffd300]">
                      <Link to="/about" onClick={() => setMenuOpen(false)}>
                        {t("aboutUs")}
                      </Link>
                      <Link to="/career" onClick={() => setMenuOpen(false)}>
                        {t("career")}
                      </Link>
                      <Link to="/clients" onClick={() => setMenuOpen(false)}>
                        {t("ourClients")}
                      </Link>
                      <Link to="/partners" onClick={() => setMenuOpen(false)}>
                        {t("ourPartners")}
                      </Link>
                      <Link to="/contact" onClick={() => setMenuOpen(false)}>
                        {t("contactUs")}
                      </Link>
                    </div>
                  </details>
        
                  {/* Products Dropdown */}
                  <details className="w-full">
                    <summary className="cursor-pointer text-[#006b99] font-semibold py-2">
                      {t("products")}
                    </summary>
                    <div className="pl-4 flex flex-col space-y-2 text-[#ffd300]">
                      <Link to="/products/erp" onClick={() => setMenuOpen(false)}>
                        {t("ERP Enterprise")}
                      </Link>
                      <Link to="/products/erp-standard" onClick={() => setMenuOpen(false)}>
                        {t("ERP Standard")}
                      </Link>
                      <Link to="/products/sass" onClick={() => setMenuOpen(false)}>
                        {t("SaaS")}
                      </Link>
                      <Link to="/products/vansales" onClick={() => setMenuOpen(false)}>
                        {t("Van Sales")}
                      </Link>
                    </div>
                  </details>
        
                  {/* Services Dropdown */}
                  <details className="w-full">
                    <summary className="cursor-pointer text-[#006b99] font-semibold py-2">
                      {t("serviceSolutions")}
                    </summary>
                    <div className="pl-4 flex flex-col space-y-2 text-[#ffd300]">
                      <Link to="/solutions/digital-transformation" onClick={() => setMenuOpen(false)}>
                        {t("Digital Transformation")}
                      </Link>
                      <Link to="/" onClick={() => setMenuOpen(false)}>
                        {t("System Integration")}
                      </Link>
                    </div>
                  </details>
        
                  {/* Blog */}
                  {/* <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-[#006b99] font-semibold hover:underline"
            >
              {t("blog")}
            </Link> */}
                </div>
              )}

        {/* Hero Content */}
        <div className="flex-1 text-gray-900 flex flex-col justify-center mt-6">
          <div className="max-w-3xl space-y-3 text-center md:text-left font-sans">
            <h2 className="text-lg md:text-xl text-[#006b99] font-semibold">
              Empowering the Digital Shift
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-[#006b99]">
              Dirac Systems
            </h1>
            <p className="text-sm md:text-lg text-[#025274] leading-relaxed w-full md:w-3/4 mx-auto md:mx-0">
              Drives Digital Evolution And Operational Efficiency With Cutting-Edge Technology Solutions Tailored To Modern Business Needs
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <button
              className="bg-[#006b99] text-[#ffd300] px-6 py-2 rounded-md font-semibold shadow hover:bg-[#005fa3] transition"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start" // scroll so the section starts at the top
                });
              }}
            >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Blue Right Side with Carousel */}
      <div className="relative flex flex-col items-center justify-center w-full md:w-[45%] bg-[#006b99] min-h-[50vh] md:min-h-[80vh]">
        {/* <button
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          className="hidden md:block absolute top-6 right-6 md:right-[2rem] z-40 px-4 py-2 bg-white border-2 border-[#006b99] text-[#006b99] rounded-md hover:bg-[#ffd300] hover:text-[#006b99] transition-all duration-300 font-medium shadow-lg"
        >
          العربية
        </button> */}
        {/* Carousel */}
        <div className="relative image-container h-[400px] md:w-[125%]  xl:h-[450px] md:h-[350px] flex items-center justify-center overflow-hidden rounded-[10px] md:rounded-tl-[80px] shadow-2xl bg-white z-20">
         
          <img
            key={current}
            src={carouselSlides[current].image}
            alt={`Slide ${current + 1}`}
            className="w-full h-full  object-cover object-center transition-opacity duration-700 animate-fade"
          />

          {/* Caption */}
          <div
            key={`caption-${current}`}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#000000]/70 text-[#ffd300] px-4 py-3 rounded-lg max-w-[80%] shadow-lg text-left transition-opacity duration-700 animate-fade"
          >
            <h2 className="text-lg md:text-xl font-extrabold">{carouselSlides[current].title}</h2>
            <p className="text-sm md:text-base font-medium">{carouselSlides[current].description}</p>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full border border-[#006b99] ${current === idx ? "bg-[#006b99]" : "bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
        <div className="hidden md:flex md:absolute md:bottom-[3rem] md:left-1/2 md:-translate-x-1/2 gap-2  bottom-12 ">          <button
            onClick={() => setCurrent((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
            className="bg-[#ffd300] hover:bg-[#f9d853] transition-all duration-300 p-2 rounded-full shadow-lg border-2 border-white"
          >
            <svg className="w-3.5 h-3.5 text-[#006b99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % carouselSlides.length)}
            className="bg-[#ffd300] hover:bg-[#f9d853] transition-all duration-300 p-2 rounded-full shadow-lg border-2 border-white"
          >
            <svg className="w-3.5 h-3.5 text-[#006b99]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
};

export default FawryHeaderHero;
