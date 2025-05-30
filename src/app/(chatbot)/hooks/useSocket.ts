import { BASE_API_URL } from "@/api/endpoints";
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const SERVER_URL = BASE_API_URL;
// const SERVER_URL = 'http://localhost:8000';

export function useSocket(): Socket | null {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(SERVER_URL);

    socketIo.on("connect", () => {
      console.log("Socket connected");
    });

    socketIo.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return socket;
}
