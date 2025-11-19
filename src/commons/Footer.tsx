import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { getHomePageData } from "@/app/(home)/hook/hook.hook";
import { IserviceRecord } from "@/app/services/interfaces/services.interface";
import NewsLetter from "@/components/NewsLetter";
import CopyButton from "@/components/ui/CopyButton";
import { companyLinks, helpLinks } from "@/data/footerData";
import PATHS from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
import FooterSeo from "./partials/FooterSEO";
import GetStarted from "./partials/GetStarted";

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
      <GetStarted />
      {/* <FooterSeo /> */}
      <div className="bg-white backdrop-blur-[5.6px] pt-10 overflow-hidden text-text-400 padding">
        <div className="gap-[2rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* About Section */}
          <div className="col-span-2 space-y-3 text-text-400 typography-paragraph-regular">
            <Link href="/">
              <Image
                src={footerData?.data?.footerLogo}
                width={100}
                height={100}
                alt="logo"
                className="object-cover w-[146px] h-[60px]"
              />
            </Link>

            <p
              dangerouslySetInnerHTML={{
                __html: footerData?.data?.footerDescription || "",
              }}
            />

            <div className="hidden lg:block">
              <p className="flex items-center gap-[0.63rem]">
                <a href={`mailto:${footerData?.data?.email}`}>
                  {footerData?.data?.email}
                </a>
                <CopyButton text={footerData?.data?.email} />
              </p>

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

          {/* Company Links */}
          <div className="space-y-3 text-text-400 typography-paragraph-regular">
            <h3 className="font-extrabold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.18rem] typography-paragraph-regular">
              Company
            </h3>
            {companyLinks.map((link) => (
              <p key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </p>
            ))}
          </div>
          {/* Company Links */}
          <div className="space-y-3 text-text-400 typography-paragraph-regular">
            <h3 className="font-extrabold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.18rem] typography-paragraph-regular">
              Services
            </h3>
            {data?.records?.map((link: IserviceRecord, index: number) => (
              <p key={index}>
                <Link href={`${PATHS.services}/${link.slug}`}>{link.name}</Link>
              </p>
            ))}
          </div>
          {/* Help Links */}
          <div className="space-y-3 text-text-400 typography-paragraph-regular">
            <h3 className="font-extrabold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.1575rem]">
              Help
            </h3>
            {helpLinks.map((link) => (
              <p key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </p>
            ))}
            <Link href="/sitemap-page">SiteMap</Link>
          </div>

          {/* Newsletter */}
          <div className="space-y-3 text-text-400 typography-paragraph-regular">
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
        <p className="text-text-400 typography-caption font-normal text-center pb-8">
          Disclaimer : Vatsalya strictly complies with the PCPNDT Act, 2020 and
          the ART (Regulation) Act, 2021, which prohibit sex selection and
          gender determination, both being criminal offenses. We do not support
          or engage in any such practices. All fertility services are provided
          solely at our registered clinics by licensed medical professionals, in
          full accordance with applicable laws and regulations.
        </p>
      </div>
    </>
  );
};

export default Footer;
