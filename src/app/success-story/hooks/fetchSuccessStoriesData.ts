// lib/fetchSuccessStories.ts

import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { ISucessStoriesMetaResponse } from "../interface/sucessStoriesMeta.interface";
import { IJourneyRoot } from "../interface/journey.interface";

export const fetchSuccessStories = async (page = 1, perPage = 12) => {
  const stories = await getData(
    `${endpoints.sucessStory}?page=${page}&perPage=${perPage}`
  );

  const metadata = await getData<ISucessStoriesMetaResponse>(
    endpoints.sucessStoryMeta
  );

  const yourJourneyData = await getData<IJourneyRoot>(endpoints.rating);

  return {
    stories,
    metadata,
    yourJourneyData,
  };
};
