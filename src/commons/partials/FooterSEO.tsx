"use client";
import { motion } from 'motion/react';
import Link from "next/link";
import { useState } from "react";
import { BsArrowsExpand } from 'react-icons/bs';
import { ImShrink2 } from "react-icons/im";


const seoData = [
  {
    text: "Branches",
    items: [
      { text: "Biratnagar", link: "#" },
      { text: "Nepalgunj", link: "#" },
      { text: "Kathmandu", link: "#" },
      { text: "Pokhara", link: "#" },
      { text: "Bharatpur", link: "#" },
      { text: "Butwal", link: "#" },
      { text: "Lalitpur", link: "#" },
      { text: "Chitwan", link: "#" },
      { text: "Jhapa", link: "#" },
    ],
  },
  {
    text: "Fertility",
    items: [
      { text: "Female Infertility Treatment", link: "#" },
      { text: "IVF", link: "#" },
      { text: "Andrology Treatment", link: "#" },
      { text: "Fertility Clinics", link: "#" },
      { text: "IVF Centers", link: "#" },
      { text: "Egg Freezing Facilities", link: "#" },
      { text: "Surrogacy Support Homes", link: "#" },
      { text: "Prenatal Care Suites", link: "#" },
      { text: "Holistic Fertility Retreats", link: "#" },
      { text: "Reproductive Health Pharmacies", link: "#" },
      { text: "Donor Egg Banks", link: "#" },
      { text: "Lab & Genetic Testing Centers", link: "#" },
      { text: "Fertility Getaways", link: "#" },
      { text: "Coastal Healing Retreats", link: "#" },
      { text: "Mountain Fertility Lodges", link: "#" },
      { text: "Urban Wellness Suites", link: "#" },
      { text: "Fertility Co-Consulting Spaces", link: "#" },
      { text: "Shared Therapy Rooms", link: "#" },
      { text: "Drop-in Counseling Booths", link: "#" },
      { text: "Postnatal Recovery Residences", link: "#" },
      { text: "Fertility Studio Rooms", link: "#" },
      { text: "Shared Recovery Dorms", link: "#" },
    ],
  },
];
const FooterSeo = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className="bg-primary-100 padding">
      <div className="flex justify-between items-center">
        <p className="mt-5 font-medium text-black-300 text-secondary-500 typography-paragraph-large">
          Important Links
        </p>
        <button
          onClick={() => setIsHidden((prev) => !prev)}
          className="size-4 text-secondary-500 text-xs cursor-pointer"
        >
          {isHidden ? (
            <BsArrowsExpand
              size={14}
              className="starting:opacity-0 starting:scale-0 transition-all duration-200"
            />
          ) : (
            <ImShrink2
              size={14}
              className="starting:opacity-0 -rotate-45 starting:scale-0 transition-all duration-200"
            />
          )}
        </button>
      </div>

      <motion.div
        animate={{ height: isHidden ? "0" : "auto" }}
        className="mt-2.5 overflow-hidden text-text-400"
      >
        <div className="flex flex-col gap-y-2">
          {seoData.map((item, index) => (
            <div key={index}>
              <h2 className="mb-1 font-medium text-secondary-400">
                {item.text}
              </h2>

              <div className="flex flex-wrap gap-y-2 pb-4 divide-x">
                {item.items.map((item, index) => (
                  <Link
                    className="px-3 border-background-800 hover:text-text-500 text-xs decoration-transparent hover:decoration-text-500 underline underline-offset-2 transition-all duration-200"
                    key={index}
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex flex-wrap gap-y-2 pb-4 divide-x">
          {seoData.map((item, index) => (
            <Link
              className="px-3 border-background-800 hover:text-text-500 text-xs decoration-transparent hover:decoration-text-500 underline underline-offset-2 transition-all duration-200"
              key={index}
              href={item.link}
            >
              {item.text}
            </Link>
          ))}
        </div> */}
      </motion.div>
      <hr className="bg-background-50 rounded-full w-full h-px" />
    </div>
  );
};

export default FooterSeo;