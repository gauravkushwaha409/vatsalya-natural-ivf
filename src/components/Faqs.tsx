"use client";
import { useEffect, useState } from "react";

export interface FAQOptions {
  question: string;
  answer?: string;
  description?: string;
  keywords?: string[];
}

const Faq: React.FC<{ faq: FAQOptions[] }> = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-2">
      {faq?.map((faqItem, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
            aria-label={`Toggle FAQ ${index}`}
            className="flex pb-1 overflow-hidden transition-all border-b border-gray-300 cursor-pointer select-none"
            onClick={() => toggleFaq(index)}
          >
            <div
              className={`rounded-r-xl w-1 transition-all duration-300 ${
                isOpen ? "bg-secondary-500" : "bg-gray-300"
              }`}
            />

            <div className="w-full">
              <div className="flex items-center justify-between p-3">
                <p
                  className={`font-bold text-base transition-colors duration-300 ${
                    isOpen ? "text-secondary-500" : ""
                  }`}
                >
                  {faqItem.question}
                </p>

                <span
                  className="ml-4 text-2xl cursor-pointer select-none"
                  aria-label={`Toggle FAQ ${index}`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Answer Section */}
              <div
                className="pl-3 pr-4 overflow-hidden text-sm transition-all duration-300"
                style={{
                  maxHeight: isOpen ? "300px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {faqItem.answer && (
                  <p
                    className="pb-2 transition-all duration-300 text-text-400"
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
