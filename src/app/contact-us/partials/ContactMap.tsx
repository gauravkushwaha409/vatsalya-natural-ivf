"use client";
import { useContactForm } from "@/hooks/contact/useContact";
import React from "react";

interface ContactMapProps {
  mapUrl: string | null;
}

const ContactMap: React.FC<ContactMapProps> = ({ mapUrl }) => {
  const { settingData } = useContactForm();
  const setting = settingData?.data;
  const defaultUrl = setting?.mapUrl;

  return (
    <section className="overflow-hidden">
      <div className="w-full h-[55vh] transition-all duration-300 ease-out">
        <iframe
          title="Google Map"
          src={mapUrl || defaultUrl}
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
