import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/api/safeFetch";

export const getExpertData = async ({ center }: { center: string | null }) => {
  const expertsData = await safeFetch(
    `${endpoints.experts}${
      center && center !== "all" ? `?center=${center}` : ""
    }`
  );

  return expertsData;
};
