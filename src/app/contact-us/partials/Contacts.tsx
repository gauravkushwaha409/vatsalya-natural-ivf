"use client";
import { useContactForm } from "@/hooks/contact/useContact";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contacts = () => {
  const { settingData } = useContactForm();
  const setting = settingData?.data;

  const contactData = [
    {
      id: 1,
      type: "Phone",
      icon: <FaPhoneAlt className="text-secondary-400" size={20} />,
      label: "Contact No.",
      link: setting?.phoneNumber && `tel:${setting?.phoneNumber[0]}`,
      value: setting?.phoneNumber?.join(", "),
    },
    {
      id: 2,
      type: "Email",
      icon: <FaEnvelope className="text-secondary-400" size={24} />,
      label: "Email",
      link: setting?.email && `mailto:${setting?.email[0]}`,
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
    <section className="justify-start gap-10 lg:gap-2 grid grid-cols-2 lg:grid-cols-4 pb-10">
      {contactData?.map(({ id, icon, label, value, link }) => (
        <div
          key={id}
          className="flex flex-col justify-center items-center gap-1"
        >
          <div className="flex justify-center items-center bg-secondary-200/40 rounded-full w-12 h-12">
            {icon}
          </div>
          <span className="mt-2 font-semibold text-secondary-600">{label}</span>
          {link ? (
            <Link
              href={link}
              target="_blank"
              className="text-text-400 typography-paragraph-regular"
            >
              {value}
            </Link>
          ) : (
            <span className="text-text-400 typography-paragraph-regular">
              {value}
            </span>
          )}
        </div>
      ))}
    </section>
  );
};

export default Contacts;
