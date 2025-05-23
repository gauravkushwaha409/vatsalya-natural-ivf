"use client";
import PATHS from "@/utils/path";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
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
      className="top-0 z-50 sticky bg-primary-50 backdrop-blur-[5.6px] py-0 lg:py-[1.75rem] text-white padding"
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/horizontal-logo.png"}
            width={200}
            priority
            height={50}
            className="w-[200px] h-auto"
            alt="logo"
          />
        </Link>

        <NavCalculator />
        <MobileNav navlinks={[...navLinks, ...mobileNavLinks]} />
      </div>
      <nav className="my-2.5 w-auto hide-for-mobile">
        <ul className="flex justify-between items-center gap-2 font-manrope">
          {navLinks.map((item, index) => {
            const isActive = pathame === item.link;
            return (
              <Fragment key={index}>
                <li className="border-secondary-500 w-max text-center">
                  <Link
                    className={`w-max group link-gradient-hover `}
                    href={item.link}
                  >
                    <span className={isActive ? "!text-primary-500" : ""}>
                      {item.name}
                    </span>
                  </Link>
                </li>
                {index !== navLinks.length - 1 && (
                  <div className="border-secondary-500 border-l-2 h-8" />
                )}
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};
export default Header;
