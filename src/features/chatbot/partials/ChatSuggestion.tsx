import { motion } from 'motion/react';

const ChatSuggestion: React.FC<{
  suggestions: string[];
  sendMessage: (message: string) => void;
  disabled?: boolean;
}> = ({ suggestions, sendMessage, disabled }) => {
  if(!suggestions?.length) {
    return null;
  }
  return (
    <div
      key={suggestions.join("")}
      style={{
        background:
          "linear-gradient(90deg, #EBC0DB 0%, #FFD2CE 100%), url('/noise.webp') center / cover no-repeat, lightgray",
      }}
      className={`flex flex-wrap justify-center gap-1 px-[2.31rem] py-3 w-full sticky bottom-0  ${
        disabled ? "opacity-50" : ""
      }`}
    >
      {suggestions.map((suggestion, i) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{
            y: 10,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: i * 0.2,
              bounce: 0.01,
            },
          }}
          disabled={disabled}
          onClick={() => {
            sendMessage(suggestion);
          }}
          key={i}
          style={{
            boxShadow: "0px 0px 10.1px 0px rgba(202, 50, 145, 0.39)",
          }}
          className="bg-white hover:bg-secondary-50 px-[0.88rem] py-[0.62rem] border border-secondary-500 rounded-full font-medium text-secondary-500 hover:text-secondary-600 capitalize transition-colors cursor-pointer disabled:pointer-events-none typography-caption"
        >
          {suggestion}
        </motion.button>
      ))}
    </div>
  );
};
export default ChatSuggestion