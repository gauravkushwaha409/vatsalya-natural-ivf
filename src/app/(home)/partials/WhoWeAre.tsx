"use client"
import { motion } from 'motion/react';
import Image from "next/image";
import { useState } from 'react';

const BASE_DURATION = 1;

const WhoWeAre = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  return (
    <motion.div
      onViewportEnter={() => {
        setIsInViewport(true);
      }}
      viewport={{amount: 0.7}}
      onViewportLeave={()=>setIsInViewport(false)}
      style={{
        backgroundImage: "url(/home/who-we-are-bg.png)",
      }}
      className="flex gap-[2.63rem] bg-cover bg-no-repeat bg-center pl-20 min-h-[25.625rem] overflow-hidden"
    >
      <motion.div animate={{
        x: isInViewport?0:"-100%",
        opacity: isInViewport ? 1 : 0,
        transition: {
          x: {
            duration:BASE_DURATION,
          }
        }
      }} className="flex flex-col justify-center gap-5 w-1/4">
        <div className="flex justify-center items-center gap-5">
          <span className="font-bold text-primary-500 uppercase leading-[0.18rem] typography-paragraph-regular">
            Who Are we
          </span>
          <div className="bg-primary-500 h-[0.0625rem] grow"></div>
        </div>
        <p className="font-bold text-text-500 typography-h3">
          Turning Hope into <br /> Happiness
        </p>
      </motion.div>
      <div className="relative w-full grow">
        <motion.div
          style={{
            background: "linear-gradient(90deg, #EBC0DB 0%, transparent 100%)",
          }}
          initial={{ left: "100%" }}
          animate={{ left: isInViewport?["100%", "0%"]:["100%", "100%"] }}
          transition={{
            duration:BASE_DURATION
          }}
          className="right-0 left-1/2 relative rounded-l-[20.84425rem] h-full overflow-hidden inser-y-0"
        >
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: isInViewport?["-100%", "0%"]:["-100%", "-100%"] }}
            transition={{
              duration:BASE_DURATION
            }}
            className="right-0 -left-1/2 z-10 relative inset-y-0 flex items-center gap-10 p-11 pr-20"
          >
            <motion.div animate={{
              opacity: isInViewport?1:0,
            }} className="rounded-full w-[19.5rem] aspect-square overflow-hidden shrink-0">
              <Image
                src={"/home/priyanka-ayushman.jpeg"}
                width={340}
                height={340}
                alt="priyanka-ayushman.jpeg"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.p animate={{
              opacity: isInViewport?1:0,
            }} className="font-[500] text-text-400 leading-[150%] typography-paragraph-large">
              We are more than just a fertility center—we are a beacon of hope
              for families longing to grow. With cutting-edge technology and
              compassionate care, we guide you through every step of your
              fertility journey, ensuring unwavering support and expert medical
              attention.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default WhoWeAre;
