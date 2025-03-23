"use client";
// const HeroAnimationCarousel = () => {
//   return (
//     <div className="relative flex flex-col border border-white w-full h-full">
//       <div className="z-[9] relative border h-full imageSection"></div>
//       <div className="z-[11] relative border border-primary-500 h-1/3 imagecarouselSection">

//       </div>
//     </div>
//   )
// }
// export default HeroAnimationCarousel

import { motion } from 'motion/react';
import React, { useEffect, useRef, useState } from "react";

type StackedCarouselProps = {
  images: string[];
};

const StackedCarousel: React.FC<StackedCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(images.length-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = () => {
      setActiveIndex((current) => (current + 1) % images?.length);
    }
    window.addEventListener("click", interval);

    // return () => clearInterval(interval);
  }, [images?.length]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((current) => (current + 1) % images?.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [images?.length]);
  const getindices = () => {
    const totalItems = images?.length;
    const indices = [];
    // when 1 is active 4,3,2,1 when 2 is active 1,4,3 when 3 is active 2,1,4 when 4 is active 3,2,1
    for (let i = 0; i < totalItems; i++) {
      if (i < activeIndex) {
        indices.push(i);
      }
      else {
        indices.unshift(i);
      }
    }
    


    return indices;
  }

  const getXPositionForIndex = (index: number) => {
    const indices = getindices();
    const position = indices.indexOf(index);

    switch (position) {
      case 0:
        return "0%";
      case activeIndex:
        return "-100%";
      default:
        return `${position * 100}%`;
    }
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="grow"></div>
      <div className="h-1/5">
        <div className="z-[11] relative w-full">
          <div
            ref={containerRef}
            className="relative flex justify-center items-center border border-amber-800 w-full h-full perspective-midrange"
          >
            {images?.map((image, index) => (
              <motion.div
                animate={{
                  x: getXPositionForIndex(index),
                }}
                key={index}
                className="left-0 absolute inset-y-0 border border-yellow-500 w-max aspect-square transition-all duration-[1500ms] ease-in-out cursor-pointer"
                // className="left-0 absolute inset-y-0 border border-yellow-500 size-20 aspect-square transition-all duration-[1500ms] ease-in-out cursor-pointer"
              >
                {`imageindex: ${index}`}
                <br/>
                {`index${getindices().indexOf(index)}`}
                
                {/* <Image
                  src={image}
                  alt="carousel image"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  objectFit="cover"
                /> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCarousel;
