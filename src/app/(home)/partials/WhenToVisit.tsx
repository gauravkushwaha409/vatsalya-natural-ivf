"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { IHomeWhenVisit } from "../interface/home.interface";

const ANIMATION_DURATION = 1;

type WhenToVisitProps = {
  data: IHomeWhenVisit;
};
const WhenToVisit: React.FC<WhenToVisitProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-between py-16 min-h-screen overflow-x-hidden">
      <div
        style={{
          backgroundImage: `url(/home/when-to-visit/top-bg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative flex justify-center -mt-2 w-full h-[11.96rem]"
      >
        <Image
          className="-top-[29%] absolute object-cover"
          src="/home/when-to-visit/three-lines.png"
          alt="lines"
          layout="responsive"
          width={1000}
          height={1000}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(/home/when-to-visit/whole-bg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex md:flex-row flex-col-reverse gap-y-4 -my-px px-20 py-8"
      >
        <motion.div
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          className="w-full"
        >
          <div className="flex items-center gap-5">
            <h2 className="text-secondary-500 uppercase tracking-[0.18rem] typography-paragraph-regular">
              WHEN TO VISIT
            </h2>
            <div className="bg-secondary-200 w-[16.25rem] h-px" />
          </div>
          <h1 className="my-5 font-semibold text-text-500 typography-h2">
            Signs You Should See a Fertility Specialist
          </h1>
          <div
            className=" pl-5 font-[500] text-text-500 *:marker:text-secondary-500 *:marker:content-['➤\00a0'] leading-[150%] typography-paragraph-large"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />

          <button
            className="mt-5 px-8 py-4 border border-secondary-500 rounded-full font-extrabold text-secondary-500 cursor-pointer typography-paragraph-regular"
            style={{
              boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
            }}
          >
            BOOK AN APPOINTMENT
          </button>
        </motion.div>
        <motion.div
          initial={{
            x: "100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <div className="flex gap-x-[1.62rem] mx-auto px-10 w-max">
            {/* Left side card */}
            <div className="gap-5 grid grid-rows-2">
              {/* left top card */}
              <div className="rounded-full rounded-br-none h-[7.5rem] md:h-[12.69rem] aspect-square overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={data?.whenToVisitImages[0]}
                  width={500}
                  height={500}
                  alt="What we offer 1"
                />
              </div>
              {/* left bottom card */}
              <div className="rounded-[5.625rem] rounded-tr-none rounded-bl-none h-[7.5rem] md:h-[12.69rem] aspect-square overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src="/home/when-to-visit/card-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            {/* Right side cards */}
            <div className="gap-5 grid grid-rows-2">
              {/* Right top card */}
              <div className="rounded-full rounded-bl-none h-[7.5rem] md:h-[12.69rem] aspect-square overflow-hidden">
                {/* <div className="w-max"> */}
                <Image
                  src={data?.whenToVisitImages[1]}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  alt="What we offer 2"
                />
                {/* </div> */}
              </div>
              {/* Right bottom card */}
              <div className="rounded-[5.625rem] rounded-tl-none rounded-br-none h-[7.5rem] md:h-[12.69rem] aspect-square overflow-hidden">
                <Image
                  src={data?.whenToVisitImages[2]}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  alt="What we offer 2"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        style={{
          backgroundImage: `url(/home/when-to-visit/bottom-bg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 100%",
        }}
        className="relative flex justify-center -mt-2 w-full h-[11.96rem]"
      />
    </div>
  );
};
export default WhenToVisit;
