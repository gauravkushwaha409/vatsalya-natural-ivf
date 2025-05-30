import { useState, useEffect, useRef, ChangeEvent } from "react";
import { useSocket } from "./useSocket";
import { usePostDataMutation } from "@/api/api";

export interface ISocketMessage {
  senderId: string;
  content: string;
  sendTime: string;
  type?: string;
  image?: { imageUrl: string; imageName: string };
}

export const useSocketChat = () => {
  const socket = useSocket();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ISocketMessage[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const employeeId = localStorage.getItem("userId") || "";

  const [uploadFile] = usePostDataMutation();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!socket) return;

    const cleanup = () => {
      socket.off("chat message");
      socket.off("new message");
      socket.off("message sent");
      socket.off("chat history");
    };

    cleanup();

    socket.emit("register", employeeId);

    socket.on("chat message", handleIncomingMessage);
    socket.on("chat history", handleChatHistory);
    socket.emit("request chat history", {
      userId: employeeId,
      receiverId: "67ef74f75f96cfedbfa6420f",
    });

    return () => {
      socket.off("chat message").off("chat history");
    };
  }, [socket, employeeId]);

  const handleIncomingMessage = (msg: any) => {
    setMessages((prev) => [
      ...prev,
      {
        senderId: msg.senderId,
        content: msg.content,
        sendTime: msg.sendTime,
        type: msg.type,
        image: msg.image,
      },
    ]);
  };

  const handleChatHistory = (history: any[]) => {
    setMessages(
      history.map((msg) => ({
        senderId: msg.senderId,
        content: msg.content,
        sendTime: msg.sendTime,
        type: msg.type,
        image: msg.image,
      }))
    );
  };

  const handleSendMessage = async (values: any, { resetForm }: any) => {
    if (!socket?.connected) {
      alert("not connected");
      return;
    }
    const { message, image } = values;

    if (image) {
      handleFileUpload("image", image);
    } else if (message) {
      socket.emit("chat message", {
        senderId: employeeId,
        receiverId: "67ecfbde77d055e8c834e47a",
        content: message,
        type: "text",
      });
    }

    resetForm();
    resetPreviews();
  };

  const handleFileUpload = async (type: string, file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await uploadFile({
        url: "adasdf",
        data: formData,
      });

      if (socket && response.data.status === "success") {
        socket.emit(`upload ${type}`, {
          senderId: employeeId,
          receiverId: "67ef74f75f96cfedbfa6420f",
          file: response.data.data.file_url,
          filename: file.name,
          type: type,
        });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
    fieldName: string
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFieldValue(fieldName, file);

    if (file.type.startsWith("image/")) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const resetPreviews = () => {
    setImagePreview(null);
  };

  return {
    chatContainerRef,
    messages,
    imagePreview,
    employeeId,
    handleSendMessage,
    handleFileChange,
  };
};
