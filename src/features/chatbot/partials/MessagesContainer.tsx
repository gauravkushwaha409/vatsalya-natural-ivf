import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { useSocketChat } from "@/app/(chatbot)/hooks/useSocketChat";

const MessagesContainer = () => {
  const { handleSendMessage, messages, chatContainerRef } = useSocketChat();
  console.log(messages, "socketmsg");
  return (
    <div className="flex flex-col flex-1 h-[23rem]">
      <div className="flex-1 overflow-y-auto" ref={chatContainerRef}>
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className="border-t border-gray-200  mt-2 ">
        <MessageInput sendMessage={handleSendMessage} disabled={false} />
      </div>
    </div>
  );
};
export default MessagesContainer;
