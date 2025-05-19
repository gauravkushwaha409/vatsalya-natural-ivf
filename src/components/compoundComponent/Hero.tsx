"use client";

import Breadcrumb from "@/components/Breadcumb";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image, { StaticImageData } from "next/image";
import { createContext, ReactNode, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

// Define the type for the hero data that will be passed to the context
type HeroData = {
  title?: string;
  description?: string;
  image?: string | StaticImageData;
  alt?: string;
  breadcrumb?: string;
  buttonText?: string;
  brightness?: string;
};

// Context for Hero Section
type HeroContextType = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  heroData: HeroData;
};

const HeroContext = createContext<HeroContextType | undefined>(undefined);

// Hook to use Hero context
const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("Hero components must be used within a Hero component");
  }
  return context;
};

// Main Hero Component
type HeroProps = {
  children: ReactNode;
  heroData: HeroData;
};

const Hero = ({ children, heroData }: HeroProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Provide default values for heroData
  const defaultedHeroData: HeroData = {
    title: "Services",
    description:
      "Bringing hope to families with expert fertility care and cutting-edge treatments, ensuring a personalized journey to parenthood.",
    buttonText: "Book an Appointment",
    breadcrumb: "Services",
    alt: "Hero image",
    brightness: "brightness-[0.35]",
    ...heroData,
  };

  return (
    <HeroContext.Provider
      value={{ openModal, setOpenModal, heroData: defaultedHeroData }}
    >
      <header>
        <div>{children}</div>
        <RequestAppoimentModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </header>
    </HeroContext.Provider>
  );
};

// Background component
type HeroBackgroundProps = {
  className?: string;
  image?: string | StaticImageData;
  alt?: string;
  brightness?: string;
};

const HeroBackground = ({
  className,
  image: propImage,
  alt: propAlt,
  brightness: propBrightness,
}: HeroBackgroundProps) => {
  const { heroData } = useHero();

  // Use props if provided, otherwise fall back to context
  const image = propImage || heroData.image;
  const alt = propAlt || heroData.alt || "Hero image";
  const brightness =
    propBrightness || heroData.brightness || "brightness-[0.35]";

  if (!image) {
    console.warn("No image provided to HeroBackground");
    return null;
  }

  return (
    <div className={twMerge("z-0 absolute inset-0", className)}>
      <Image
        src={image}
        alt={alt}
        fill
        className={twMerge(`object-cover ${brightness}`)}
        priority
      />
    </div>
  );
};

// Breadcrumb Component
type HeroBreadcrumbProps = {
  className?: string;
  name?: string;
};

const HeroBreadcrumb = ({ className, name: propName }: HeroBreadcrumbProps) => {
  const { heroData } = useHero();
  const name = propName || heroData.breadcrumb;

  if (!name) return null;

  return (
    <div
      className={twMerge(
        "top-5 left-1/2 z-30 absolute -translate-x-1/2 transform",
        className
      )}
    >
      <Breadcrumb name={name} />
    </div>
  );
};

type HeroCustomBreadcrumbProps = {
  className?: string;
  children?: ReactNode;
};

const HeroCustomBreadcrumb = ({
  className,
  children,
}: HeroCustomBreadcrumbProps) => {
  const { heroData } = useHero();
  const name = children || heroData.breadcrumb;

  if (!name) return null;

  return (
    <div
      className={twMerge(
        "top-5 left-1/2 z-30 absolute -translate-x-1/2 transform",
        className
      )}
    >
      {children}
    </div>
  );
};

// Content Component
type HeroContentProps = {
  children: ReactNode;
  className?: string;
};

const HeroContent = ({ children, className }: HeroContentProps) => {
  return (
    <div
      className={twMerge(
        "z-10 relative flex flex-col justify-center items-center px-4 h-full text-white text-center",
        className
      )}
    >
      {children}
    </div>
  );
};

// Title Component
type HeroTitleProps = {
  children?: ReactNode;
  className?: string;
};

const HeroTitle = ({ children, className }: HeroTitleProps) => {
  const { heroData } = useHero();
  const titleContent = children || heroData.title;

  if (!titleContent) return null;

  return (
    <h1
      className={twMerge(
        "mb-4 font-bold !text-secondary-50 typography-h1",
        className
      )}
    >
      {titleContent}
    </h1>
  );
};

// Description Component
type HeroDescriptionProps = {
  children?: ReactNode;
  className?: string;
};

const HeroDescription = ({ children, className }: HeroDescriptionProps) => {
  const { heroData } = useHero();
  const descriptionContent = children || heroData.description;

  if (!descriptionContent) return null;

  return (
    <p
      className={twMerge(
        "mb-5 font-medium !text-text-50/80 typography-paragraph-regular",
        className
      )}
    >
      {descriptionContent}
    </p>
  );
};

// Button Component
type HeroButtonProps = {
  children?: ReactNode;
  className?: string;
};

const HeroButton = ({ children, className }: HeroButtonProps) => {
  const { setOpenModal, heroData } = useHero();
  const buttonContent =
    children || heroData.buttonText || "Book an Appointment";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setOpenModal(true)}
      className={twMerge(
        "hover:bg-secondary bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-11 py-4 border-[0.4px] border-secondary-100 rounded-full font-semibold transition-colors duration-300 cursor-pointer typography-h4",
        className
      )}
    >
      {buttonContent}
    </motion.button>
  );
};
type HeroCustomButtonProps = {
  children?: ReactNode;
  className?: string;
  props?: HTMLButtonElement;
};

const HeroCustomButton = ({
  children,
  className,
  ...props
}: HeroCustomButtonProps) => {
  const { heroData } = useHero();
  const buttonContent =
    children || heroData.buttonText || "Book an Appointment";

  return (
    <button
      {...props}
      className={twMerge(
        "bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] border-[0.4px] border-secondary-100 font-semibold duration-300 cursor-pointer typography-h4",
        className
      )}
    >
      {buttonContent}
    </button>
  );
};
// Container Component
type HeroContainerProps = {
  children: ReactNode;
  className?: string;
};

const HeroContainer = ({ children, className }: HeroContainerProps) => {
  return (
    <div
      className={twMerge(
        "relative w-full h-[428px] overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

// IMPORTANT: Attach all subcomponents to Hero
Hero.Container = HeroContainer;
Hero.Background = HeroBackground;
Hero.Breadcrumb = HeroBreadcrumb;
Hero.Content = HeroContent;
Hero.Title = HeroTitle;
Hero.Description = HeroDescription;
Hero.Button = HeroButton;
Hero.CustomBreadcrumb = HeroCustomBreadcrumb;
Hero.HeroCustomButton = HeroCustomButton;

// Make sure to use default export
export default Hero;
