import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../components/LanguageContext";
import { blogPosts } from "@/lib/solutionsData";
import { MapPin } from "lucide-react";


export default function BlogDetails() {
    const { id } = useParams();
    const post = blogPosts.find((s) => s.id === Number(id));
    const { language } = useLanguage();

    if (!post) return <p>Blog not found</p>;

    const isArabic = language === "ar";

    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-16">
                {/* Main Blog Section */}
                <div
                    className={`grid md:grid-cols-2 gap-8 items-center mb-16 ${isArabic ? "direction-rtl" : ""
                        }`}
                >
                    {/* Text */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-secondary">{post.title}</h1>
                        <p className="text-gray-600 mb-4">
                            {new Date(post.date).toLocaleDateString()} - {post.author}
                        </p>
                        <p className="leading-relaxed">{post.full_desc}</p>
                        <div className="flex items-center gap-1 text-gray-500 mt-5">
                            <MapPin size={16} />
                            {post.location || "Unknown Location"}
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <img
                            src={post.image}
                            alt={post.title}
                            className="rounded-lg shadow-lg w-full object-cover"
                        />
                    </div>
                </div>

                {/* Gallery Section */}
                <h2 className="text-2xl font-bold mb-6">
                    {isArabic ? "صور من الفعاليات" : "Event Highlights"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {post.gallery.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Gallery ${index}`}
                            className="rounded-lg shadow-md object-cover w-full h-48"
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
