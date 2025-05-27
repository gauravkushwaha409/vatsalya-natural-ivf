import React from "react";
import { IMessage } from "../../hooks/useChat";
import CategoriesMessage from "./CategoriesMessage";

const MessagesContainer: React.FC<{ messages: IMessage[] }> = ({
  messages,
}) => {
  return (
    <div className="space-y-5 mb-4 px-1.5 pt-4 w-full h-max overflow-y-hidden">
      {messages?.map((message, index) => (
        <CategoriesMessage key={index} message={message?.answer} />
      ))}
    </div>
  );
};
export default MessagesContainer;
