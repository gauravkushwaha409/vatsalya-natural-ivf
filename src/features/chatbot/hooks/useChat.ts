import { useGetAllDataInfiniteQuery } from "@/api/api";
import { BASE_CHATBOT_URL, BASE_SOCKET_URL } from "@/api/endpoints";
import { useAppSelector } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import {
  IChatMessage,
  IChatMessageHistoryResponse,
} from "../interfaces/dto/message.type";
import { FileTypes } from "../interfaces/file.types";
import page from "@/app/(home)/page";
export interface IMessage extends IChatMessage {
  status?: "sending" | "sent" | "failed" | "typing";
  sender: "user" | "bot" | "systemUser";
}

export const useChat = (token: string | null, room?: string) => {
  const { user, room: roomData } = useAppSelector((state) => state.chat);
  const { data, fetchNextPage, refetch } = useGetAllDataInfiniteQuery({
    url: `${BASE_CHATBOT_URL}/chat/rooms/${roomData?.id}/`,
  });
  const userName = user?.firstname + " " + user?.lastname;
  const userId = user?.id;
  const [isSending, setIsMessageSending] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const url = `${BASE_SOCKET_URL}/${room}/?token=${token}`;
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  const appendHistoryToMessages = async () => {
    await refetch();
    const messagesData = data?.pages as IChatMessageHistoryResponse[];
    const messagesList: IMessage[] = [];
    console.log(messagesData, "pagedata");
    if (messagesData && messagesData.length > 0) {
      messagesData?.forEach((page) => {
        page?.results?.data?.messages?.forEach((message) => {
          const transformedMessage: IMessage = {
            message: message.message,
            sender:
              message.sender === userId
                ? "user"
                : message.is_bot
                ? "bot"
                : "systemUser",
            sender_id: message.sender,
            sender_name: "",
            room_id: message.room,
            room_name: roomData?.name || "",
            avatar: "",
            file: message.file,
            file_type: message.file_type,
            type: "chat_message",
            status: message.sender === userId ? "sent" : undefined,
            created_at: message.created_at,
            is_bot: message.is_bot,
            call_type: message.call_type,
          };
          messagesList.push(transformedMessage);
        });
      });
      console.log(messagesList, "sdfjkdsljflksdjklfj");
      setMessages([...messagesList]);
    }
  };

  // fetch and populate messages on initial load
  useEffect(() => {
    fetchNextPage();
    appendHistoryToMessages();
  }, [data]);

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
  // Effect to handle socket connection and message handling
  useEffect(() => {
    if (!token || !room) {
      console.warn("Missing token or room. WebSocket not initialized.");
      return;
    }
    let socket: WebSocket | null = null;
    try {
      socket = new WebSocket(url);
      socketRef.current = socket;
    } catch (error) {
      console.log("Failed to create WebSocket connection", error);
      return;
    }

    return () => {
      socket?.close();
    };
  }, [token, room, url, userId]);

  // effect to handle socket events
  useEffect(() => {
    const socket = socketRef.current;
    if (!socket) return;

    const handleNewMessages = (event: MessageEvent) => {
      try {
        const socketData: IChatMessage = JSON.parse(event.data);

        const data: IMessage = {
          ...socketData,
          sender:
            socketData.sender_id === userId
              ? "user"
              : socketData.is_bot == false
              ? "systemUser"
              : "bot",
        };
        if (data.type === "chat_message") {
          // handle suggestions
          if (data.sender !== "user") {
            setSuggestions(data.suggestions || []);
          }
          if (data.sender_id === userId) {
            setIsMessageSending(false);
            // update the last message with sending message status
            setMessages((prev) => {
              const sendingStatusIndex = prev.findIndex(
                (message) =>
                  message.sender === "user" && message.status === "sending"
              );
              if (prev.length > 0 && sendingStatusIndex !== -1) {
                const updatedMessages = [...prev];
                updatedMessages[sendingStatusIndex] = {
                  ...updatedMessages[sendingStatusIndex],
                  status: "sent" as const,
                };
                return updatedMessages;
              }
              return [...prev, data];
            });
          } else {
            setMessages((prev) => [...prev, data]);
          }
        }
      } catch (error) {
        console.error("Failed to parse message", error);
      }
    };

    socket.onopen = () => {
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      handleNewMessages(event);
    };
    // socket.onerror = (error) => {
    //   console.error("❌ WebSocket error occurred", error);
    // };
    socket.addEventListener("error", (event) => {
      console.error("❌ WebSocket error occurred", event);
      setIsMessageSending(false);
      setIsConnected(false);
    });

    socket.onclose = (event) => {
      console.warn(" WebSocket closed", {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean,
      });
      setIsConnected(false);
    };
  }, [socketRef, messages, userId]);

  const sendMessage = (
    message: string,
    file?: { file: string; type: FileTypes }
  ) => {
    if (!isConnected) {
      return;
    }
    const payload = JSON.stringify({
      type: "chat_message",
      message,
      file: file?.file,
      file_type: file?.type,
    });
    const newData: IMessage = {
      avatar: "",
      message,
      room_id: room || "",
      sender: "user",
      room_name: room || "",
      sender_id: userId || "",
      type: "chat_message",
      sender_name: userName,
      file: file?.file,
      file_type: file?.type,
      status: "sending",
    };

    setMessages((prev) => {
      return [...prev, newData];
    });
    setIsMessageSending(true);
    try {
      if (socketRef.current?.readyState === WebSocket.OPEN) {
        socketRef.current.send(payload);
      } else {
        handleMessageSendError();
      }
    } catch (error: unknown) {
      handleMessageSendError(error as Event);
    }
  };
  const handleMessageSendError = (error?: Event) => {
    console.error("❌ WebSocket error occurred", error);
    setIsMessageSending(false);
    setMessages((prev) => {
      const sendingStatusIndex = prev.findIndex(
        (message) => message.sender === "user" && message.status === "sending"
      );
      if (sendingStatusIndex !== -1) {
        const updatedMessages = [...prev];
        updatedMessages[sendingStatusIndex] = {
          ...updatedMessages[sendingStatusIndex],
          status: "failed" as const,
        };
        return updatedMessages;
      }
      return prev;
    });
  };

  return {
    isConnected,
    messages,
    sendMessage,
    chatContainerRef,
    isSending,
    suggestions,
  };
};
