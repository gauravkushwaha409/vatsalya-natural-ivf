"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Schedule from "./partials/Schedule";
import MobileNav from "./partials/MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathame = usePathname();
  const navLinks = [
    { name: "About Us", link: "/aboutUs" },
    { name: "Services", link: "/services" },
    { name: "Our Experts", link: "/ourExperts" },
    { name: "Success Stories", link: "/successStory" },
    { name: "Blog & News", link: "/blog" },
    { name: "Request a Call", link: "/requestCall" },
    { name: "Career", link: "/career" },
    { name: "Contact Us", link: "/contact" },
  ];
  return (
    <header className="bg-transparent z-50 relative backdrop-blur-[5.6px] padding py-0 lg:py-[0.63rem] text-white">
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

        <Schedule />
        <MobileNav navlinks={navLinks} />
      </div>
      <nav className="mt-5 w-auto hide-for-mobile">
        <ul className="flex  justify-between  font-manrope">
          {navLinks.map((item, index) => {
            const isActive = pathame === item.link;
            console.log(isActive);
            return (
              <li
                className="border-r border-secondary-500 pr-6  w-max text-left"
                key={index}
              >
                <Link
                  className={`w-max group link-gradient-hover ${
                    isActive ? "text-orange-500" : ""
                  }`}
                  href={item.link}
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
