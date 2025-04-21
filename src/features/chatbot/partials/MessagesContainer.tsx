import { useAppSelector } from "@/store/store";
import React from "react";
import { IChatMessage } from "../interfaces/dto/message.type";
import Message from "./Message";

const MessagesContainer: React.FC<{ messages: IChatMessage[] }> = ({
  messages,
}) => {
  const myid = useAppSelector((state) => state.chat.user?.id);
  return (
    <div className="space-y-5 mb-4 px-1.5 pt-4 w-full h-full">
      {/* <Message text="Hello, how can I help you?" sender="bot" /> */}

      {messages?.map((message: IChatMessage, index) => (
        <Message
          key={index}
          text={message?.message}
          sender={message.sender_id === myid ? "user" : "bot"}
        />
      ))}
    </div>
  );
};
export default MessagesContainer;
