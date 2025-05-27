import { motion } from "motion/react";
import Image from "next/image";
import { IMessage } from "../../hooks/useChat";

type MessageProps = {
  message: IMessage[];
};

const CategoriesMessage: React.FC<MessageProps> = ({ message }) => {
  console.log(message, "catmessage");

  return (
    <>
      {message?.map((msg) => (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, bounce: 0.1 }}
          className={`w-full flex justify-start gap-[0.88rem]  items-end ${
            message?.sender == "user" ? " flex-row-reverse" : " flex-row"
          }
              ${message?.status == "sending" ? "animate-pulse opacity-50" : ""}
               mb-2`}
        >
          <div className="relative">
            <Image
              src={"/svg/bot-image.svg"}
              width={50}
              height={50}
              alt="bot image"
              className="rounded-full size-[1.75rem]"
            />
          </div>
          <div
            className={`max-w-[70%] p-2.5 rounded-3xl ${
              message?.sender == "user"
                ? "bg-primary-50 text-text-400 rounded-br-xs"
                : "bg-secondary-50 text-text-400 rounded-bl-xs"
            }`}
          >
            <p className="typography-paragraph-regular">{msg?.answer}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};
export default CategoriesMessage;

// const TypingAnimation: React.FC = () => {
//   return (
//     <div className="flex items-center gap-2 px-2 py-1">
//       <div className="bg-primary-500 rounded-full size-1.5 animate-bounce"></div>
//       <div className="bg-primary-500 rounded-full size-1.5 animate-bounce delay-200"></div>
//       <div className="bg-primary-500 rounded-full size-1.5 animate-bounce delay-400"></div>
//     </div>
//   );
// };
