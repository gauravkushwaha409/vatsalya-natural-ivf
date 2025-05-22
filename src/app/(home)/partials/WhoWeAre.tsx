"use client";
import { useIsSmall } from "@/hooks/useMediaQuery";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { IHomeWhatWeDo } from "../interface/home.interface";

const BASE_DURATION = 1;
const STARTING_OFFSET = "22%";
type WhoWeAreProps = {
  data: IHomeWhatWeDo;
};
const WhoWeAre: React.FC<WhoWeAreProps> = ({ data }) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const isMobile = useIsSmall();
  return (
    <motion.div
      onViewportEnter={() => {
        setIsInViewport(true);
      }}
      viewport={{ amount: 0.7 }}
      className="flex lg:flex-row flex-col gap-[2.63rem] bg-cover bg-no-repeat bg-center lg:pl-20 min-h-[25.625rem] overflow-hidden"
    >
      <motion.div
        animate={{
          x: isInViewport ? 0 : `-${STARTING_OFFSET}`,
          opacity: isInViewport ? 1 : 0,
          transition: {
            x: {
              duration: BASE_DURATION,
            },
          },
        }}
        className="flex flex-col justify-center gap-5 pl-3 lg:w-1/4"
      >
        <h2 className="flex justify-center items-center gap-5 mt-4">
          <span className="font-bold text-primary-500 uppercase lg:leading-[0.18rem] tracking-widest typography-paragraph-regular">
            {data?.title}
          </span>
          <div className="bg-primary-500 h-[0.0625rem] grow"></div>
        </h2>
        <p className="font-bold text-text-500 typography-h2">
          {data?.subtitle}
        </p>
      </motion.div>
      <div className="relative w-full grow">
        <motion.div
          style={{
            backgroundImage: isMobile
              ? ""
              : "linear-gradient(90deg, #EBC0DB 0%, transparent 40%)",
          }}
          initial={{ left: `${STARTING_OFFSET}` }}
          animate={{
            left: isInViewport
              ? [`${STARTING_OFFSET}`, "0%"]
              : [`${STARTING_OFFSET}`, `${STARTING_OFFSET}`],
          }}
          transition={{
            duration: BASE_DURATION,
          }}
          className="right-0 left-1/2 relative inset-y-0 lg:rounded-l-[20.84425rem] h-full overflow-hidden"
        >
          <motion.div
            initial={{ left: `-${STARTING_OFFSET}` }}
            animate={{
              left: isInViewport
                ? [`-${STARTING_OFFSET}`, "0%"]
                : [`-${STARTING_OFFSET}`, `-${STARTING_OFFSET}`],
            }}
            transition={{
              duration: BASE_DURATION,
            }}
            className="right-0 -left-1/2 z-10 relative inset-y-0 flex lg:flex-row flex-col items-center gap-10 p-11 lg:pr-20"
          >
            <motion.div
              animate={{
                opacity: isInViewport ? 1 : 0,
              }}
              className="rounded-full w-[19.5rem] aspect-square overflow-hidden shrink-0"
            >
              <Image
                src={data?.image}
                width={340}
                height={340}
                alt="priyanka-ayushman.jpeg"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.p
              animate={{
                opacity: isInViewport ? 1 : 0,
                transition: {
                  duration: BASE_DURATION,
                },
              }}
              className="font-[500] text-text-400 leading-[150%] typography-paragraph-large"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default WhoWeAre;
