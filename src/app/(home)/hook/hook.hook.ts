import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const getHomePageData = async () => {
  try {
    const [
      homedata,
      whatweOfferData,
      howWeWorkData,
      expertsData,
      blogData,
      showcaseData,
      testimonialData,
    ] = await Promise.all([
      getData(endpoints.home),
      getData(endpoints.service),
      getData(endpoints.howWorks),
      getData(endpoints.experts),
      getData(endpoints.blog),
      getData(endpoints.stats),
      getData(endpoints.sucessStory),
    ]);

    return {
      homedata,
      whatweOfferData,
      howWeWorkData,
      expertsData,
      blogData,
      showcaseData,
      testimonialData,
    };
  } catch (error) {
    console.error("Failed to fetch homepage data:", error);
    return {
      homedata: null,
      whatweOfferData: null,
      howWeWorkData: null,
      expertsData: null,
      blogData: null,
      showcaseData: null,
      testimonialData: null,
    };
  }
};
