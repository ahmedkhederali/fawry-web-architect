import { useLanguage } from "@/components/LanguageContext";
import React from "react";

const HeaderSection = () => {
   const { t } = useLanguage();
  return (
    <div className="w-full min-h-screen bg-white ">
 <section className="w-full bg-[#006b99] text-white mt-10 pt-5 md:pt-20 pb-8 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
       <div className="md:w-1/2 relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-[#ffd400] drop-shadow-lg">
        {t("aboutUs")}
      </h1>
      <p className="text-lg mb-6 leading-relaxed tracking-wide text-white text-justify">
        {t("about_desc")}
      </p>
    </div>

    {/* Right side image */}
    <div className="md:w-1/2">
      <img
        src="/images/about.png"
        alt="about illustration"
        className=" h-[300px] rounded-xl shadow-2xl  w-full  contain-content transform"
       // className="rounded-xl shadow-2xl w-full max-h-[400px] object-cover transform "
        style={{ perspective: "1200px" }}
      />
    </div>
  
        </div>
      </section>
  {/* Title section unchanged */}
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-[#006b99] my-6 mb-2">ABOUT US</h1>
    <div className="w-24 h-1 bg-[#FFD300] mx-auto rounded-full"></div>
  </div>

  {/* Updated content wrapper */}
  <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6 px-4">
    <p className="text-lg text-justify">
      <span className="font-bold text-2xl text-[#FFD300]">Dirac Systems:</span> <br />
      is a leading Egyptian shareholder company specializing in advanced strategic business software solutions that drive digital transformation across various organizations. Established in 
      <span className="font-medium text-[#006b99]"> 2014</span>, with a capital of 
      <span className="font-medium text-[#006b99]"> 30 million EGP</span>, DIRAC has quickly positioned itself as a pivotal player in the region's technology landscape. As a subsidiary of 
      <span className="font-medium text-[#006b99]"> Fawry for Banking Technology and Electronic Payments S.A.E</span>, DIRAC leverages robust financial backing to innovate and expand its offerings.
    </p>

    <p className="text-lg text-justify">
      At the forefront of digital transformation, DIRAC provides a comprehensive suite of 
      <span className="font-medium text-[#006b99]"> Enterprise Resource Planning (ERP)</span> solutions designed to enhance performance, efficiency, and competitiveness for businesses.
    </p>

    <p className="text-lg text-justify mb-4">
      As we continue to expand our offerings—including the recent launches of the 
      <span className="font-medium text-[#006b99]"> Fawry Business HR and Accounting systems</span>—DIRAC Systems remains focused on empowering businesses to improve products, enhance customer experiences, and enter new markets. 
      <span className="font-medium text-[#006b99]"> Join us as we transform the future of business through cutting-edge digital solutions.</span>
    </p>
  </div>
</div>

  );
};

export default HeaderSection;
