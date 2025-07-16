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
        <h1 className="text-3xl font-bold mb-10 text-secondary text-center">Our Products</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h2 className="text-xl font-semibold mb-2 text-secondary">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Product;