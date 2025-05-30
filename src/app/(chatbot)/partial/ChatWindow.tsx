import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";
import { useChat } from "../context/ChatContext";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import MessageInput from "./MessageInput";
import { MessageCircle, X } from "lucide-react";
import Header from "@/features/chatbot/partials/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatLoginForm from "@/features/chatbot/partials/ChatLoginForm";
import { useSocket } from "@/app/(chatbot)/hooks/useSocket";
import RealTimeChat from "./RealTimeChat";
interface ChatWindowProps {
  isOpen: boolean;
  closePopup: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, closePopup }) => {
  const { messages, isTyping } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Custom styles for the modal
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    content: {
      top: "auto",
      left: "auto",
      right: "20px",
      bottom: "80px",
      width: "390px",
      maxWidth: "90vw",
      height: "500px",
      maxHeight: "70vh",
      borderRadius: "10px",
      padding: "0",
      border: "1px solid #ddd",
      background:
        "linear-gradient(90deg, #EBC0DB 0%, #FFD2CE 100%), url('/noise.webp') center / cover no-repeat, lightgray",
      boxShadow: "0px 5px 19.9px 5px rgba(0, 0, 0, 0.06)",
      transform: isOpen ? "translateY(0)" : "translateY(10px)",
      transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closePopup}
      style={customStyles}
      contentLabel="Chat Window"
      ariaHideApp={false}
    >
      <div className="flex flex-col h-full relative">
        <Header isConnected={true} onClose={closePopup} />
        <Tabs
          defaultValue="chatBot"
          className=" overflow-y-auto rounded-none  no-scrollbar h-full"
        >
          <TabsList className="w-full sticky -top-1 rounded-none bg-secondary-50  ">
            <TabsTrigger value="chatBot" className="">
              Chat with bot
            </TabsTrigger>
            <TabsTrigger value="RTC">Chat with experts</TabsTrigger>
          </TabsList>
          <TabsContent value="chatBot" className="flex flex-col flex-1 h-80 ">
            {/* Message area */}
            <div className="flex-1 overflow-y-auto px-2">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t border-gray-200 bg-white p-2 shrink-0">
              <MessageInput />
            </div>
          </TabsContent>
          <TabsContent value="RTC" className="">
            <RealTimeChat />
          </TabsContent>
        </Tabs>
      </div>
    </ReactModal>
  );
};

export default ChatWindow;
