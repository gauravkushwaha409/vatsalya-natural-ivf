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
            className="border-b border-gray-300 transition-all cursor-pointer overflow-hidden select-none pb-1"
          >
            <div
              className="flex justify-between items-center p-3 relative"
              // style={{
              //   borderLeft: openfaq.includes(index)
              //     ? `4px solid #a03879`
              //     : "4px solid #e6c2d8", // Adjust to your secondary color
              //   paddingLeft: "15px",
              // }}
            >
              <h1
                className={`font-bold text-base ${
                  openfaq.includes(index) ? "text-secondary-500" : ""
                } `}
              >
                {faqItem?.question}
              </h1>
              <span className="transition-transform text-2xl">
                {openfaq.includes(index) ? "−" : "+"}
              </span>
            </div>
            <div
              className={`text-sm overflow-hidden transition-all pb-2 ${
                openfaq.includes(index) ? "max-h-auto" : "max-h-0"
              }`}
            >
              {faqItem?.description ? (
                <p className="mt-2 pb-2 pl-3 border-l-2 border-secondary-500 text-text-400 rounded-l-xl">
                  {faqItem?.description}
                </p>
              ) : null}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Faq;
