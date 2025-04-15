"use client";
import { BASE_API_URL } from "@/api/endpoints";

import { useChat } from "../hooks/useChat";
import { useState } from "react";
import Header from "./Header";
import MessagesContainer from "./MessagesContainer";
import MessageInput from "./MessageInput";

const MessageUI: React.FC<{ isOpen: boolean; closePopup: () => void }> = ({
  closePopup,
  isOpen,
}) => {
  const token = process.env.NEXT_PUBLIC_WEBSOCKET_TOKEN || "";
  const { sendMessage, messages, chatContainerRef } = useChat(token);
  console.log("api base url is", BASE_API_URL);

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #EBC0DB 0%, #FFD2CE 100%), url('/noise.png') center / cover no-repeat, lightgray",
        boxShadow: "0px 5px 19.9px 5px rgba(0, 0, 0, 0.06)",
        opacity: isOpen ? "1" : "0",
        pointerEvents: isOpen ? "all" : "none",
        transform: isOpen ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
      }}
      className="flex flex-col border rounded-[1.25rem] min-w-[25rem] h-[40rem] max-h-[calc(100vh-10rem)] overflow-hidden"
    >
      <Header onClose={closePopup} />
      <div ref={chatContainerRef} className="flex-1 px-1.5 overflow-y-auto ">
        <MessagesContainer messages={messages} />
      </div>

      <div className="shrink-0">
        <MessageInput sendMessage={sendMessage} />
      </div>
    </div>
  );
};
export default MessageUI;
