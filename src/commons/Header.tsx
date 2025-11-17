// "use client";
// import PATHS from "@/utils/path";
// import { motion } from "motion/react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Fragment, useEffect, useRef, useState } from "react";
// import MobileNav from "./partials/MobileNav";
// import NavCalculator from "./partials/NavCalculator";
// import { Phone } from "lucide-react";

// const Header = () => {
//   const pathame = usePathname();
//   const [isHeaderHidden, setIsHeaderHidden] = useState(false);
//   const lastScrollY = useRef(0);
//   const handleScroll = () => {
//     if (typeof window !== "undefined") {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY.current) {
//         setIsHeaderHidden(true);
//       } else {
//         setIsHeaderHidden(false);
//       }
//       lastScrollY.current = currentScrollY;
//     }
//   };
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, []);

//   const navLinks = [
//     { name: "About Us", link: PATHS.about },
//     { name: "Services", link: PATHS.services },
//     { name: "Our Team", link: PATHS.team },
//     { name: "Success Stories", link: PATHS.successStory },
//     { name: "Blog & News", link: PATHS.blog },
//     { name: "International Patient", link: PATHS.international_Patient },
//     { name: "Clinic", link: PATHS.clinic },
//     { name: "Contact Us", link: PATHS.contact },
//   ];
//   const mobileNavLinks = [
//     { name: "IVF Calculator", link: PATHS.ivfDueCalculatotr },
//     { name: "Ovulation Calculator", link: PATHS.ovulationCalculator },
//   ];
//   return (
//     <motion.header
//       animate={{ y: isHeaderHidden ? "-110%" : 0 }}
//       transition={{ duration: 0.3, bounce: 0 }}
//       className="top-0 z-50 sticky bg-primary-50 backdrop-blur-[5.6px] py-0 lg:py-[1.75rem] text-white padding"
//     >
//       <div className="flex justify-between items-center">
//         <Link href="/">
//           <Image
//             src={"/horizontal-logo.png"}
//             width={200}
//             height={50}
//             priority
//             className="w-[200px] h-auto"
//             alt="logo"
//           />
//         </Link>

//       <div className="flex gap-2">
//         <NavCalculator />
//         <div className="relative hide-for-mobile">
//        <button
//         onClick={() => window.location.href = "tel:+977-9701021111"}
//         style={{
//           boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
//         }}
//         className="flex items-center gap-3 bg-secondary-500 px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white cursor-pointer typography-paragraph-regular"
//       >
//       <Phone  size={20}/> Call Us
//       </button>
//         </div>
//       </div>
//         <MobileNav navlinks={[...navLinks, ...mobileNavLinks]} />
//       </div>
//       <nav className="my-2.5 w-auto hide-for-mobile">
//         <ul className="flex justify-between items-center gap-2 font-manrope">
//           {navLinks.map((item, index) => {
//             const isActive = pathame === item.link;
//             return (
//               <Fragment key={index}>
//                 <li className="border-secondary-500 w-max text-center">
//                   <Link
//                     className={`w-max group link-gradient-hover `}
//                     href={item.link}
//                   >
//                     <span className={isActive ? "!text-primary-500" : ""}>
//                       {item.name}
//                     </span>
//                   </Link>
//                 </li>
//                 {index !== navLinks.length - 1 && (
//                   <div className="border-secondary-500 border-l-2 h-8" />
//                 )}
//               </Fragment>
//             );
//           })}
//         </ul>
//       </nav>
//     </motion.header>
//   );
// };
// export default Header;

"use client";
import PATHS from "@/utils/path";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import MobileNav from "./partials/MobileNav";
import NavCalculator from "./partials/NavCalculator";
import { Phone, PhoneCall } from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "About Us", link: PATHS.about },
    { name: "Services", link: PATHS.services },
    { name: "Our Team", link: PATHS.team },
    { name: "Success Stories", link: PATHS.successStory },
    { name: "Urbanist", link: PATHS.blog },
    // { name: "International Patient", link: PATHS.international_Patient },
    { name: "Clinic", link: PATHS.clinic },
    { name: "Contact Us", link: PATHS.contact },
  ];

  const mobileNavLinks = [
    { name: "IVF Calculator", link: PATHS.ivfDueCalculatotr },
    { name: "Ovulation Calculator", link: PATHS.ovulationCalculator },
  ];

  return (
    <motion.header className="top-0 z-50  sticky bg-primary-50 backdrop-blur-[5.6px] py-0 lg:py-4 text-white padding">
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
              return (
                <Fragment key={index}>
                  <li>
                    <Link
                      className="font-medium text-[15px] leading-[150%] text-[#6D6D6D] "
                      href={item.link}
                    >
                      <span className={isActive ? "!text-primary-500" : ""}>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                </Fragment>
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
