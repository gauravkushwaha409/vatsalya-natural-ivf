/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { BASE_API_URL } from "./endpoints";
const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getData = async <T = any>(
  url: string,
  params?: any
): Promise<T> => {
  const data = await axiosInstance.get(url, {
    params,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
  // if (!data.data) throw new Error(`Error: ${data.data.message}`);
  return data.data;
};
