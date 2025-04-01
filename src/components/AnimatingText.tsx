"use client";
import { motion } from "motion/react";
import { useState } from "react";
const AnimatingText: React.FC<{
  children: string;
  className?: string;
}> = ({ className, children: text }) => {
  // I've commented out the following line because it's causing an error
  const [isInViewport, setIsInViewport] = useState(false);
  return (
    <motion.div
      onViewportEnter={() => {
        setIsInViewport(true);
      }}
      className={`flex flex-wrap ${className}`}
    >
      {text.split(" ").map((word, wordIndex) => {
        return (
          <motion.span
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: isInViewport ? 0 : 20,
              opacity: isInViewport ? 1 : 0,
            }}
            transition={{
              delay: isInViewport ? wordIndex * 0.1 : 0,
              duration: 0.2,
            }}
            key={wordIndex}
            className="inline-block"
          >
            {word.split("").map((letter, charIndex) => {
              const index =
                text.split(" ").slice(0, wordIndex).join(" ").length +
                (wordIndex > 0 ? 1 : 0) +
                charIndex;
              return (
                <motion.span
                  key={index}
                  className="inline"
                >
                  {letter}
                </motion.span>
              );
            })}
            <>&nbsp;</>
          </motion.span>
        );
      })}
    </motion.div>
  );
};
export default AnimatingText;
