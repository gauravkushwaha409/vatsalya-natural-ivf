import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import { fetchSuccessStories } from "./hooks/fetchSuccessStoriesData";
import HeroSuccess from "./partials/HeroSuccess";
import StoriesSection from "./partials/StoriesSection";
import TestimonialSection from "./partials/TestimonialSection";
import YourJourney from "./partials/YourJourney";
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
    // herosection data
    const data = await getData(endpoints.breadcrumb.success_story);
    const records = data?.data?.records[0];
    const heroData = {
      ...records,
      breadcrumb: "Sucess Stories",
    };

    return (
      <div>
        <HeroSuccess heroData={heroData} />
        <TestimonialSection data={metadata?.data} />
        <StoriesSection data={stories?.data} metaData={metadata?.data} />
        <YourJourney data={yourJourneyData} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <>
        <HeroSuccess heroData={{ title: "Sucess Stories" }} />
        <ErrorMessage />
      </>
    );
  }
};

export default SuccessStory;
