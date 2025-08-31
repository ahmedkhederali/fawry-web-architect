import React from "react";

interface JustifiedTextProps {
  text: string;
  chunkSize?: number; // default 200
}

const JustifiedText: React.FC<JustifiedTextProps> = ({ text, chunkSize = 200 }) => {
  // نقسم النص chunks
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }

  return (
    <div className="text-justify leading-relaxed">
      {chunks.map((chunk, idx) => (
        <p key={idx} className="mb-4">
          {chunk}
        </p>
      ))}
    </div>
  );
};

export default JustifiedText;
