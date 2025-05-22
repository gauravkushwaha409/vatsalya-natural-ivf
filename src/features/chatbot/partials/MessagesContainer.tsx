import React from "react";
import { IMessage } from "../hooks/useChat";
import Message from "./Message";

const MessagesContainer: React.FC<{ messages: IMessage[] }> = ({
  messages,
}) => {
  return (
    <div className="space-y-5 mb-4 px-1.5 pt-4 w-full h-max overflow-y-hidden">
      {messages?.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};
export default MessagesContainer;
