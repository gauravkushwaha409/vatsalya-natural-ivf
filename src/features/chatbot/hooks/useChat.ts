import { useEffect, useRef, useState } from "react";

export type ChatMessage = {
  type: string;
  message: string;
  file?: string;
  file_type?: string;
};

export const useChat = (token: string, room: string = "testroom") => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [receivedMessage, setReceivedMessage] = useState<ChatMessage[]>([]);
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
    const url = `wss://api.nipali.com/ws/${room}/?token=${token}`;
    console.log("🌐 Connecting to WebSocket URL:", url);

    const socket = new WebSocket(url);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("✅ WebSocket connected");
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      console.log("📩 Raw WebSocket message:", event.data);
      try {
        const data: ChatMessage = JSON.parse(event.data);
        console.log("🧾 Parsed message:", data);

        if (data.type === "chat_message") {
          setMessages((prev) => [...prev, data]);
        } else {
          console.log("ℹ️ Unknown message type:", data.type);
        }
      } catch (error) {
        console.error("❌ Failed to parse message", error);
      }
    };

    socket.onerror = (error) => {
      console.error("❌ WebSocket error occurred", error);
    };

    socket.onclose = (event) => {
      console.warn("🔌 WebSocket closed", {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean,
      });
      setIsConnected(false);
    };

    return () => {
      console.log("👋 Closing WebSocket");
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
