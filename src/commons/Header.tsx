"use client";
import PATHS from "@/utils/path";
import { ChevronDown, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./partials/MobileNav";
import NavCalculator from "./partials/NavCalculator";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "About Us", link: PATHS.about },
    {
      name: "Services",
      link: PATHS.services,
      children: [
        {
          name: "Antenatal Checkup",
          link: PATHS.antenatalCheckup,
        },
        {
          name: "Fertility Preservation",
          link: PATHS.fertilityPreservation,
        },
        {
          name: "Infertility Treatment",
          link: PATHS.infertilityTreatment,
        },
        {
          name: "Infertility Diagnosis",
          link: PATHS.infertilityDiagnosis,
        },
      ],
    },
    { name: "Our Team", link: PATHS.team },
    { name: "Success Stories", link: PATHS.successStory },
    { name: "Blogs", link: PATHS.blog },
    // { name: "International Patient", link: PATHS.international_Patient },
    { name: "Clinic", link: PATHS.clinic },
    { name: "Contact Us", link: PATHS.contact },
  ];

  const mobileNavLinks = [
    { name: "IVF Calculator", link: PATHS.ivfDueCalculatotr },
    { name: "Ovulation Calculator", link: PATHS.ovulationCalculator },
  ];

  return (
    <motion.header className="top-0 z-50  sticky bg-primary-50 backdrop-blur-[5.6px] py-2.5 lg:py-6 text-white padding">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/horizontal-logo.png"
            width={200}
            height={50}
            priority
            className="w-[146px] h-auto"
            alt="logo"
          />
        </Link>

        <nav className="my-2.5 w-auto hide-for-mobile">
          <ul className="flex justify-between items-center gap-6">
            {navLinks.map((item, index) => {
              const isActive = pathname === item.link;
              const hasChildren = item.children && item.children.length > 0;

              return (
                <li key={index} className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      className="font-medium text-[15px] leading-[150%] text-[#6D6D6D]"
                      href={item.link}
                    >
                      <span className={isActive ? "!text-primary-500" : ""}>
                        {item.name}
                      </span>
                    </Link>

                    {/* Dropdown Icon */}
                    {hasChildren && (
                      <ChevronDown
                        size={16}
                        className="text-[#6D6D6D] transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {hasChildren && (
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded-md  min-w-[160px] z-50">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-2">
          <div className="relative hide-for-mobile">
            <button
              onClick={() => (window.location.href = "tel:+977-1-5970611")}
              style={{
                boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
              }}
              className="flex items-center gap-3 bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-extrabold text-white cursor-pointer typography-paragraph-regular"
            >
              <PhoneCall size={20} />
              +977-1-5970611
            </button>
          </div>
          <NavCalculator />
        </div>

        <MobileNav navlinks={[...navLinks, ...mobileNavLinks]} />
      </div>
    </motion.header>
  );
};

export default Header;
