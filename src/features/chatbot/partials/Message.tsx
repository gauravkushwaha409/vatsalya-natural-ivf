import { ISocketMessage } from "@/app/(chatbot)/hooks/useSocketChat";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type MessageProps = {
  message: ISocketMessage;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  message, " messagee";
  const userId = localStorage.getItem("userId");
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, bounce: 0.1 }}
      className={`flex ${
        message.senderId === userId ? "justify-end" : "justify-start"
      } gap-3 mb-4 px-2`}
    >
      <div
        className={` ${message.senderId === userId ? "hidden" : "relative"} `}
      >
        <Image
          src={"/svg/bot-image.svg"}
          width={50}
          height={50}
          alt="bot image"
          className="rounded-full size-[1.75rem]"
        />
        {status === "sending" && (
          <div className="absolute inset-0 flex justify-center items-center bg-secondary-500/20 rounded-full">
            <Loader2 className="text-secondary-500 animate-spin" />
          </div>
        )}
      </div>
      <div
        className={`max-w-[70%] p-2.5 rounded-3xl
             bg-secondary-50 text-text-400 rounded-bl-xs
        `}
      >
        {message?.type === "image" ? (
          <Link href={message?.image?.imageUrl || ""}>
            <div className="h-40 w-40">
              <Image
                src={message?.image?.imageUrl || ""}
                alt={message?.image?.imageName || ""}
                width={400}
                height={400}
                className="object-contain h-full w-full"
              />
            </div>
          </Link>
        ) : (
          <>
            <p className={``}>{message?.content}</p>
          </>
        )}
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
