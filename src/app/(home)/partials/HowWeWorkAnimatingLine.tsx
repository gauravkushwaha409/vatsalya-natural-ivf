"use client"

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from "react";

const HowWeWorkAnimatingLine = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
    useEffect(() => {
      const calculateIntersection = () => {
        if (!lineRef.current || !ballRef.current) return;
        const line = lineRef.current;
        const ball = ballRef.current;
        const lineBottom = line.getBoundingClientRect().bottom;
        const ballTop = ball.getBoundingClientRect().top;
        if (ballTop >=lineBottom) {
          setIsIntersecting(true);
        }
        else {
          setIsIntersecting(false);
        }
      }
      window.addEventListener("scroll", calculateIntersection);
      return () => {
        window.removeEventListener("scroll", calculateIntersection);
      }
      
    }, []);
  return (
    <div className="relative bg-primary-100 w-px h-full">
      <div
        ref={lineRef}
        style={{
          background:
            "linear-gradient(180deg, #FFD2CE 0%, #FB1600 50%, #FFD2CE 100%)",
        }}
        className="top-[40vh] sticky w-full h-[11.5rem]"
      ></div>
      <div
        ref={ballRef}
        className={`bottom-0 left-1/2 absolute overflow-hidden bg-primary-100  rounded-full size-[1.375rem] -translate-x-1/2 `}
      >
        <motion.div initial={{
          width:"0px",
          height:"0px"
        }}
          animate={{
            width: isIntersecting ? "0px":"100%" ,
            height: isIntersecting ? "0px":"100%" ,
          }}
          transition={{
            duration:0.6
          }}
          className="top-0 left-1/2 z-10 relative bg-primary-500 rounded-full size-px -translate-x-1/2"></motion.div>
      </div>
    </div>
  );
}
export default HowWeWorkAnimatingLine