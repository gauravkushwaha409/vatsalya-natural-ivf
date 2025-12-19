import { getData } from "@/api/axios";
import ContactFaqs from "./partials/ContactFaqs";
import ContactForm from "./partials/ContactForm";
import Contacts from "./partials/Contacts";
import DynamicMap from "./partials/DynamicMap";
import Headings from "./partials/Headings";
import { ISeoRoot } from "@/interface/seo.interface";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
export const dynamic = "force-dynamic";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.contact_us);
  const meta = createMetadata(data);
  return meta;
}
const page = () => {
  return (
    <section className="u-padding-x bg-gradient-to-b from-primary-50 to-background-10 ">
      <Headings />
      <div className="hidden lg:block">
        <Contacts />
      </div>
      <ContactForm />
      <DynamicMap />
      <ContactFaqs />
    </section>
  );
};

export default page;
