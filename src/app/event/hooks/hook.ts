import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const getEventPageData = async (search: string, filter: string) => {
  const safeFetch = async (
    endpoint: string,
    search: string,
    filter: string
  ) => {
    try {
      const data = await getData(
        `${endpoint}?search=${search}&filter=${filter}`
      );
      return data;
    } catch (error) {
      console.error(`Failed to fetch data from ${endpoint}:`, error);
      return null;
    }
  };

  const eventHeaderData = await safeFetch(
    endpoints.events.eventsHeader,
    search,
    filter
  );

  return {
    eventHeaderData,
  };
};
