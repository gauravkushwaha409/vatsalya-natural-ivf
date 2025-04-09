import { useEffect, useRef, useState } from "react";

export const useChat = (token: string, room: string = "testroom") => {
  // const [messages, setMessages] = useState<MessageType[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  // Connect socket
  useEffect(() => {
    const socket = new WebSocket(
      `wss://api.nipali.com/ws/${room}/?token=${token}`
    );
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("✅ WebSocket connected");
      setIsConnected(true);
    };

    // socket.onmessage = (event) => {
    //   const data = JSON.parse(event.data);
    //   console.log("📩 Received:", data);

    //   // Customize based on how server sends messages
    //   setMessages((prev) => [
    //     ...prev,
    //     {
    //       text: data?.text || "Unknown message",
    //       sender: "bot",
    //     },
    //   ]);
    // };

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

  return { isConnected };
};
