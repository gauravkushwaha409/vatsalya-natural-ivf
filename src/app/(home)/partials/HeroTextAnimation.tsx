import { motion } from "motion/react";
import Butterfly from "./Butterfly";

const HeroTextAnimation: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split("/b");
  return (
    <div className="relative w-max lg:max-w-[51%] font-bold lg:font-extrabold text-secondary-500 lg:text-[2.48813rem] leading-[130%] typography-h4 whitespace-nowrap">
      {lines.map((line, index) => (
        <div key={index} className="flex flex-wrap">
          {index > 0 && <br />}
          {line.split(" ").map((word, index) => {
            if (word.startsWith("<") && word.endsWith(">")) {
              const cleanWord = word.slice(1, -1); // Remove the angle brackets
              return (
                <div key={index} className="text-primary-500">
                  <WordAnimation
                    key={index}
                    delay={0.3 * index}
                    duration={0.3}
                    text={cleanWord}
                  />
                  &nbsp;
                </div>
              );
            }
            return (
              word && (
                <div className="" key={index}>
                  <WordAnimation
                    key={index}
                    delay={0.3 * index}
                    duration={0.3}
                    text={word}
                  />
                  &nbsp;
                </div>
              )
            );
          })}
          {/* <AnimatedText text={line} /> */}
        </div>
      ))}
      <span
        aria-hidden
        className="inline top-0 left-0 absolute text-transparent pointer-events-none"
      >
        <span className="relative">
          {lines[0]
            .split("")
            .map((char) => (char == "<" || char == ">" ? "" : char))
            .join("")}
          <div className="top-0 right-0 absolute -translate-y-1/2 translate-x-1/2">
            <Butterfly />
          </div>
        </span>
        {/* <WordAnimation delay={0.3} duration={0.3} text={lines[0]} /> */}
      </span>
    </div>
  );
};
export default HeroTextAnimation;

const WordAnimation: React.FC<{
  text: string;
  delay?: number;
  duration?: number;
}> = ({ text, delay, duration }) => {
  const singleWordDuration = duration ? duration / text.length : 0.5;

  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={char + "-" + index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: singleWordDuration,
            delay: (delay || 0) + index * singleWordDuration,
            ease: "linear",
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};
