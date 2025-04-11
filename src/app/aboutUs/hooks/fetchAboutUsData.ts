import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const fetchAboutPageData = async () => {
  const [aboutUsData, statsData, whyUsData, testimonialData] =
    await Promise.all([
      getData(endpoints.aboutUs.aboutUs),
      getData(endpoints.stats),
      getData(endpoints.aboutUs.whyUs),
      getData(endpoints.sucessStory),
    ]);

  return {
    aboutUsData,
    statsData,
    whyUsData,
    testimonialData,
  };
};
