import React from "react";
import HeroSection from "./partials/HeroSection";
import Gallery from "./partials/Gallery";
import JsonLD from "@/app/(home)/partials/JsonLD";
import ErrorMessage from "@/components/ErrorMessage";
import { getEventDetailsData } from "../lib/getEvent";

interface props {
  params: {
    slug: Promise<string>;
  };
}

const page = async ({ params }: props) => {
  const slug = (await params.slug) as string;
  try {
    const { eventDetailsData } = await getEventDetailsData(slug);
    return (
      <>
        <JsonLD />
        <div className="bg-primary-50">
          <HeroSection data={eventDetailsData?.data} />
          <Gallery data={eventDetailsData?.data} />{" "}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return <ErrorMessage />;
  }
};

export default page;
