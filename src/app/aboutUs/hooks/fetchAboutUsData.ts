import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const fetchAboutPageData = async () => {
  const safeFetch = async (endpoint: string) => {
    try {
      return await getData(endpoint);
    } catch (error) {
      console.error(`Failed to fetch data from ${endpoint}:`, error);
      return null;
    }
  };

  const aboutUsData = await safeFetch(endpoints.aboutUs.aboutUs);
  const statsData = await safeFetch(endpoints.stats);
  const whyUsData = await safeFetch(endpoints.aboutUs.whyUs);
  const testimonialData = await safeFetch(endpoints.sucessStory);

  return {
    aboutUsData,
    statsData,
    whyUsData,
    testimonialData,
  };
};
