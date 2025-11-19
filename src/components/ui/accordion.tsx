"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-3 flex items-center justify-between text-left focus:outline-none"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h3 className="font-extrabold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.18rem] typography-paragraph-regular">
          {title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-3" : "max-h-0"
        }`}
      >
        <div className="space-y-3 text-text-400 typography-paragraph-regular">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
