import React from "react";
import { Link } from "react-router-dom";

const AboutUsPage = () => (
  <section className="bg-[#f7fafd] min-h-[420px] flex items-center justify-center py-16">
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
      {/* Left: Text */}
      <div className="flex-1 max-w-lg">
        <p className="uppercase text-sm text-gray-500 font-semibold mb-2">Our People</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Creating a community<br />for impact
        </h2>
        <p className="text-gray-700 mb-8">
          Shopify has grown from 5 people in a coffee shop to over 5,000 across the globe. With over 1,000,000 businesses powered by Shopify, we care deeply about the work we do. We’re constant learners who thrive on change and seek to have an impact in everything we do.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#0074d9] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#005fa3] transition"
        >
          Back to Home
        </Link>
      </div>

      {/* Right: Image/Video */}
      <div className="flex-1 flex justify-center">
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white w-[340px] h-[360px] flex items-center justify-center">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero-people@desktop-2d2992c5f6bcf9d6a7c8b12b2a1e3b28e6a2a3de8ebc7e5e2ad7b3a5a6a60c5e.jpg"
            alt="Our Community"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-xl hover:bg-gray-100 transition border border-gray-200 flex items-center justify-center">
            <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="14" fill="#fff"/>
              <polygon points="11,9 20,14 11,19" fill="#0074d9"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsPage;