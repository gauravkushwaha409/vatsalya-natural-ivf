import React from "react";
import HeroSection from "./partials/HeroSection";
import Gallery from "./partials/Gallery";
// import { getData } from "@/api/axios";
// import { ISeoRoot } from "@/interface/seo.interface";
// import { endpoints } from "@/api/endpoints";
// import { createMetadata } from "@/hooks/generateMetaData";
import JsonLD from "../(home)/partials/JsonLD";
import { getEventPageData } from "./hooks/hook";
import ErrorMessage from "@/components/ErrorMessage";

// export async function generateMetadata() {
//   const { data } = await getData<ISeoRoot>(endpoints.seo.event);
//   const meta = createMetadata(data);
//   return meta;
// }

interface Props {
  search: string;
  filter: string;
}

const page = async ({ searchParams }: { searchParams: Props }) => {
  const search = searchParams.search;
  const filter = searchParams.filter;
  try {
    const { eventHeaderData } = await getEventPageData(search, filter);

    return (
      <>
        <JsonLD />
        <div className="">
          <HeroSection data={eventHeaderData?.data} />
          <Gallery data={eventHeaderData?.data} />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return <ErrorMessage />;
  }
};

export default page;
