import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/api/safeFetch";

export const getCenterData = async () => {
  const centerData = await safeFetch(`${endpoints.center}`);
  return centerData;
};
