"use client";
import { useState } from "react";

export interface FAQOptions {
  question: string;
  description: string;
  keywords: string[];
}

const Faq: React.FC<{ faq: FAQOptions[] }> = ({ faq }) => {
  const [openFaq, setOpenFaq] = useState<number[]>(
    faq.map((_, index) => index)
  );

  const toggleFaq = (index: number) => {
    if (openFaq.includes(index)) {
      setOpenFaq([]); // Close all
    } else {
      setOpenFaq([index]);
    }
  };

  return (
    <div className="space-y-2">
      {faq?.length > 0 &&
        faq.map((faqItem, index) => {
          const isOpen = openFaq.includes(index);

          return (
            <div
              key={index}
              className="flex pb-1 border-gray-300 border-b overflow-hidden transition-all cursor-pointer select-none"
            >
              {/* Left border indicator */}
              <div className="bg-secondary-500 rounded-r-xl w-1 transition-all duration-300" />

              <div onClick={() => toggleFaq(index)} className="w-full">
                <div className="flex justify-between items-center p-3  ">
                  <h1
                    className={`font-bold text-base  ${
                      isOpen ? "text-secondary-500" : ""
                    }`}
                  >
                    {faqItem?.question}
                  </h1>
                </div>

                {/* Description */}
                <div
                  className={`text-sm overflow-hidden transition-all duration-300 pb-2 ${
                    isOpen ? "max-h-auto" : "max-h-0"
                  }`}
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {faqItem?.description && (
                    <p className="mt-2 pb-2 pl-3 text-text-400 transition-all duration-300">
                      {faqItem?.description}
                    </p>
                  )}
                </div>
              </div>

              {/* + & - */}
              <div className={`text-2xl transition-transform duration-300`}>
                {isOpen ? "−" : "+"}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Faq;
