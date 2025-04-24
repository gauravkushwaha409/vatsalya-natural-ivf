import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

type MessageProps = {
  text: string;
  sender: "user" | "bot" | "systemUser";
  name?: string;
  status?: "sending" | "sent" | "failed" | "typing";
  senderDetails?: {
    name: string;
    image?: string;
    sendTime?: string;
  };
};

const Message: React.FC<MessageProps> = ({ sender, text, status }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, bounce: 0.1 }}
      className={`w-full flex justify-start gap-[0.88rem]  items-end ${
        sender == "user" ? " flex-row-reverse" : " flex-row"
      }
        ${status == "sending" ? "animate-pulse opacity-50" : ""}
         mb-2`}
    >
      <div className="relative">
        {sender == "user" ? (
          <div className="flex justify-center items-center bg-primary-400 rounded-full size-[1.75rem] font-semibold text-white text-sm">
            {sender ? sender[0].toUpperCase() : ""}
          </div>
        ) : (
          <Image
            src={"/svg/bot-image.svg"}
            width={50}
            height={50}
            alt="bot image"
            className="rounded-full size-[1.75rem]"
          />
        )}
        {status === "sending" && (
          <div className="absolute inset-0 flex justify-center items-center bg-secondary-500/20 rounded-full">
            <Loader2 className="text-secondary-500 animate-spin" />
          </div>
        )}
      </div>
      <div
        className={`max-w-[70%] p-2.5 rounded-3xl ${
          sender == "user"
            ? "bg-primary-50 text-text-400 rounded-br-xs"
            : "bg-secondary-50 text-text-400 rounded-bl-xs"
        }`}
      >
        <p className="typography-paragraph-regular">{text}</p>
      </div>
    </motion.div>
  );
};
export default Message;

// const TypingAnimation: React.FC = () => {
//   return (
//     <div className="flex items-center gap-2 px-2 py-1">
//       <div className="bg-primary-500 rounded-full size-1.5 animate-bounce"></div>
//       <div className="bg-primary-500 rounded-full size-1.5 animate-bounce delay-200"></div>
//       <div className="bg-primary-500 rounded-full size-1.5 animate-bounce delay-400"></div>
//     </div>
//   );
// };
