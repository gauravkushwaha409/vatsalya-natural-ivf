"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/data/faqData";

interface FAQItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQAccordion() {
  return (
    <div className="max-w-5xl mx-auto">
      {faqItems.map((item, index) => (
        <FAQItem key={index} item={item} />
      ))}
    </div>
  );
}

function FAQItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(item.defaultOpen || false);

  return (
    <div className="border-b border-secondary-50 rounded-t-lg bg-[#FDFDFD] p-3 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          {isOpen ? (
            <div className="w-1 h-20 bg-secondary-500 transition-all duration-300 rounded-t-none rounded-r-[20px] rounded-l-none "></div>
          ) : (
            <div className="w-1 h-8 bg-secondary-50 transition-all duration-300"></div>
          )}

          <div className="mx-4">
            <h3
              className={`typography-paragraph-regular${
                isOpen ? "text-secondary-500" : "text-text-400"
              }`}
            >
              {item.question}
            </h3>
            {isOpen && (
              <div className="pt-1">
                <p className="text-text-400 ">{item.answer}</p>
              </div>
            )}
          </div>
        </div>
        <span className="mr-2 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-6 w-6 -mt-14 text-secondary-500" />
          ) : (
            <Plus className="h-6 w-6 text-text-400" />
          )}
        </span>
      </button>
    </div>
  );
}
