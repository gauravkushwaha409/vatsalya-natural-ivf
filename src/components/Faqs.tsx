"use client";
import { useState, useEffect } from "react";

export interface FAQOptions {
  question: string;
  answer?: string;
  description?: string;
  keywords?: string[];
}

const Faq: React.FC<{ faq: FAQOptions[] }> = ({ faq }) => {
  const [openFaq, setOpenFaq] = useState<number[]>([]);

  useEffect(() => {
    if (faq?.length > 0) {
      setOpenFaq(faq.map((_, index) => index));
    }
  }, [faq]);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-2">
      {faq?.map((faqItem, index) => {
        const isOpen = openFaq.includes(index);

        return (
          <div
            key={index}
            className="flex pb-1 border-b border-gray-300 overflow-hidden transition-all cursor-pointer select-none"
            onClick={() => toggleFaq(index)}
          >
            <div className="bg-secondary-500 rounded-r-xl w-1 transition-all duration-300" />

            <div className="w-full">
              <div className="flex justify-between items-center p-3">
                <h1
                  className={`font-bold text-base ${
                    isOpen ? "text-secondary-500" : ""
                  }`}
                >
                  {faqItem.question}
                </h1>

                <span
                  className="text-2xl ml-4 focus:outline-none cursor-pointer"
                  aria-label={`Toggle FAQ ${index}`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              <div
                className={`text-sm overflow-hidden transition-all duration-300 pl-3 pr-4`}
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {faqItem.answer && (
                  <p
                    className="mt-2 pb-2 text-text-400 transition-all duration-300"
                    dangerouslySetInnerHTML={{ __html: faqItem.answer }}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
