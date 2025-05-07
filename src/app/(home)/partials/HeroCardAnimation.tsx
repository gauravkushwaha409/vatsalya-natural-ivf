"use client";
import { MapPin } from "lucide-react";
import { AnimatePresence, motion, Variants } from "motion/react";
import Image from "next/image";

type AnimationType = "card" | "stats" | "location";
interface HeroCardAnimationProps {
  isActive: boolean;
}
const BASE_DELAY = 2;
const BASE_DURATION = 3;
const HeroCardAnimation: React.FC<HeroCardAnimationProps> = ({ isActive }) => {
  const animationType: AnimationType = (
    ["card", "stats", "location"] as AnimationType[]
  )[Math.floor(Math.random() * 3)];

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        {animationType === "card" && isActive && <CardAnimation />}
        {animationType === "location" && isActive && <LocationAnimation />}
        {animationType === "stats" && isActive && <StatsAnimation />}
        {/* <AnimatingLines /> */}
      </AnimatePresence>
    </div>
  );
};
export default HeroCardAnimation;

const CardAnimation = () => {
  const leftCardVariant: Variants = {
    initial: {
      opacity: 0,
      bottom: 0,
      left: "50%",
      transition: {
        default: {
          duration: BASE_DURATION,
        },
        opacity: {
          duration: BASE_DURATION / 4,
        },
      },
    },
    animate: {
      opacity: 1,
      bottom: "47%",
      left: "10%",
      transition: {
        duration: BASE_DURATION,
        delay: BASE_DELAY,
        type: "spring",
        bounce: 0,
      },
    },
  };
  const rightTopCardVariant: Variants = {
    initial: {
      opacity: 0,
      top: "100%",
      right: "50%",
      transition: {
        default: {
          duration: BASE_DURATION,
        },
        opacity: {
          duration: BASE_DURATION / 4,
        },
      },
    },
    animate: {
      opacity: 1,
      top: "17%",
      right: "7%",
      transition: {
        duration: BASE_DURATION,
        delay: BASE_DELAY,
        type: "spring",
        bounce: 0,
      },
    },
  };
  const rightBottomCardVariant: Variants = {
    initial: {
      opacity: 0,
      bottom: "0%",
      right: "50%",
      transition: {
        default: {
          duration: BASE_DURATION,
        },
        opacity: {
          duration: BASE_DURATION / 4,
        },
      },
    },
    animate: {
      opacity: 1,
      bottom: "30%",
      right: "10%",
      transition: {
        duration: BASE_DURATION,
        delay: BASE_DELAY,
        type: "spring",
        bounce: 0,
      },
    },
  };

  return (
    <div className="relative w-full h-full">
      {/* left card */}
      <motion.div
        variants={leftCardVariant}
        initial="initial"
        animate="animate"
        exit="initial"
        style={{
          boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.12)",
        }}
        className="bottom-[47%] absolute bg-[rgba(255,241,239,0.49)] backdrop-blur-[28px] ml-2 p-[0.8rem] border border-gray-100 rounded-[.75rem] max-w-1/3 md:max-w-1/2"
      >
        <p className="font-medium text-text-500 text-xs">Success Stories</p>
        <p className="mb-3 font-semibold text-text-500 text-2xl">10000+</p>
        <Image
          src={"/home/hero-graph.png"}
          height={400}
          width={800}
          alt="Play icon"
          className="w-full h-20"
        />
      </motion.div>
      {/* right top card */}
      <motion.div
        variants={rightTopCardVariant}
        initial="initial"
        animate="animate"
        exit="initial"
        style={{
          boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.12)",
        }}
        className="top-[7%] right-4 absolute flex justify-center items-center gap-1 bg-[rgba(255,241,239,0.49)] backdrop-blur-[28px] ml-2 p-[0.8rem] border border-gray-100 rounded-[.75rem] max-w-1/2 text-secondary-500"
      >
        <p className="font-extrabold typography-h2">15+</p>
        <p className="font-semibold typography-paragraph-small">
          Years <br /> Experience
        </p>
      </motion.div>
      {/* right bottom card */}
      <motion.div
        variants={rightBottomCardVariant}
        initial="initial"
        animate="animate"
        exit="initial"
        style={{
          boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.12)",
        }}
        className="absolute flex flex-col justify-center gap-1 bg-[rgba(255,241,239,0.49)] backdrop-blur-[28px] ml-2 p-[0.8rem] border border-gray-100 rounded-[.75rem] max-w-1/2 text-secondary-500"
      >
        <p className="pb-2 font-medium text-text-500 text-xs">Testimonial</p>
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="bg-white p-0.5 rounded-full size-9" key={i}>
              <Image
                src={`https://www.picsum.photos/200/200?${i}`}
                unoptimized
                alt="Play icon"
                height={100}
                width={100}
                className="rounded-full size-8"
              />
            </div>
          ))}
          <div className="flex justify-center items-center bg-white p-0.5 rounded-full size-9 font-medium text-primary-500 text-xs">
            70+
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const LocationAnimation = () => {
  const Variants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
      transition: {
        default: {
          duration: BASE_DURATION,
        },
        opacity: {
          duration: BASE_DURATION / 4,
        },
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: BASE_DURATION,
        delay: BASE_DELAY,
        type: "spring",
        bounce: 0,
      },
    },
  };
  return (
    <motion.div
      variants={Variants}
      initial={"initial"}
      animate="animate"
      exit="initial"
      className="flex flex-col gap-5 lg:pt-16 pl-6 origin-bottom"
    >
      {[
        "Kathmandu",
        "Nepalgunj",
        "Biratnagar",
        "Janakpur",
        "Chitwan",
        "Pokhara",
        "Butwal",
      ].map((location, i) => (
        <div
          key={i}
          style={{
            boxShadow: "0px 4px 11.2px 0px rgba(0, 0, 0, 0.12)",
          }}
          className="flex items-center gap-1 bg-[rgba(255,241,239,0.49)] backdrop-blur-[28px] ml-2 px-[0.875rem] py-[0.625rem] border border-gray-100 rounded-full w-max max-w-1/2 font-semibold text-primary-500 typography-paragraph-large"
        >
          <MapPin />
          <p>{location}</p>
        </div>
      ))}
    </motion.div>
  );
};
const StatsAnimation = () => {
  const Variants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
      transition: {
        default: {
          duration: BASE_DURATION,
        },
        opacity: {
          duration: BASE_DURATION / 4,
        },
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: BASE_DURATION,
        delay: BASE_DELAY,
        type: "spring",
        bounce: 0,
      },
    },
  };
  return (
    <motion.div
      variants={Variants}
      initial={"initial"}
      animate="animate"
      exit="initial"
      className="flex flex-col gap-1 md:gap-5 lg:pt-12 md:pl-6 origin-bottom"
    >
      {[
        {
          img: "/home/svg/ivf.svg",
          text: "IVF",
          count: "4500+",
        },
        {
          img: "/home/svg/iui.svg",
          text: "IUI",
          count: "3500+",
        },
        {
          img: "/home/svg/natural.svg",
          text: "Natural",
          count: "2500+",
        },
      ].map((stat, i) => (
        <div
          key={i}
          className="flex items-center gap-3 ml-2 px-[0.875rem] py-[0.625rem] w-max max-w-1/2 text-secondary-500"
        >
          <div
            style={{
              boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.12)",
            }}
            className="bg-[rgba(246,235,242,0.40)] p-[1.1875rem_1.0625rem] border border-gray-50 rounded-full"
          >
            <Image src={stat.img} alt={stat.text} width={40} height={40} />
          </div>
          <div>
            <span className="font-semibold typography-paragraph-small">
              {stat.text}
            </span>
            <p className="font-bold typography-h3">{stat.count}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
