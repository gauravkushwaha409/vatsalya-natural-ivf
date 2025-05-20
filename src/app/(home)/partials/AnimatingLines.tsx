import { motion } from "motion/react";

const AnimatingLines = () => {
  return (
    <>
      {/* <div className="relative border border-red-500 w-full"> */}
      <Line />
      <Line rotation={-0.5} />
      <Line rotation={-1} />
      <Line rotation={-1.5} />

      {/* </div> */}
    </>
  );
};
export default AnimatingLines;

const Line = ({ rotation = 0 }: { rotation?: number }) => {
  return (
    <svg
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1443 131"
      fill="none"
      className="absolute inset-0 w-full origin-right"
    >
      <defs>
        {/* Base gradient with vibrant colors */}
        <linearGradient
          id="baseGradient"
          x1="1"
          y1="65.6154"
          x2="1442"
          y2="65.6154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBDB6" />
          <stop offset="1" stopColor="#D3A3C1" />
        </linearGradient>

        {/* Highly visible shimmer effect */}
        <motion.linearGradient
          id="shimmerGradient"
          gradientUnits="userSpaceOnUse"
          x1="-720"
          x2="0"
          initial={{ x1: -720, x2: 0 }}
          animate={{
            x1: [-720, 2160],
            x2: [0, 2880],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeIn",
          }}
        >
          <stop offset="0" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.1" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.4" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="0.45" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="0.5" stopColor="white" />
          <stop offset="0.55" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="0.6" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="0.9" stopColor="rgba(255,255,255,0)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </motion.linearGradient>
      </defs>

      {/* Base path with vibrant gradient */}
      <path
        d="m1442 40.7309s-90.39 53.8868-218.5 79.0241c-296.766 58.231-579.037-146.7081-880-115.5001-156.901 16.2697-342.5 103.7451-342.5 103.7451"
        stroke="url(#baseGradient)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Highly visible shimmer effect overlay */}
      <path
        d="m1442 40.7309s-90.39 53.8868-218.5 79.0241c-296.766 58.231-579.037-146.7081-880-115.5001-156.901 16.2697-342.5 103.7451-342.5 103.7451"
        stroke="url(#shimmerGradient)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};
