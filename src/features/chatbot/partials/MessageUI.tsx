"use client";

import { useAppSelector } from "@/store/store";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useChat } from "../hooks/useChat";
import { useChatAuth } from "../hooks/useChatAuth";
import ChatLoginForm from "./ChatLoginForm";
import ChatSuggestion from "./ChatSuggestion";
import Header from "./Header";
import MessageInput from "./MessageInput";
import MessagesContainer from "./MessagesContainer";

const MessageUI: React.FC<{ isOpen: boolean; closePopup: () => void }> = ({
  closePopup,
  isOpen,
}) => {
  const isLoggedIn = useAppSelector((state) => state.chat.isLoggedIn);
  const { token, roomName, handleLogin } = useChatAuth();
  const {
    sendMessage,
    messages,
    chatContainerRef,
    isSending,
    suggestions,
    fetchNextPage,
    isFetchingNextPage,
    isConnected,
  } = useChat(token, roomName);

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #EBC0DB 0%, #FFD2CE 100%), url('/noise.webp') center / cover no-repeat, lightgray",
        boxShadow: "0px 5px 19.9px 5px rgba(0, 0, 0, 0.06)",
        opacity: isOpen ? "1" : "0",
        pointerEvents: isOpen ? "all" : "none",
        transform: isOpen ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
      }}
      className="flex flex-col border rounded-[1.25rem] min-w-[25rem] h-[40rem] max-h-[calc(100vh-10rem)] overflow-hidden"
    >
      <Header isConnected={isConnected} onClose={closePopup} />

      {isLoggedIn ? (
        <>
          <div ref={chatContainerRef} className="flex-1 px-1.5 overflow-y-auto">
            <motion.div
              onViewportEnter={fetchNextPage}
              className="flex justify-center items-center"
            >
              {isFetchingNextPage ? (
                <>
                  <Loader2 className="text-primary-500 animate-spin" />
                  <span className="text-primary-500 text-xs">Loading...</span>
                </>
              ) : (
                ""
              )}
            </motion.div>
            <MessagesContainer messages={messages} />
          </div>
          <ChatSuggestion
            sendMessage={sendMessage}
            suggestions={suggestions}
            disabled={isSending}
          />
          <div className="shrink-0">
            <MessageInput disabled={isSending} sendMessage={sendMessage} />
          </div>
        </>
      ) : (
        <ChatLoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
};
export default MessageUI;
