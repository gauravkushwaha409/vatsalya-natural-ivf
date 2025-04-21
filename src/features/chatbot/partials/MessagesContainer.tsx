import React, { useEffect } from "react";
import { ChatMessage } from "../hooks/useChat";
import Message from "./Message";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MessagesContainer: React.FC<{ messages: any }> = ({ messages }) => {
  const [newMessage, setNewMessage] = React.useState([]);
  useEffect(() => {
    setNewMessage(messages);
  }, [messages]);
  console.log("messages testing new", newMessage);

  return (
    <div className="space-y-5 mb-4 px-1.5 pt-4 w-full h-full">
      <Message text="Hello, how can I help you?" sender="bot" />
      {/* <Message text="Hello, how can I help you?" sender="user" name="saugat" />
      <Message text="Hello, how can I help you?" sender="bot" /> */}

      {newMessage?.map((message: ChatMessage, index) => (
        <Message key={index} text={message?.message} sender={"user"} />
      ))}
    </div>
  );
};
export default MessagesContainer;
