"use client";
import PATHS from "@/utils/path";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileNav from "./partials/MobileNav";
import NavCalculator from "./partials/NavCalculator";

const Header = () => {
  const pathame = usePathname();
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
      lastScrollY.current = currentScrollY;
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const navLinks = [
    { name: "About Us", link: PATHS.about },
    { name: "Services", link: PATHS.services },
    { name: "Our Team", link: PATHS.team },
    { name: "Success Stories", link: PATHS.successStory },
    { name: "Blog & News", link: PATHS.blog },
    { name: "International Patient", link: PATHS.international_Patient },
    { name: "Clinic", link: PATHS.clinic },
    { name: "Contact Us", link: PATHS.contact },
  ];
  const mobileNavLinks = [
    { name: "IVF Calculator", link: PATHS.ivfDueCalculatotr },
    { name: "Ovulation Calculator", link: PATHS.ovulationCalculator },
  ];
  return (
    <motion.header
      animate={{ y: isHeaderHidden ? "-110%" : 0 }}
      transition={{ duration: 0.3, bounce: 0 }}
      className="top-0 z-50 sticky bg-primary-50 backdrop-blur-[5.6px] py-0 lg:py-[0.63rem] text-white padding"
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/horizontal-logo.png"}
            width={200}
            height={50}
            alt="logo"
          />
        </Link>
        <div className="hide-for-mobile">
          <label className="relative flex bg-light-variant-50 px-5 py-4 border-2 border-dark-variant-50 rounded-[1.75rem] min-w-[22.5rem] font-roboto text-dark-variant-300 typography-paragraph-regular">
            <input
              autoComplete="off"
              type="text"
              placeholder="Search..."
              className="outline-0 ring-0 placeholder:text-dark-variant-300 grow"
            />
            <button className="top-1/2 right-5 absolute hover:bg-primary-50 p-2 rounded-full -translate-y-1/2">
              <Search size={18} />
            </button>
          </label>
        </div>

        <NavCalculator />
        <MobileNav navlinks={[...navLinks, ...mobileNavLinks]} />
      </div>
      <nav className="my-2.5 w-auto hide-for-mobile">
        <ul className="flex justify-between font-manrope">
          {navLinks.map((item, index) => {
            const isActive = pathame === item.link;
            return (
              <li
                className="pr-6 border-secondary-500 border-r w-max text-left"
                key={index}
              >
                <Link
                  className={`w-max group link-gradient-hover `}
                  href={item.link}
                >
                  <span className={isActive ? "!text-primary-500" : ""}>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};
export default Header;
