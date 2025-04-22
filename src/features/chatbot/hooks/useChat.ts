import { BASE_SOCKET_URL } from "@/api/endpoints";
import { useEffect, useRef, useState } from "react";
import { IChatMessage } from "../interfaces/dto/message.type";

// interface IMessage extends IChatMessage {
//   loading?: boolean;
//   sender: "user" | "bot";
// }

export const useChat = (token: string | null, room?: string) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      setTimeout(() => {
        chatContainerRef.current?.scrollTo(
          0,
          chatContainerRef.current.scrollHeight
        );
      }, 1);
    }
  }, [messages]);

  useEffect(() => {
    if (!token || !room) {
      console.warn("Missing token or room. WebSocket not initialized.");
      return;
    }
    const url = `${BASE_SOCKET_URL}/${room}/?token=${token}`;

    const socket = new WebSocket(url);
    socketRef.current = socket;

    socket.onopen = () => {
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      try {
        const data: IChatMessage = JSON.parse(event.data);
        if (data.type === "chat_message") {
          setMessages((prev) => [...prev, data]);
        } else {
        }
      } catch (error) {
        console.error("Failed to parse message", error);
      }
    };

    socket.onerror = (error) => {
      console.error("❌ WebSocket error occurred", error);
    };

    socket.onclose = (event) => {
      console.warn(" WebSocket closed", {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean,
      });
      setIsConnected(false);
    };

    return () => {
      console.log("Closing WebSocket");
      socket.close();
    };
  }, [token, room]);

  const sendMessage = (message: string) => {
    const payload = JSON.stringify({ type: "chat_message", message });
    console.log("📤 Sending message:", payload);

    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(payload);
    } else {
      console.warn("🚫 WebSocket is not open. Message not sent.");
    }
  };

  return { isConnected, messages, sendMessage, chatContainerRef };
};
