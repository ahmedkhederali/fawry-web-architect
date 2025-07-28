import React, { useState, useEffect } from "react";

const carouselImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=1200",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=1200",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=1200",
];

const FawryHeaderHero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden bg-[#006b99]">
      {/* Yellow Side */}
      <div
        className="relative flex flex-col justify-between bg-[#ffd300] py-10 z-10"
        style={{
          width: "55%",
          borderBottomRightRadius: "120px",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-10 px-8">
			<img
			    src="https://www.diracsystems.com/wp-content/uploads/2023/08/logo-Dirac-fawry-3.png"
			    alt="Dirac Systems"
			    className="h-8 w-auto"
			  />          <nav className="hidden md:flex gap-10 relative ml-auto mr-[30%]   md:mr-[16%]">
            <a href="/" className="text-[#0074d9] font-medium hover:underline">
              Home
            </a>

            {/* About Us Dropdown */}
            <div className="relative group">
              
              <span className="cursor-pointer text-[#0074d9] font-medium">
                
                <a href="/about" className="block">
                  About Us
                </a>
              </span>
              <div
                className="absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300"
                style={{ backgroundColor: "#0074d9" }}
              >
                <a href="/career" className="block py-2 px-4 text-[#fff] hover:text-[#00699c] hover:bg-[#fff]">
                  Career
                </a>
                <a href="/our_clients" className="block py-2 text-[#fff] px-4 hover:text-[#00699c] hover:bg-[#fff]">
                  Our Clients
                </a>
                <a href="/our_partner" className="block py-2 text-[#fff] px-4 hover:text-[#00699c] hover:bg-[#fff]">
                  Our Partners
                </a>
              </div>
            </div>

            <a
              href="/products"
              className="text-[#0074d9] font-medium hover:underline"
            >
              Products
            </a>
            <a
              href="/blog"
              className="text-[#0074d9] font-medium hover:underline"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* Hero Text */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-6 leading-tight">
            Insurance for the
            <br />
            digital revolution
          </h1>
          <p className="text-base md:text-lg text-[#222] mb-8 max-w-md">
            Protect your communities and offer them exclusive insurance
            products.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#0074d9] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#005fa3] transition">
              Get a Quote
            </button>
            <button className="bg-white text-[#0074d9] border border-[#0074d9] px-6 py-3 rounded-md font-semibold shadow hover:bg-[#ffe066] transition"
             onClick={() => {
              const link = document.createElement("a");
              link.href = "/files/Dirac_Co.Profile.pdf";
              link.download = "CompanyProfile.pdf"; // name for the downloaded file
              link.click();
            }}
            >
              Download Company Profile
            </button>
          </div>
        </div>
      </div>

      {/* Blue Side */}
      <div className="relative flex flex-col items-center justify-center w-full md:w-[45%] mt-8 md:mt-0">
        <div className="absolute top-5 right-8 text-white font-semibold">
          +20 123-456-789
        </div>

        {/* Carousel */}
        <div className="relative w-[90%] h-[300px] md:w-[125%] md:h-[300px]  flex items-center justify-center overflow-hidden rounded-tl-[80px] shadow-2xl bg-white z-20 xl:h-[450px]">
          <img
            src={carouselImages[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full border border-[#0074d9] ${current === idx ? "bg-[#0074d9]" : "bg-white"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-6">
          <button
            onClick={() =>
              setCurrent(
                (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
              )
            }
            className="bg-white text-[#0074d9] p-3 rounded-full border border-[#ffd300] shadow hover:bg-[#ffe066] z-30"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={() =>
              setCurrent((prev) => (prev + 1) % carouselImages.length)
            }
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
