import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { getHomePageData } from "@/app/(home)/hook/hook.hook";
import { IserviceRecord } from "@/app/services/interfaces/services.interface";
import NewsLetter from "@/components/NewsLetter";
import CopyButton from "@/components/ui/CopyButton";
import Accordion from "@/components/ui/accordion";
import { companyLinks, helpLinks } from "@/data/footerData";
import PATHS from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
import GetStarted from "./partials/GetStarted";

const Footer = async () => {
  const { footerData, centerData } = await getHomePageData({});

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
      name: "youtube",
      href: socialMedia?.youtube,
      icon: "/svg/youtube.svg",
    },
    {
      name: "tiktok",
      href: socialMedia?.tiktok,
      icon: "/svg/tiktok.svg",
    },
  ];

  const { data } = await getData(endpoints.service + `?page=${1}&perPage=${5}`);
  return (
    <>
      <GetStarted centerData={centerData} />
      {/* <FooterSeo /> */}
      <div className="max-w-app bg-[#FFE8E7] backdrop-blur-[5.6px] pt-10 overflow-hidden text-text-400 padding">
        <div className=" gap-4 lg:gap-[2rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* About Section */}
          <div className="col-span-2 lg:space-y-3 text-text-400 typography-paragraph-regular">
            <Link href="/">
              <Image
                src={footerData?.data?.footerLogo}
                width={100}
                height={100}
                alt="logo"
                className="object-cover w-[146px] h-[60px]"
              />
            </Link>

            <div
              dangerouslySetInnerHTML={{
                __html: footerData?.data?.footerDescription,
              }}
            />

            <div className="hidden lg:block">
              <div className="flex items-center gap-[0.63rem]">
                <a href={`mailto:${footerData?.data?.email}`}>
                  {footerData?.data?.email}
                </a>
                <CopyButton text={footerData?.data?.email} />
              </div>

              <a href={`tel:${footerData?.data?.phoneNumber}`}>
                {footerData?.data?.phoneNumber}
              </a>

              <div className="flex flex-wrap items-center gap-2 mt-5">
                {socialLinks.map(
                  (item) =>
                    item.href && (
                      <a
                        key={item.name}
                        className="transition-all duration-300 hover:brightness-80 size-6 shrink-0"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={item.icon}
                          width={20}
                          height={20}
                          className=""
                          alt={item.name}
                        />
                      </a>
                    )
                )}
              </div>
            </div>
          </div>

          {/* Mobile Accordions - Company, Services, Help */}
          <div className="block md:hidden  col-span-2">
            <Accordion title="Company">
              {companyLinks.map((link) => (
                <p key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </p>
              ))}
            </Accordion>

            <Accordion title="Services">
              {data?.records?.map((link: IserviceRecord, index: number) => (
                <p key={index}>
                  <Link href={`${PATHS.services}/${link.slug}`}>
                    {link.name}
                  </Link>
                </p>
              ))}
            </Accordion>

            <Accordion title="Help">
              {helpLinks.map((link) => (
                <p key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </p>
              ))}
              <p>
                <Link href="/sitemap-page">SiteMap</Link>
              </p>
            </Accordion>
          </div>

          {/* Company Links - Desktop */}
          <div className="hidden md:block space-y-3 text-text-400 typography-paragraph-regular">
            <h3 className="font-extrabold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.18rem] typography-paragraph-regular">
              Company
            </h3>
            {companyLinks.map((link) => (
              <p key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </p>
            ))}
          </div>
          {/* Service Links - Desktop */}
          <div className="hidden md:block space-y-3 text-text-400 typography-paragraph-regular">
            <h3 className="font-extrabold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.18rem] typography-paragraph-regular">
              Services
            </h3>
            {data?.records?.map((link: IserviceRecord, index: number) => (
              <p key={index}>
                <Link href={`${PATHS.services}/${link.slug}`}>{link.name}</Link>
              </p>
            ))}
          </div>
          {/* Help Links - Desktop */}
          <div className="hidden md:block space-y-3 text-text-400 typography-paragraph-regular">
            <h3 className="font-extrabold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
              Help
            </h3>
            {helpLinks.map((link) => (
              <p key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </p>
            ))}
            <p>
              <Link href="/sitemap-page">SiteMap</Link>
            </p>
          </div>

          {/* Newsletter */}
          <div className="space-y-3 mt-4 lg:mt-0 col-span-2 lg:col-span-1 text-text-400 typography-paragraph-regular">
            <h3 className="font-extrabold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
              Subscribe to Newsletter
            </h3>
            <NewsLetter />

            <p className="font-extrabold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem] mt-6">
              Download app
            </p>
            <div className="flex gap-3.5 items-center">
              <Image
                src="apple.svg"
                alt="apple-icon"
                width={200}
                height={200}
                className="object-cover h-[30px] w-[30px]"
              />
              <Image
                src="android.svg"
                alt="android-icon"
                width={200}
                height={200}
                className="object-cover h-[30px] w-[30px]"
              />
            </div>
          </div>
        </div>

        <hr className="bg-[#FFF1EF] my-5" />
        <p className="pb-5 text-xs text-center font-roboto text-text-400 typography-paragraph-regular">
          {footerData?.data?.copyRight}
        </p>
        <p className="text-text-400 typography-caption font-normal text-center pb-30 sm:pb-8">
          Disclaimer : Vatsalya strictly complies with all applicable laws of
          Nepal, including the National Safe Motherhood and Reproductive Health
          Rights Act, 2018, the Muluki Criminal Code, 2017 (2074 B.S.), and
          other prevailing regulations that prohibit sex selection and prenatal
          gender determination, which are criminal offenses under Nepalese
          law.We do not support, promote, or engage in any form of gender
          determination or sex selection before or after conception. All
          fertility and reproductive health services are provided only at our
          registered and authorized clinics by licensed and qualified medical
          professionals, in full compliance with the laws, ethical guidelines,
          and medical standards prescribed by the Government of Nepal.Vatsalya
          is committed to ethical medical practice, patient safety, and the
          promotion of reproductive health rights in accordance with Nepalese
          legal and regulatory frameworks.
        </p>
      </div>
    </>
  );
};

export default Footer;
