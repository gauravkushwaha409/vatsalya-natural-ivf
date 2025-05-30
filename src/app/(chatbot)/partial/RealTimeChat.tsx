import { usePostDataMutation } from "@/api/api";
import { IChatLoginFormData } from "@/features/chatbot/hooks/useChatAuth";
import ChatLoginForm from "@/features/chatbot/partials/ChatLoginForm";
import MessagesContainer from "@/features/chatbot/partials/MessagesContainer";
import React from "react";

const RealTimeChat = () => {
  const [chatLogin] = usePostDataMutation();

  const handleLogin = async (formData: IChatLoginFormData) => {
    try {
      const response = await chatLogin({
        url: `/client`,
        data: formData,
      });
      if (response.data.status === "success") {
        localStorage.setItem("userId", response?.data?.data?.id);
      }
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const userId = localStorage.getItem("userId");

  return (
    <div>
      {userId ? (
        <>
          <MessagesContainer />
        </>
      ) : (
        <ChatLoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default RealTimeChat;
