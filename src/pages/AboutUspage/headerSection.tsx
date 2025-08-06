import React from "react";

const HeaderSection = () => {
  return (
     <div className="w-full p-10 md:p-12 lg:p-16 bg-white">
      {/* Add this title section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#006b99] my-6 mb-2">ABOUT US</h1>
        <div className="w-24 h-1 bg-[#FFD300] mx-auto rounded-full"></div>
      </div>

      <div className="prose prose-lg">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            <span className="font-bold text-2xl text-[#FFD300] mb-8">Dirac Systems:</span> <br/> is a leading Egyptian shareholder company
            specializing in advanced strategic business software solutions that drive digital transformation across
            various organizations. Established in <span className="font-medium text-[#006b99]">2014</span>, with a
            capital of <span className="font-medium text-[#006b99]">30 million EGP</span>, DIRAC has quickly positioned
            itself as a pivotal player in the region's technology landscape. As a subsidiary of{" "}
            <span className="font-medium text-[#006b99]">
              Fawry for Banking Technology and Electronic Payments S.A.E
            </span>
            , DIRAC leverages robust financial backing to innovate and expand its offerings.
          </p>

          <p className="text-lg">
            At the forefront of digital transformation, DIRAC provides a comprehensive suite of{" "}
            <span className="font-medium text-[#006b99]">Enterprise Resource Planning (ERP)</span> solutions designed
            to enhance performance, efficiency, and competitiveness for businesses.
          </p>

          <p className="text-lg">
            As we continue to expand our offerings—including the recent launches of the{" "}
            <span className="font-medium text-[#006b99]">Fawry Business HR and Accounting systems</span>—DIRAC Systems
            remains focused on empowering businesses to improve products, enhance customer experiences, and enter new
            markets.{" "}
            <span className="font-medium text-[#006b99]">
              Join us as we transform the future of business through cutting-edge digital solutions.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
