import Link from "next/link";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IClinicDetailsData } from "../interface/clinicDetails.interface";
interface IContactUsProps {
  data: IClinicDetailsData;
}
const ContactUs: React.FC<IContactUsProps> = ({ data }) => {
  const contactData = [
    {
      id: 1,
      type: "Phone",
      icon: <FaPhoneAlt className="text-secondary-400" size={20} />,
      label: "Contact No.",
      link: data?.phone && `tel:${data?.phone}`,
      value: data?.phone,
    },
    {
      id: 2,
      type: "Email",
      icon: <FaEnvelope className="text-secondary-400" size={24} />,
      label: "Email",
      link: data?.email && `mailto:${data?.email}`,
      value: data?.email,
    },
    {
      id: 3,
      type: "Address",
      icon: <FaMapMarkerAlt className="text-secondary-400" size={26} />,
      label: "Location",
      value: data?.location,
    },
  ];
  return (
    <section className="flex lg:flex-row flex-col gap-5 lg:gap-10 bg-gradient-to-r from-[#EBC0DB] to-primary-100 py-10 lg:py-20 padding">
      <div className="space-y-6 w-full lg:w-1/2">
        <div className="flex items-center gap-4 w-full">
          <h2 className="font-bold text-primary-500 text-base uppercase leading-[150%] tracking-widest">
            Contact Us
          </h2>
          <div className="flex-1 bg-primary-500 max-w-[148px] h-px"></div>
        </div>
        <h2 className="font-semibold text-text-500 typography-h2">
          {data?.contactUsTitle}
        </h2>

        <div className="flex justify-between px-5 pb-10">
          {contactData?.map(({ id, icon, label, value, link }) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center gap-1"
            >
              <div className="flex justify-center items-center bg-[#FFECF87A] rounded-full w-12 h-12">
                {icon}
              </div>
              <span className="mt-2 font-semibold text-secondary-600">
                {label}
              </span>
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
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-auto">
        <iframe
          title="Google Map"
          src={data?.mapUrl}
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
