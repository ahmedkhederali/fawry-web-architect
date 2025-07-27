import React from "react";

const AboutHeroSection = () => (
  <section className="bg-gray-50 py-[7rem]">
    <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 px-4">
      {/* Text Section */}
      <div className="flex-1 max-w-3xl space-y-6">
    
        <div>
          <h2 className="text-xl font-semibold text-[#ffd300] mb-1">Mission</h2>
          <p className="text-[#00699c] leading-relaxed ">
            Teaming with clients to improve their business, protect and enhance enterprise value by identifying, anticipating, and solving critical business challenges.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#ffd300] mb-1">Vision</h2>
          <p className="text-[#00699c] leading-relaxed">
            Enabling the Enterprises by Digital Transformation in the MENA region.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[#ffd300] mb-2">Values</h2>
          <ul className="space-y-4 text-[#00699c] list-disc pl-5">
            <li>
              <strong className="text-[#f36c26]">Digital Pioneering:</strong> 
              <h1 className="text-[#00699c]">
                We lead the charge into the digital frontier, daring to explore uncharted territories in technology and innovation to redefine business possibilities.
              </h1>
            </li>
            <li>
              <strong className="text-[#f36c26]">Empowerment Through Transformation:</strong> 
              <h1 className="text-[#00699c]">
                We believe in the transformative power of technology, empowering our clients to not just adapt but thrive in their digital journeys, unlocking their full potential.
              </h1>
            </li>
            <li>
              <strong className="text-[#f36c26]">Synergy of Minds:</strong> 
              <h1 className="text-[#00699c]">
                Collaboration is our superpower. We harness diverse perspectives and expertise, creating a vibrant ecosystem where ideas flourish and every voice contributes to our collective success.
              </h1>
            </li>
            <li>
              <strong className="text-[#f36c26]">Sustainable Innovation:</strong> 
              <h1 className="text-[#00699c]">
                We are committed to creating solutions that not only drive business success but also promote sustainability, ensuring a better future for generations to come.
              </h1>
            </li>
            <li>
              <strong className="text-[#f36c26]">Connected & Belong:</strong> 
              <h1 className="text-[#00699c]">
                We cultivate a supportive and inclusive environment where every team member feels valued and connected. Together, we celebrate successes, learn from challenges, and foster a sense of belonging that strengthens our collective mission.
              </h1>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        
      </div>
    </div>
  </section>
);

export default AboutHeroSection;
