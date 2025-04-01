"use client";
import { useState } from "react";

export interface FAQOptions {
  question: string;
  description: string;
  keywords: string[];
}

const Faq: React.FC<{
  faq: FAQOptions[];
}> = ({ faq }) => {
  const [openfaq, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    if (openfaq.includes(index)) {
      setOpenFaqs([]); // close it
    } else {
      setOpenFaqs([index]);
    }
  };

  return (
    <div className="space-y-2">
      {faq?.length > 0 &&
        faq?.map((faqItem, index) => (
          <div
            key={index}
            onClick={() => toggleFaq(index)}
            className="flex pb-1 border-gray-300 border-b overflow-hidden transition-all cursor-pointer select-none"
          >
            <div className="bg-secondary-500 rounded-r-xl w-1 transition-all duration-300" />
            <div>
              <div className="relative flex justify-between items-center p-3">
                <h1
                  className={`font-bold text-base ${
                    openfaq.includes(index) ? "text-secondary-500" : ""
                  } `}
                >
                  {faqItem?.question}
                </h1>
                <span className="text-2xl transition-transform">
                  {openfaq.includes(index) ? "−" : "+"}
                </span>
              </div>
              <div
                className={`text-sm overflow-hidden transition-all pb-2 ${
                  openfaq.includes(index) ? "max-h-auto" : "max-h-0"
                }`}
              >
                {faqItem?.description ? (
                  <p className="mt-2 pb-2 pl-3 text-text-400">
                    {faqItem?.description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Faq;
