import ContactFaqs from "./partials/ContactFaqs";
import ContactForm from "./partials/ContactForm";
import Contacts from "./partials/Contacts";
import DynamicMap from "./partials/DynamicMap";
import Headings from "./partials/Headings";
export const dynamic = "force-dynamic";

const page = () => {
  return (
    <section className="padding bg-background-100 ">
      <Headings />
      <Contacts />
      <ContactForm />
      <DynamicMap />
      <ContactFaqs />
    </section>
  );
};

export default page;
