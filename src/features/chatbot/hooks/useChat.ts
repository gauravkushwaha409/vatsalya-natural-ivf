import { useGetAllDataInfiniteQuery } from "@/api/api";
import { BASE_CHATBOT_URL, BASE_SOCKET_URL } from "@/api/endpoints";
import { useAppSelector } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { IChatMessage } from "../interfaces/dto/message.type";
import { FileTypes } from "../interfaces/file.types";
export interface IMessage extends IChatMessage {
  status?: "sending" | "sent" | "failed" | "typing";
  sender: "user" | "bot" | "systemUser";
}

export const useChat = (token: string | null, room?: string) => {
  const { user, room: roomData } = useAppSelector((state) => state.chat);
  const { data, fetchNextPage, refetch, isFetchingNextPage, hasNextPage } =
    useGetAllDataInfiniteQuery(
      {
        url: `${BASE_CHATBOT_URL}/message/rooms/${roomData?.id}/`,
      },
      { skip: !roomData?.id }
    );
  const userName = user?.firstname + " " + user?.lastname;
  const userId = user?.id;
  const [isSending, setIsMessageSending] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const url = `${BASE_SOCKET_URL}/${room}/?token=${token}`;
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  const fetchMoreDataAndUpdateMessages = async () => {
    await refetch();
    await fetchNextPage();
    setMessages(() => {
      const allMsgs: IMessage[] = (data?.pages ?? [])
        .flatMap((page) => {
          return page.results?.data;
        })
        .sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        )
        .map((msg) => ({
          message: msg?.message,
          sender:
            msg?.sender === userId
              ? "user"
              : msg?.is_bot
              ? "bot"
              : "systemUser",
          sender_id: msg?.sender,
          sender_name: "",
          room_id: msg?.room,
          room_name: roomData?.name || "",
          avatar: "",
          file: msg?.file,
          file_type: msg?.file_type,
          type: "chat_message",
          status: msg?.sender === userId ? "sent" : undefined,
          created_at: msg?.created_at,
          is_bot: msg?.is_bot,
          call_type: msg?.call_type,
        }));
      return [...allMsgs];
    });
  };

  const handleFetchMoreData = async () => {
    if (!hasNextPage) return;
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      const previousScrollHeight = container.scrollHeight;
      const previousScrollTop = container.scrollTop;

      await fetchMoreDataAndUpdateMessages();

      const newScrollHeight = container.scrollHeight;
      const scrollDifference = newScrollHeight - previousScrollHeight;

      container.scrollTop = previousScrollTop + scrollDifference;
    } else {
      fetchMoreDataAndUpdateMessages();
    }
  };

  useEffect(() => {
    if (!token || !room) {
      // console.warn("Missing token or room. WebSocket not initialized.");
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
          setTimeout(() => {
            chatContainerRef.current?.scrollTo(
              0,
              chatContainerRef.current.scrollHeight
            );
          }, 1);
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
    setTimeout(() => {
      chatContainerRef.current?.scrollTo(
        0,
        chatContainerRef.current.scrollHeight
      );
    }, 1);
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
    fetchNextPage: handleFetchMoreData,
    isFetchingNextPage,
  };
};
