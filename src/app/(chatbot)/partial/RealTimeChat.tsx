import { usePostDataMutation } from "@/api/api";
import { IChatLoginFormData } from "@/features/chatbot/hooks/useChatAuth";
import ChatLoginForm from "@/features/chatbot/partials/ChatLoginForm";
import React from "react";
import MessagesContainer from "./MessagesContainer";

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
    <>
      {userId ? (
        <div className="">
          <MessagesContainer />
        </div>
      ) : (
        <ChatLoginForm handleLogin={handleLogin} />
      )}
    </>
  );
};

export default RealTimeChat;
