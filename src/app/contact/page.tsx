import React from "react";
import Headings from "./partials/Headings";
import Contacts from "./partials/Contacts";
import ContactForm from "./partials/ContactForm";
import Locations from "./partials/Locations";
import ContactMap from "./partials/ContactMap";
import ContactFaqs from "./partials/ContactFaqs";
import { useContactForm } from "@/hooks/contact/useContact";

const page = () => {
  return (
    <section className="padding bg-background-100 ">
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
