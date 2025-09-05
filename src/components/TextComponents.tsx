import React from "react";

interface JustifiedTextProps {
  text: string;
}

const JustifiedText: React.FC<JustifiedTextProps> = ({ text }) => {
  // Split the text into paragraphs based on double newlines
  const paragraphs = text.split(/\n\s*\n/).filter((para) => para.trim() !== "");

  // Function to process only the first paragraph for the first 3 words
  const processFirstParagraph = (para: string) => {
    const words = para.trim().split(/\s+/);
    if (words.length >= 3) {
      const boldPart = words.slice(0, 3).join(" ");
      const rest = words.slice(3).join(" ");
      return (
        <>
          <span className="font-bold text-[#006b99]">{boldPart}</span>{" "}
          {rest}
        </>
      );
    }
    return para; // Return unchanged if less than 3 words
  };

  return (
    <div className="max-w-3xl mx-auto">
      {paragraphs.map((para, idx) => (
        <p
          key={idx}
          className={`mb-4 text-lg text-justify ${
            idx % 2 === 0 ? "text-gray-700" : "text-gray-700]"
          }`}
        >
          {idx === 0 ? processFirstParagraph(para) : para.trim()}
        </p>
      ))}
    </div>
  );
};

export default JustifiedText;