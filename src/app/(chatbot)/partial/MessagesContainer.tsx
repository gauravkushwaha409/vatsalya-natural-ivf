import React from "react";
import Message from "../../../features/chatbot/partials/Message";
import MessageInput from "../../../features/chatbot/partials/MessageInput";
import { useSocketChat } from "@/app/(chatbot)/hooks/useSocketChat";

const MessagesContainer = () => {
  const { handleSendMessage, messages, chatContainerRef } = useSocketChat();
  return (
    <div className="flex flex-col h-80 flex-1">
      <div className="flex-1 overflow-y-auto  h-5 " ref={chatContainerRef}>
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className=" ">
        <MessageInput sendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
export default MessagesContainer;
