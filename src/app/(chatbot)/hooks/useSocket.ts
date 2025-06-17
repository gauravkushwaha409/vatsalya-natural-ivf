import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const SERVER_URL = "https://api.vatsalya.com.np";
// const SERVER_URL = 'http://localhost:8000';

export function useSocket(): Socket | null {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(SERVER_URL);

    socketIo.on("connect", () => {
      ("Socket connected");
    });

    socketIo.on("disconnect", () => {
      ("Socket disconnected");
    });

    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return socket;
}
