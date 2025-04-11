import { useEffect, useRef, useState } from "react";

export type ChatMessage = {
  type: string;
  message: string;
  file?: string;
  file_type?: string;
};

export const useChat = (token: string, room: string = "testroom") => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(
      `wss://api.nipali.com/ws/${room}/?token=${token}`
    );
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("✅ WebSocket connected");
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      try {
        const data: ChatMessage = JSON.parse(event.data);
        console.log("📩 Received:", data);

        if (data.type === "chat_message") {
          setMessages((prev) => [...prev, data]);
        }
      } catch (error) {
        console.error("❌ Failed to parse message", error);
      }
    };

    socket.onerror = (error) => {
      console.error("❌ WebSocket error", error);
    };

    socket.onclose = () => {
      console.log("🔌 WebSocket closed");
      setIsConnected(false);
    };

    return () => {
      socket.close();
    };
  }, [token, room]);

  const sendMessage = (message: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      const payload = JSON.stringify({ type: "chat_message", message });
      socketRef.current.send(payload);
    }
  };

  return { isConnected, messages, sendMessage };
};
