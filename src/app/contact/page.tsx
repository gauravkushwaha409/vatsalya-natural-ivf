import React from "react";
import Headings from "./partials/Headings";
import Contacts from "./partials/Contacts";
import ContactForm from "./partials/ContactForm";
import Locations from "./partials/Locations";
import ContactMap from "./partials/ContactMap";
import ContactFaqs from "./partials/ContactFaqs";

const page = () => {
  return (
    <section className="container mx-auto padding bg-background-100 ">
      <Headings />
      <Contacts />
      <ContactForm />
      <Locations />
      <ContactMap />
      <ContactFaqs />
    </section>
  );
};

export default page;
