import Breadcrumb from "@/components/Breadcumb";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import useDisclosure from "@/components/hooks/useDisclousre";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { cn } from "@/utils/cn";
import PATHS from "@/utils/path";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import React, { createContext, useContext } from "react";

// Props for the Hero Section
interface IHeroSectionProps {
  city: string;
  clinic_name: string;
  clinic_description: string;
  slug: string;
  features: string[];
  address: string;
  working_days: string[];
  image: string;
}

// context type for hero section
type HeroContextType = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  data: IHeroSectionProps;
};

const HeroContext = createContext<HeroContextType | undefined>(undefined);

// Hook to use Hero Context
const useHero = () => {
  const context = useContext(HeroContext);
  if (!context)
    throw new Error("Hero components must be used within a Hero Component");
  return context;
};

// Contenxt Provider
const Hero = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: IHeroSectionProps;
}) => {
  const modal = useDisclosure();
  const defaultHeroData: IHeroSectionProps = {
    city: data?.city || "Biratnagar",
    clinic_name: data?.clinic_name || "Vatsalya Natural IVF - Biratnagar",
    clinic_description:
      data?.clinic_description ||
      "Our Biratnagar clinic offers comprehensive fertility care in a modern, comfortable setting. We provide personalized treatment plans with the latest reproductive technologies and compassionate support. Our Biratnagar clinic offers comprehensive fertility care in a modern, comfortable setting. We provide personalized treatment plans with the latest reproductive technologies and compassionate support.",
    slug: data?.slug || "Biratnagar",
    features: data?.features || [
      "15+ years of Experience",
      "State-of-the-art Lab",
      "Weekend Availability",
    ],
    address: data?.address || "Main Road, Biratnagar",
    working_days: data?.working_days || ["Sun-Fri, 9 AM - 6 PM"],
    image: data?.image || "/clinic-detail/hero-image.jpg",
  };
  return (
    <HeroContext.Provider
      value={{
        data: defaultHeroData,
        openModal: modal.isOpen,
        setOpenModal: modal.set,
      }}
    >
      <div className="padding bg-primary-50">{children}</div>
      <RequestAppoimentModal isOpen={modal.isOpen} onClose={modal.close} />
    </HeroContext.Provider>
  );
};

// Hero Wrapper
const HeroContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={cn(`relative`, className)}>{children}</div>;
};

// BreadCrumb
const BreadCrumb = () => {
  const { data } = useHero();
  return (
    <div className="w-fit pt-5 mx-auto flex flex-col items-center gap-y-2.5">
      <CustomBreadcrumb
        items={[
          { name: "Home", isHome: true, link: PATHS.home },
          { name: "Clinic", isHome: false, link: PATHS.clinic },
          { name: data.slug, isHome: false },
        ]}
      />
      <span className="font-urbanist text-[2.5rem] font-extrabold leading-[150%] tracking-[-0.78px] text-secondary-500">
        {data.city}
      </span>
    </div>
  );
};

// Content Wrapper
const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(`py-22 grid grid-cols-1 md:grid-cols-2 gap-6`, className)}
    >
      {children}
    </div>
  );
};

// Content Section
const Content = () => {
  const { data } = useHero();
  return (
    <div className="space-y-8">
      <div className="md:pr-16 flex flex-col items-start gap-y-6">
        <div className="w-full flex flex-col items-center md:items-start gap-y-4">
          <div className="py-1.5 px-6 w-fit flex items-center gap-x-2.5 shrink-0 rounded-full border border-primary-500">
            <span className="bg-primary-500 size-2 inline-block rounded-full" />
            <span className="typo-lg-bd-reg text-[#4A5565]">{`${data?.city} Clinic`}</span>
          </div>
          <span className="text-[#101828] typo-lg-bd-reg">
            {data?.clinic_name}
          </span>
        </div>
        <p className="mt-6 typo-lg-bd-reg text-center md:text-left text-secondary-500">
          {data?.clinic_description}
        </p>
      </div>

      <div className="space-y-6">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-3"> */}
        <div className="flex flex-wrap items-stretch justify-stretch gap-y-4 gap-x-3">
          {data.features.map((item, index) => (
            <span
              key={item + index}
              className="grow-1 px-6 py-1.5 text-[#4A5565] typo-lg-bd-reg rounded-full border border-primary-100 text-center text-nowrap shrink-0"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center md:justify-start flex-wrap gap-4.5">
          {/* Location */}
          <div className="flex items-center gap-x-3 grow-1 md:grow-0 shrink-0">
            <span className="w-fit p-1.5 md:p-2.5 rounded-full flex  items-center justify-center bg-[#FFF5F4]">
              <MapPin
                color="#222326"
                className="size-3.5 md:size-5 font-normal"
              />
            </span>

            <p className="flex flex-col">
              <span className="typo-mid-bd-reg text-[#6A6F77] hidden md:inline">
                Location
              </span>
              <span className="typo-lg-bd-reg text-[#101828]">
                {data?.address}
              </span>
            </p>
          </div>
          {/* Working Hours */}
          <div className="flex items-center gap-x-3 grow-1 md:grow-0 shrink-0">
            <span className="w-fit p-1.5 md:p-2.5 rounded-full flex  items-center justify-center bg-[#FFF5F4]">
              <Clock
                color="#222326"
                className="size-3.5 md:size-5 font-normal"
              />
            </span>

            <p className="flex flex-col">
              <span className="typo-mid-bd-reg text-[#6A6F77] hidden md:inline">
                Working Hours
              </span>
              <span className="typo-lg-bd-reg text-[#101828]">
                {data?.working_days[0]}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-start">
        <button className="px-14 py-5 text-white text-[1rem] leading-[120%] font-semibold bg-secondary-500 rounded-full">{`Book at ${data.city} Clinic`}</button>
      </div>
    </div>
  );
};

// Image Section
const HeroImage = () => {
  const { data } = useHero();
  return (
    <div className="h-138 rounded-[3.75rem] overflow-hidden relative">
      <Image src={data.image} alt="" fill className="object-cover" />
    </div>
  );
};

Hero.ContentWrapper = ContentWrapper;
Hero.Content = Content;
Hero.HeroImage = HeroImage;
Hero.Container = HeroContainer;
Hero.BreadCrumb = BreadCrumb;

export default Hero;
