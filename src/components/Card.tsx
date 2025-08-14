import React from 'react';
import { useLanguage } from './LanguageContext';

interface CardProps {
    title: string;
    desc: string;
    img_src: string;
    img_alt?: string; // alt text optional
    className?: string; // optional className for additional styling
    color?: string; // optional color prop for text color
}

export default function Card({ title, desc, img_src, img_alt ,className, color }: CardProps) {
    const { t } = useLanguage();
    const translatedTitle = t(title);
    const translatedDesc = t(desc);

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-slef-start mb-6 ${className}`}>
            {/* Text Section */}
            <div className="px-4 md:px-0">
                <h2
                    id={`card-title-${title}`}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-[#ffd300]"
                >
                    {translatedTitle}
                </h2>
                <p
                    className={`text-base sm:text-lg md:text-xl  text-[${color ? color : '#006b99' }] text-justify`}
                    aria-describedby={`card-title-${title}`}
                >
                    {translatedDesc}
                </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center px-4 md:px-0">
                <img
                    src={img_src}
                    alt={img_alt || translatedTitle}
                    className="rounded-lg shadow-lg object-cover w-full h-auto max-w-md"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
