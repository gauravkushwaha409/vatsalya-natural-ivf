import type React from "react";
import type { Message } from "../types/index";
import { User } from "lucide-react";
import Bot from "../../../../public/svg/bot-image.svg";
import Image from "next/image";
interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const isUser = message.sender === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 group`}
    >
      {!isUser && (
        <div className=" mr-2">
          <div className="h-8 w-8 rounded-full bg-seconadry-500 flex items-center justify-center bg-white p-1">
            <Image
              src={Bot}
              alt="bot"
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      )}

      <div className="max-w-[85%]">
        <div
          className={`px-4 py-2 rounded-2xl shadow-sm text-sm ${
            isUser
              ? "bg-secondary-500 text-white rounded-tr-none"
              : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
          }`}
        >
          <div className="whitespace-pre-wrap">{message.text}</div>
        </div>
        <div
          className={`text-xs mt-1 text-gray-500 ${
            isUser ? "text-right mr-1" : "ml-1"
          }`}
        >
          {formatTime(message.timestamp)}
        </div>
      </div>

      {isUser && (
        <div className=" ml-2">
          <div className="h-8 w-8 rounded-full bg-secondary-500 flex items-center justify-center border border-gray-200">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
