import { getHomePageData } from "@/app/(home)/hook/hook.hook";
import CopyButton from "@/components/ui/CopyButton";
// import { useNewsletter } from "@/hooks/subscription/useNewsletter";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "facebook",
    href: "https://www.facebook.com/",
    icon: "/svg/facebook.svg",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    icon: "/svg/instagram.svg",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/",
    icon: "/svg/linkedin.svg",
  },
  {
    name: "twitter",
    href: "https://www.twitter.com/",
    icon: "/svg/twitter.svg",
  },
  {
    name: "whatsapp",
    href: "https://www.whatsapp.com/",
    icon: "/svg/whatsapp.svg",
  },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Success Stories", href: "/success-story" },
  { label: "Contact", href: "/contact-us" },
  { label: "Career", href: "/career" },
];

const helpLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Consultation Booking", href: "/booking" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer = async () => {
  const { footerData } = await getHomePageData();
  console.log(footerData?.data?.socialMedia, "footerData");

  // const { formik, isLoading } = useNewsletter();
  return (
    <div className="bg-primary-100 backdrop-blur-[5.6px] pt-10 overflow-hidden text-text-400 padding">
      <div className="gap-[6.56rem] grid grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
          <div className="-ml-5 h-20 aspect-auto">
            <Link href="/">
              <Image
                src={"/horizontal-logo.png"}
                width={100}
                height={100}
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>
          <p className="">
            Natural IVF: Embracing Your Body’s Natural Rhythm for Parenthood.
          </p>
          <p className="flex items-center gap-[0.63]">
            <a href={`mailto:${`info@vatsalya.com`}`}>
              info@vatsalyagmail.com{" "}
            </a>
            <CopyButton text="info@vatsalyagmail.com" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
            >
              <path
                d="M15.5 3.23828H5V12.2435"
                stroke="#585858"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 6.00781H19V14.3203C19 14.6877 18.8156 15.0401 18.4874 15.2999C18.1592 15.5598 17.7141 15.7057 17.25 15.7057H10.25C9.78587 15.7057 9.34075 15.5598 9.01256 15.2999C8.68437 15.0401 8.5 14.6877 8.5 14.3203V6.00781Z"
                stroke="#585858"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
          </p>
          <a href={`tel:${"+977 9876543210"}`}>+977 9876543210</a>
          <div className="flex gap-4 mt-5">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                className="hover:brightness-80 transition-all duration-300"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={item.icon} width={24} height={24} alt={item.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
          <h3 className="font-[600] text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
            Company
          </h3>
          {companyLinks.map((link) => (
            <p key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </p>
          ))}
        </div>

        <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
          <h3 className="font-[600] text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
            Help
          </h3>
          {helpLinks.map((link) => (
            <p key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </p>
          ))}
        </div>

        <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
          <h3 className="font-[600] text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
            Subscribe to Newsletter
          </h3>
          {/* <form onSubmit={formik.handleSubmit} className="space-y-3">
            <label className="flex bg-white/[0.12] px-4 py-4 border border-[#E4E4E7] rounded-[0.75rem]">
              <input
                name="email"
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent outline-0 ring-0 text-black placeholder:text-dark-variant-300 grow"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="bg-secondary-500 disabled:opacity-50 p-4 rounded-[6.25rem] font-manrope font-bold text-white cursor-pointer typography-paragraph-regular"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form> */}
        </div>
      </div>
      <hr className="bg-[#FFF1EF] my-5" />
      <p className="pb-5 font-roboto text-text-400 text-xs text-center typography-paragraph-regular">
        © {new Date().getFullYear()} Vatsalya. All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;
