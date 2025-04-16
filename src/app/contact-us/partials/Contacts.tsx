"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import React from "react";
import { useContactForm } from "@/hooks/contact/useContact";

const Contacts = () => {
  const { settingData } = useContactForm();
  const setting = settingData?.data;

  const contactData = [
    {
      id: 1,
      type: "Phone",
      icon: <FaPhoneAlt className="text-secondary-400" size={20} />,
      label: "Contact No.",
      value: setting?.phoneNumber?.join(", "),
    },
    {
      id: 2,
      type: "Email",
      icon: <FaEnvelope className="text-secondary-400" size={24} />,
      label: "Email",
      value: setting?.email?.join(", "),
    },
    {
      id: 3,
      type: "Location",
      icon: <FaMapMarkerAlt className="text-secondary-400" size={26} />,
      label: "Location",
      value: setting?.location,
    },
    {
      id: 4,
      type: "Workday",
      icon: <FaClock className="text-secondary-400" size={26} />,
      label: "Workday",
      value: `${setting?.openingDays}: ${setting?.openingHours}`,
    },
  ];
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 justify-start  gap-10 lg:gap-2 pb-10">
      {contactData?.map(({ id, icon, label, value }) => (
        <div
          key={id}
          className="flex flex-col justify-center items-center gap-1"
        >
          <div className="bg-secondary-200/40 h-12 w-12 rounded-full  flex justify-center items-center">
            {icon}
          </div>
          <span className="text-secondary-600 font-semibold mt-2">{label}</span>
          <span className="text-text-400 typography-paragraph-regular">
            {value}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Contacts;
