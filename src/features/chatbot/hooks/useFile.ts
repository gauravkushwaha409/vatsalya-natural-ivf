import { BASE_CHATBOT_URL } from "@/api/endpoints";
import { useAppSelector } from "@/store/store";
import axios from "axios";
import { useState } from "react";
import { IFileUploadResponse } from "../interfaces/file.types";

const useFile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { room, token } = useAppSelector((state) => state.chat);
  const roomId = room?.id;

  const url = `${BASE_CHATBOT_URL}/chat/upload/`;

  const handleFileUpload = async (file: File): Promise<string | undefined> => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("room", roomId || "");
      const response = await axios.post<IFileUploadResponse>(url, formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      return response.data.data.file_url;
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return {
    isUploading: isLoading,
    handleFileUpload,
  };
};
export default useFile;
