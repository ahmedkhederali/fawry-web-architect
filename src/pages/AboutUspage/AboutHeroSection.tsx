import React from "react";

const AboutHeroSection = () => (
  <section className="bg-gray-50 py-[7rem]">
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
      {/* Text Section */}
      <div className="flex-1 max-w-xl">
        <p className="uppercase text-xs font-semibold text-gray-500 mb-2">Our People</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Creating a community<br />for impact
        </h1>
        <p className="text-gray-600 text-lg">
          Shopify has grown from 5 people in a coffee shop to over 5,000 across the globe. With over 1,000,000 businesses powered by Shopify, we care deeply about the work we do. We’re constant learners who thrive on change and seek to have an impact in everything we do.
        </p>
      </div>
      {/* Video/Image Section */}
      <div className="flex-1 flex justify-center">
        <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-md aspect-video bg-gray-200">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            className="w-full h-full object-cover"
            poster="https://cdn.shopify.com/shopifycloud/brochure/assets/impact/our-people@desktop-2e7e2e2e8b3e6e3e3e3e3e3e3e3e3e3e.jpg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutHeroSection;