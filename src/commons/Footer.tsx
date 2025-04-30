import { getHomePageData } from "@/app/(home)/hook/hook.hook";
import NewsLetter from "@/components/NewsLetter";
import CopyButton from "@/components/ui/CopyButton";
import { companyLinks, helpLinks } from "@/data/footerData";
import Image from "next/image";
import Link from "next/link";
import FooterSeo from "./partials/FooterSEO";

const Footer = async () => {
  const { footerData } = await getHomePageData();

  const socialMedia = footerData?.data?.socialMedia;

  const socialLinks = [
    {
      name: "facebook",
      href: socialMedia?.facebook,
      icon: "/svg/facebook.svg",
    },
    {
      name: "instagram",
      href: socialMedia?.instagram,
      icon: "/svg/instagram.svg",
    },
    {
      name: "linkedin",
      href: socialMedia?.linkedin,
      icon: "/svg/linkedin.svg",
    },
    {
      name: "twitter",
      href: socialMedia?.twitter,
      icon: "/svg/twitter.svg",
    },
    {
      name: "whatsapp",
      href: socialMedia?.whatsapp,
      icon: "/svg/whatsapp.svg",
    },
  ];

  return (
    <>
      <FooterSeo />
      <div className="bg-primary-100 backdrop-blur-[5.6px] pt-10 overflow-hidden text-text-400 padding">
        <div className="gap-[6.56rem] grid grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
            <div className="-ml-5 h-20 aspect-auto">
              <Link href="/">
                <Image
                  src={footerData?.data?.footerLogo}
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: footerData?.data?.footerDescription || "",
              }}
            />
            <p className="flex items-center gap-[0.63rem]">
              <a href={`mailto:${footerData?.data?.email}`}>
                {footerData?.data?.email}
              </a>
              <CopyButton text={footerData?.data?.email} />
            </p>
            <a href={`tel:${footerData?.data?.phoneNumber}`}>
              {footerData?.data?.phoneNumber}
            </a>

            <div className="flex gap-4 mt-5">
              {socialLinks.map(
                (item) =>
                  item.href && (
                    <a
                      key={item.name}
                      className="hover:brightness-80 transition-all duration-300"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt={item.name}
                      />
                    </a>
                  )
              )}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
            <h3 className="font-bold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.18rem] typography-paragraph-regular">
              Company
            </h3>
            {companyLinks.map((link) => (
              <p key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </p>
            ))}
          </div>

          {/* Help Links */}
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

          {/* Newsletter */}
          <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
            <h3 className="font-[600] text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
              Subscribe to Newsletter
            </h3>
            <NewsLetter />
          </div>
        </div>
        <hr className="bg-[#FFF1EF] my-5" />
        <p className="pb-5 font-roboto text-text-400 text-xs text-center typography-paragraph-regular">
          {footerData?.data?.copyRight}
        </p>
      </div>
    </>
  );
};

export default Footer;
