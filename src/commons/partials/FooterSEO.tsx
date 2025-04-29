"use client";
import { motion } from 'motion/react';
import Link from "next/link";
import { useState } from "react";
import { BsArrowsExpand } from 'react-icons/bs';
import { ImShrink2 } from "react-icons/im";


const seoData = [
  {
    text: "Infertility",
    items: [
      { text: "Residential", link: "#" },
      { text: "Commercial", link: "#" },
      { text: "Vacation Homes", link: "#" },
      { text: "Co-working Homes", link: "#" },
      { text: "Apartments", link: "#" },
      { text: "Student Housing", link: "#" },
      { text: "Townhouses", link: "#" },
      { text: "Serviced Residences", link: "#" },
      { text: "Vilas", link: "#" },
      { text: "Retail Shops", link: "#" },
      { text: "Warehouses", link: "#" },
      { text: "Industrial Properties", link: "#" },
      { text: "Vacation Homes", link: "#" },
      { text: "Beachfront Villas", link: "#" },
      { text: "Mountain Cabins", link: "#" },
      { text: "City Penthouse", link: "#" },
      { text: "Co-working Spaces", link: "#" },
      { text: "Shared Offices", link: "#" },
      { text: "Hot Desks", link: "#" },
      { text: "Serviced Residences", link: "#" },
      { text: "Studio Apartments", link: "#" },
      { text: "Dormitory-style", link: "#" },
    ],
  },
  {
    text: "Fertility",
    items: [
      { text: "Residential", link: "#" },
      { text: "Commercial", link: "#" },
      { text: "Vacation Homes", link: "#" },
      { text: "Co-working Homes", link: "#" },
      { text: "Apartments", link: "#" },
      { text: "Student Housing", link: "#" },
      { text: "Townhouses", link: "#" },
      { text: "Serviced Residences", link: "#" },
      { text: "Vilas", link: "#" },
      { text: "Retail Shops", link: "#" },
      { text: "Warehouses", link: "#" },
      { text: "Industrial Properties", link: "#" },
      { text: "Vacation Homes", link: "#" },
      { text: "Beachfront Villas", link: "#" },
      { text: "Mountain Cabins", link: "#" },
      { text: "City Penthouse", link: "#" },
      { text: "Co-working Spaces", link: "#" },
      { text: "Shared Offices", link: "#" },
      { text: "Hot Desks", link: "#" },
      { text: "Serviced Residences", link: "#" },
      { text: "Studio Apartments", link: "#" },
      { text: "Dormitory-style", link: "#" },
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