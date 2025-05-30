import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { useSocketChat } from "@/app/(chatbot)/hooks/useSocketChat";

const MessagesContainer = () => {
  const { handleSendMessage, messages, chatContainerRef } = useSocketChat();
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex-1 overflow-y-auto" ref={chatContainerRef}>
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className="">
        <MessageInput sendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
export default MessagesContainer;
