"use client"
import { motion } from 'motion/react';
import { useState } from 'react';
const AnimatingText: React.FC<{
  children: string;
  className?: string;
}> = ({ className, children:text }) => {
  const [isInViewport, setIsInViewport] = useState(false);
  return (
    <motion.div onViewportEnter={() => {
      setIsInViewport(true);
    }} className={`flex flex-wrap ${className}`}>
      {text.split(" ").map((word, wordindex) => {
        return (
          <span key={wordindex} className="inline-block">
            {word.split("").map((letter, charIndex) => {
              const index = wordindex*(text.indexOf(word)-1) + charIndex;
              return (
                <motion.span key={charIndex} className="inline">
                  {letter}
                </motion.span>
              );
            })}
            <>&nbsp;</>
          </span>
        );
      })}
    </motion.div>
  );
};
export default AnimatingText