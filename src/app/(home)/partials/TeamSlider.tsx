"use client"

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TeamSliderProps {
  data: { name: string; title: string; image: string; description: string }[];
}
const ACTIVE_EL_WIDTH = 30;
const INACTIVE_EL_WIDTH = 11.25;
const ACTIVE_EL_HEIGHT = 38.3331;
const INACTIVE_EL_HEIGHT = 14.375;
const GAP = 1.25;
const TeamSlider: React.FC<TeamSliderProps> = ({ data }) => {
  const previousActiveIndex = useRef(0);
  const shouldAnimate = useRef(true);
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (!shouldAnimate.current) return prev;
        previousActiveIndex.current = prev;
        return (prev + 1) % data.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div>
      <div className="relative flex items-end gap-[1.25rem] mx-20 min-h-[38.3331rem] overflow-hidden">
        {data.map((member, index) => {
          const i =
            (index - ((activeIndex - 1) % data.length) + data.length) %
            data.length;
          return (
            // <div key={index} className="flex w-full h-full">
            <div
              key={index}
              style={{
                height:
                  i == 1
                    ? `${ACTIVE_EL_HEIGHT}rem`
                    : `${INACTIVE_EL_HEIGHT}rem`,
                width:
                  i == 1 ? `${ACTIVE_EL_WIDTH}rem` : `${INACTIVE_EL_WIDTH}rem`,
                left:
                  i <= 1
                    ? `${i * INACTIVE_EL_WIDTH + GAP * i}rem`
                    : `${
                        i * INACTIVE_EL_WIDTH +
                        (ACTIVE_EL_WIDTH - INACTIVE_EL_WIDTH) +
                        GAP * i
                      }rem`,
              }}
              className={`absolute bottom-0 left-0 z-10  transition-all duration-500 ease-in-out border border-amber-500`}
            >
              <Image
                src={member.image}
                alt={member.name}
                height={2000}
                width={1000}
                className="w-full h-full object-cover grow"
              />
            </div>
          );
        })}
        {/* Description */}
        <div
          key={activeIndex}
          style={{
            left: `${ACTIVE_EL_WIDTH + GAP + INACTIVE_EL_WIDTH}rem`,
          }}
          className={`top-0 left-full absolute space-y-3 starting:opacity-0 ml-10 w-[32.4rem] transition-all duration-500 ease-in-out ${
            previousActiveIndex.current < activeIndex
              ? "starting:translate-x-full"
              : "starting:-translate-x-full"
          }`}
        >
          <h1 className="font-semibold typography-h4">
            {data[activeIndex].name}
          </h1>
          <h2 className="font-semibold text-text-500 typography-paragraph-large">
            {data[activeIndex].title}
          </h2>
          <p className="font-medium text-text-300 typography-paragraph-regular">
            {data[activeIndex].description}
          </p>
        </div>
      </div>
      <div
        onMouseEnter={() => (shouldAnimate.current = false)}
        onMouseLeave={() => (shouldAnimate.current = true)}
        className="flex justify-center items-center mt-5"
      >
        <button
          onClick={() => {
            previousActiveIndex.current = activeIndex;
            setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
          }}
          className="flex justify-center items-center rounded-full w-10 h-10 text-primary-500 cursor-pointer"
        >
          {" "}
          <ArrowLeft size={20} />
        </button>
        {Array.from({ length: data.length }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full bg-primary-500 inline-block mx-1 ${
              i === activeIndex ? "opacity-100" : "opacity-50"
            }`}
          ></div>
        ))}
        <button
          onClick={() => {
            previousActiveIndex.current = activeIndex;
            setActiveIndex((prev) => (prev + 1) % data.length);
          }}
          className="flex justify-center items-center rounded-full w-10 h-10 text-primary-500 cursor-pointer"
        >
          {" "}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
export default TeamSlider