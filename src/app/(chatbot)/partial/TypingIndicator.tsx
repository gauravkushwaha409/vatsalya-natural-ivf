import Image from "next/image";
import React from "react";
import Bot from "../../../../public/svg/bot-image.svg";

const TypingIndicator: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-seconadry-500 flex items-center justify-center bg-white p-1">
          <Image src={Bot} alt="bot" className="object-contain h-full w-full" />
        </div>
        <div className="typing-indicator">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </>
  );
};

export default TypingIndicator;
