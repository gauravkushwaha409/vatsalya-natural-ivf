import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IClinicDetailsData } from "../interface/clinicDetails.interface";
import Link from "next/link";
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
      type: "Location",
      icon: <FaMapMarkerAlt className="text-secondary-400" size={26} />,
      label: "Location",
      value: data?.location,
    },
  ];
  return (
    <section className="bg-gradient-to-r from-[#EBC0DB] to-primary-100 padding py-10 lg:py-20 flex flex-col lg:flex-row gap-5 lg:gap-10">
      <div className="space-y-6 w-full lg:w-1/2 ">
        <div className="flex items-center w-full  gap-4 ">
          <h2 className="text-primary-500 uppercase tracking-widest text-base leading-[150%] font-bold">
            Contact Us
          </h2>
          <div className="h-px bg-primary-500 flex-1 max-w-[148px]"></div>
        </div>
        <h2 className="typography-h2 font-semibold text-text-500 ">
          Take your first step towards parenthood with Kathmandu’s No.1
          Fertility Center
        </h2>

        <div className="flex justify-between px-5  pb-10">
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
          src={data?.mapUrl}
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
