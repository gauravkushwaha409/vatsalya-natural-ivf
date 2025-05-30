import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { Message, ChatContextType } from "../types";
import axios from "axios";
import { BASE_API_URL } from "@/api/endpoints";

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Welcome to Vatsalya Chatbot! How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  // const sessionId = React.useMemo(() => "session-" + Date.now(), []);

  const sendMessage = useCallback(async (text: string) => {
    // Add user message to chat
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await axios.post(
        `${BASE_API_URL}/chatbot/message`,
        { message: text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      setTimeout(() => {
        const botMessage: Message = {
          id: `bot-${Date.now()}`,
          text: data.data.message,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);

      setTimeout(() => {
        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          text: "Sorry, there was an error processing your request.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  }, []);

  return (
    <ChatContext.Provider value={{ messages, isTyping, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
