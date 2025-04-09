/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { BASE_API_URL } from "./endpoints";
const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export const getData = async <T = any>(
  url: string,
  params?: any,
  options?: {
    timeout?: number;
  }
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, {
      params,
      timeout: options?.timeout,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Request failed to ${url}:`, {
        message: error.message,
        code: error.code,
        status: error.response?.status,
      });
    }
    throw error;
  }
};
