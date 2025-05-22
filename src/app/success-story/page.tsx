import React from "react";
import TestimonialSection from "./partials/TestimonialSection";
import StoriesSection from "./partials/StoriesSection";
import YourJourney from "./partials/YourJourney";
import HeroSuccess from "./partials/HeroSuccess";
import { fetchSuccessStories } from "./hooks/fetchSuccessStoriesData";
import ErrorMessage from "@/components/ErrorMessage";
import { ISeoRoot } from "@/interface/seo.interface";
import { endpoints } from "@/api/endpoints";
import { getData } from "@/api/axios";
import { createMetadata } from "@/hooks/generateMetaData";
export const dynamic = "force-dynamic";

type Props = {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.success_stories);
  const meta = createMetadata(data);
  return meta;
}
const SuccessStory = async ({ searchParams }: Props) => {
  try {
    const page = Number((await searchParams)?.page) || 1;
    const { stories, metadata } = await fetchSuccessStories(page, 12);

    const { yourJourneyData } = await fetchSuccessStories();

    return (
      <div>
        <HeroSuccess />
        <TestimonialSection data={metadata?.data} />
        <StoriesSection data={stories?.data} metaData={metadata?.data} />
        <YourJourney data={yourJourneyData} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <>
        <HeroSuccess />
        <ErrorMessage />
      </>
    );
  }
};

export default SuccessStory;
