import React, { useRef } from "react";
import Message from "../../../features/chatbot/partials/Message";
import MessageInput from "../../../features/chatbot/partials/MessageInput";
import { useSocketChat } from "@/app/(chatbot)/hooks/useSocketChat";

const MessagesContainer = () => {
  const { handleSendMessage, messages, chatContainerRef } = useSocketChat();
  return (
    <div className="flex flex-col h-[460px]">
      <div className="flex-1 overflow-auto" ref={chatContainerRef}>
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className="flex-shrink-0">
        <MessageInput sendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
export default MessagesContainer;
