import { BASE_CHATBOT_URL } from "@/api/endpoints";
import axios from "axios";
import { useState } from "react";
import { IFileUploadResponse } from "../interfaces/file.types";
import { useChatAuth } from "./useChatAuth";

const useFile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {roomId,token}=useChatAuth()
  const url = `${BASE_CHATBOT_URL}/chat/upload/`;

  const handleFileUpload = async (file: File):Promise<string|undefined> => {
    setIsLoading(true)
    try {
      const formData = new FormData();
      formData.append("file", file)
      formData.append("room", roomId||"");
      const response = await axios.post<IFileUploadResponse>(url, formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      return response.data.data.file_url
    } catch (error) {
      setIsLoading(false);
      console.error(error)
    }
    
  };

  return {
    isUploading: isLoading,
    handleFileUpload,
  };
  
};
export default useFile;