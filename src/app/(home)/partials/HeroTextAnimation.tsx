import { motion } from "motion/react";

const HeroTextAnimation: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split("/b");
  return (
    <h1 className="relative w-full lg:max-w-1/2 font-bold lg:font-extrabold text-secondary-500 lg:text-[2.48813rem] leading-[130%] typography-h4">
      {lines.map((line, index) => (
        <div key={index} className="flex flex-wrap">
          {index > 0 && <br />}
          {line.split(" ").map((word, index) => {
            if (word.startsWith("<") && word.endsWith(">")) {
              const cleanWord = word.slice(1, -1); // Remove the angle brackets
              return (
                <span key={index} className="text-primary-500">
                  <WordAnimation
                    key={index}
                    delay={0.3 * index}
                    duration={0.3}
                    text={cleanWord}
                  />
                  &nbsp;
                </span>
              );
            }
            return (
              word && (
                <span key={index}>
                  <WordAnimation
                    key={index}
                    delay={0.3 * index}
                    duration={0.3}
                    text={word}
                  />
                  &nbsp;
                </span>
              )
            );
          })}
          {/* <AnimatedText text={line} /> */}
        </div>
      ))}
      {/* {text.split(" ").map((word, index) => {
        if (word.startsWith("<") && word.endsWith(">")) {
          const cleanWord = word.slice(1, -1); // Remove the angle brackets
          return (
            <span key={index} className="text-primary-500">
              <WordAnimation
                key={index}
                delay={0.3 * index}
                duration={0.3}
                text={cleanWord}
              />
              &nbsp;
            </span>
          );
        }

        return word === "/b" ? (
          <br key={index} />
        ) : (
          <span key={index}>
            <WordAnimation
              key={index}
              delay={0.3 * index}
              duration={0.3}
              text={word}
            />
            &nbsp;
          </span>
        );
      })} */}
    </h1>
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
