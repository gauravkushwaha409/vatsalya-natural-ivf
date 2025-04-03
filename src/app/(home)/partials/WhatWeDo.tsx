"use client"
import { motion } from 'motion/react';
import Image from "next/image";
import { useState } from 'react';

const BASE_DURATION = 1;
const STARTING_OFFSET = "22%";

const WhatWeDo = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  return (
    <motion.div
      onViewportEnter={() => {
        setIsInViewport(true);
      }}
      viewport={{ amount: 0.4 }}
      onViewportLeave={() => setIsInViewport(false)}
      style={{
        backgroundImage: "url(/home/who-we-are-bg.png)",
      }}
      className="flex md:flex-row flex-col-reverse gap-[2.63rem] bg-cover bg-no-repeat bg-center md:pr-20 min-h-[25.625rem] overflow-hidden"
    >
      <div className="relative w-full grow">
        <motion.div
          style={{
            background:
              "linear-gradient(90deg, transparent 40%, #FFD2CE 100%),url(/home/who-we-are-bg.png)",
          }}
          initial={{ left: `-${STARTING_OFFSET}` }}
          animate={{
            left: isInViewport
              ? [`-${STARTING_OFFSET}`, "0%"]
              : [`-${STARTING_OFFSET}`, `-${STARTING_OFFSET}`],
          }}
          transition={{
            duration: BASE_DURATION,
          }}
          className="right-0 left-1/2 relative inset-y-0 md:rounded-r-[20.84425rem] h-full overflow-hidden"
        >
          <motion.div
            initial={{ left: `${STARTING_OFFSET}` }}
            animate={{
              left: isInViewport
                ? [`${STARTING_OFFSET}`, "0%"]
                : [`${STARTING_OFFSET}`, `${STARTING_OFFSET}`],
            }}
            transition={{
              duration: BASE_DURATION,
            }}
            className="right-0 -left-1/2 z-10 relative inset-y-0 flex md:flex-row flex-col-reverse items-center gap-10 p-11 pl-20"
          >
            <motion.p
              animate={{
                opacity: isInViewport ? 1 : 0,
                transition: {
                  duration: BASE_DURATION,
                },
              }}
              className="font-[500] text-text-400 leading-[150%] typography-paragraph-large"
            >
              We are more than just a fertility center—we are a beacon of hope
              for families longing to grow. With cutting-edge technology and
              compassionate care, we guide you through every step of your
              fertility journey, ensuring unwavering support and expert medical
              attention.
            </motion.p>
            <motion.div
              animate={{
                opacity: isInViewport ? 1 : 0,
              }}
              className="rounded-lg md:rounded-full w-[19.5rem] aspect-square overflow-hidden shrink-0"
            >
              <Image
                src={"/home/priyanka-ayushman.jpeg"}
                width={340}
                height={340}
                alt="priyanka-ayushman.jpeg"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={{
          x: isInViewport ? 0 : "100%",
          opacity: isInViewport ? 1 : 0,
          transition: {
            x: {
              duration: BASE_DURATION,
            },
          },
        }}
        className="flex flex-col justify-center gap-5 pl-3 md:w-1/4"
      >
        <div className="flex justify-center items-center gap-5 mt-4 pl-3 md:pl-">
          <span className="font-bold text-primary-500 uppercase md:leading-[0.18rem] typography-paragraph-regular">
            What we do
          </span>
          <div className="bg-primary-500 h-[0.0625rem] grow"></div>
        </div>
        <p className="font-bold text-text-500 typography-h3">
          Turning Hope into <br /> Happiness
        </p>
      </motion.div>
    </motion.div>
  );
};
export default WhatWeDo;
