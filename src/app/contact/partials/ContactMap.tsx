"use client";
import { useContactForm } from "@/hooks/contact/useContact";

const ContactMap = () => {
  const { settingData } = useContactForm();
  const setting = settingData?.data;
  return (
    <section className="overflow-hidden">
      <div className="w-full h-[55vh] transition-all duration-300 ease-out">
        <iframe
          src={setting?.mapUrl}
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
