import { BASE_CHATBOT_URL, endpoints } from "@/api/endpoints";
import { loginTochatBot } from "@/store/slices/chatslice";
import { useAppSelector } from "@/store/store";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ILoginResponse } from "../interfaces/dto/loginDTO";

export interface IChatLoginFormData {
  email: string;
  phone_no: string;
  name: string;
}

export const useChatAuth = () => {
  const { isLoggedIn, room, token, user } = useAppSelector(
    (state) => state.chat
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (formData: IChatLoginFormData) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post<ILoginResponse>(
        `${BASE_CHATBOT_URL}${endpoints.chatbot.register}`,
        formData
      );
      const { user, room, access } = data.data;

      dispatch(
        loginTochatBot({
          room: { id: room.id, name: room.name },
          token: access,
          user,
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoggedIn,
    error,
    isLoading,
    handleLogin,
    token,
    userName: user?.firstname + " " + user?.lastname,
    roomName: room?.name,
    roomId: room?.id,
    userId: user?.id,
  };
};
