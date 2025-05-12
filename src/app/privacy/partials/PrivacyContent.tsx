import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { TermResponse } from "@/app/terms/interfaces/Term.type";

const PrivacyContent = async () => {
  const privacy = await getData<TermResponse>(endpoints.privacy);

  return (
    <div>
      <div className="pb-10 padding">
        {/* here goes rich text  */}

        {/* Introduction */}
        <p className="font-medium text-text-400 text-justify leading-[150%] typography-paragraph-large">
          {privacy.data.title}
        </p>
        <div
          className="py-4"
          dangerouslySetInnerHTML={{ __html: privacy.data.content }}
        />
        {/* Dynamic Sections */}
        {/* {termsData.sections.map((section) => (
          <section key={section.id} className="mt-8">
            <h2 className="font-semibold text-text-500 leading-[150%] typography-h3">
              {section.title}
            </h2>
            <p className="font-medium text-text-400 text-justify leading-[150%] typography-paragraph-large">
              {section.content}
            </p>
            {section.listItems && (
              <ul className="space-y-2 mt-2 pl-6 list-disc">
                {section.listItems.map((item, index) => (
                  <li
                    key={index}
                    className="font-medium text-text-400 text-justify leading-[150%] typography-paragraph-large"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))} */}

        {/* Contact Information */}
        {/* <section className="mt-8">
          <h2 className="font-semibold text-text-500 leading-[150%] typography-h3">
            8. Contact Information
          </h2>
          <p className="font-medium text-text-400 text-justify leading-[150%] typography-paragraph-large">
            If you have any questions about these Terms, please contact us at:
          </p>
          <address className="mt-2 not-italic">
            <p className="font-medium text-text-400 text-justify leading-[150%] typography-paragraph-large">
              Phone: {termsData.contactInfo.phone}
            </p>
          </address>
        </section> */}
      </div>
    </div>
  );
};

export default PrivacyContent;
