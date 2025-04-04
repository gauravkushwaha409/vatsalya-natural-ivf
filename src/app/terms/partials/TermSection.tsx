import { termsData } from "@/data/termsData";
import React from "react";

const TermSection = () => {
  return (
    <div className="pb-10">
      <div className="padding">
        {/* here goes rich text  */}

        {/* Introduction */}
        <p className="text-text-400 typography-paragraph-large font-medium leading-[150%] text-justify">
          {termsData.introduction}
        </p>

        {/* Dynamic Sections */}
        {termsData.sections.map((section) => (
          <section key={section.id} className="mt-8">
            <h2 className="typography-h3 text-text-500 font-semibold leading-[150%]">
              {section.title}
            </h2>
            <p className="text-text-400 typography-paragraph-large font-medium leading-[150%] text-justify">
              {section.content}
            </p>

            {/* Render List If Present */}
            {section.listItems && (
              <ul className="list-disc pl-6 mt-2 space-y-2">
                {section.listItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-text-400 typography-paragraph-large font-medium leading-[150%] text-justify"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Contact Information */}
        <section className="mt-8">
          <h2 className="typography-h3 text-text-500 font-semibold leading-[150%]">
            8. Contact Information
          </h2>
          <p className="text-text-400 typography-paragraph-large font-medium leading-[150%] text-justify">
            If you have any questions about these Terms, please contact us at:
          </p>
          <address className="not-italic mt-2">
            <p className="text-text-400 typography-paragraph-large font-medium leading-[150%] text-justify">
              Phone: {termsData.contactInfo.phone}
            </p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default TermSection;
