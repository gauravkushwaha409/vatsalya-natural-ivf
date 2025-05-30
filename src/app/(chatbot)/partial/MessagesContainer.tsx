import React from "react";
import Message from "../../../features/chatbot/partials/Message";
import MessageInput from "../../../features/chatbot/partials/MessageInput";
import { useSocketChat } from "@/app/(chatbot)/hooks/useSocketChat";

const MessagesContainer = () => {
  const { handleSendMessage, messages, chatContainerRef } = useSocketChat();
  return (
    <div className="flex flex-col h-full flex-1 ">
      <div className="">
        <div className="flex-1 overflow-y-auto" ref={chatContainerRef}>
          {messages?.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
      </div>
      <div className=" ">
        <MessageInput sendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
export default MessagesContainer;
