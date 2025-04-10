import React from "react";
import TestimonialSection from "./partials/TestimonialSection";
import StoriesSection from "./partials/StoriesSection";
import YourJourney from "./partials/YourJourney";
import HeroSuccess from "./partials/HeroSuccess";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { ISuccessStoriesResponse } from "./interface/successStories.interface";

type Props = {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};
const SuccessStory = async ({ searchParams }: Props) => {
  const page = Number((await searchParams)?.page) || 1;
  const perPage = 12;
  const data = await getData<ISuccessStoriesResponse>(
    endpoints.sucessStory + `?page=${page}&perPage=${perPage}`
  );

  return (
    <div>
      <HeroSuccess />
      <TestimonialSection data={data?.data} />
      <StoriesSection data={data?.data} />
      <YourJourney data={data?.data} />
    </div>
  );
};

export default SuccessStory;
