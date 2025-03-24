import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import React from "react";

const contactData = [
  {
    id: 1,
    type: "Phone",
    icon: <FaPhoneAlt className="text-secondary-400" size={20} />,
    label: "Contact No.",
    value: "+977-1-5970611",
  },
  {
    id: 2,
    type: "Email",
    icon: <FaEnvelope className="text-secondary-400" size={24} />,
    label: "Email",
    value: "example@example.com",
  },
  {
    id: 3,
    type: "Location",
    icon: <FaMapMarkerAlt className="text-secondary-400" size={26} />,
    label: "Location",
    value: "Kathmandu, Nepal",
  },
  {
    id: 4,
    type: "Workday",
    icon: <FaClock className="text-secondary-400" size={26} />,
    label: "Workday",
    value: "Mon-Fri: 9 AM - 5 PM",
  },
];

const Contacts = () => {
  return (
    <section className="flex justify-center items-center gap-20 pb-10">
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
