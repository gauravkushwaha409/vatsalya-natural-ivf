import { termsData } from "@/data/termsData";
import React from "react";

const CareerTextContent = () => {
  return (
    <div>
      <div className="padding pb-10">
        <div className="border-t border-t-secondary-200 py-4"></div>
        {/* Introduction */}
        <h2 className="text-[#282828]  pb-2.5 font-inter text-[20px] leading-[32px] font-medium ">
          Overview
        </h2>

        <p className="text-[#424940] font-inter font-normal leading-[20px] text-justify">
          {termsData.introduction}
        </p>

        {/* Dynamic Sections */}
        {termsData.sections.map((section) => (
          <section key={section.id} className="mt-8">
            <h2 className="text-[#282828]  pb-2.5 font-inter text-[20px] leading-[32px] font-medium ">
              {section.title}
            </h2>
            <p className="text-[#424940] font-inter font-normal leading-[20px] text-justify">
              {section.content}
            </p>

            {/* Render List If Present */}
            {section.listItems && (
              <ul className="list-disc pl-6 mt-2 space-y-2">
                {section.listItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#424940] font-inter font-normal leading-[20px] text-justify"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default CareerTextContent;
