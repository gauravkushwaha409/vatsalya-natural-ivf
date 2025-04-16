import React from "react";
import TestimonialSection from "./partials/TestimonialSection";
import StoriesSection from "./partials/StoriesSection";
import YourJourney from "./partials/YourJourney";
import HeroSuccess from "./partials/HeroSuccess";
import { fetchSuccessStories } from "./hooks/fetchSuccessStoriesData";
import ErrorMessage from "@/components/ErrorMessage";
export const dynamic = "force-dynamic";

type Props = {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};
const SuccessStory = async ({ searchParams }: Props) => {
  try {
    const page = Number((await searchParams)?.page) || 1;
    const { stories, metadata } = await fetchSuccessStories(page, 12);
    return (
      <div>
        <HeroSuccess />
        <TestimonialSection data={metadata?.data} />
        <StoriesSection data={stories?.data} metaData={metadata?.data} />
        <YourJourney />
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
