import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "ERP Solution",
    description: "A comprehensive ERP platform to manage your business operations, finance, HR, and more.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
  },
  {
    id: 2,
    name: "Payment Gateway",
    description: "Secure and scalable payment gateway for online businesses and e-commerce platforms.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
  },
  {
    id: 3,
    name: "API Integration",
    description: "Robust APIs to connect your business systems and automate workflows.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
  },
];

const Product = () => (
  <>
   <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-10 text-center mt-4">
      <span className="bg-gradient-to-r from-[#ffd300] to-[#006b99] bg-clip-text text-transparent">
        Business Line
      </span>
    </h1>

    <div className="grid md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition h-[350px]"
        >
          {/* Image fills entire card */}
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-blue-900/60 hover:bg-blue-900/80 transition-opacity"></div>

          {/* Text content over image */}
          <div className="absolute bottom-0 left-0 p-4 z-10 text-white">
            <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  </>
);

export default Product;