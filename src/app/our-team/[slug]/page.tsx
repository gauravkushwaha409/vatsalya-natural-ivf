import React from "react";
import Headings from "./partials/Headings";
import Profile from "./partials/Profile";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { IProfileRoot } from "../interface/profile.interface";
import { createMetadata } from "@/hooks/generateMetaData";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}
export async function generateMetadata({ params }: ProfilePageProps) {
  try {
    const slugs = (await params).slug;
    const { data } = await getData<IProfileRoot>(
      endpoints.experts + `/${slugs}`
    );
    const images = [{ url: data?.image }];
    const meta = createMetadata(data?.seo, images);
    return meta;
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
}
const ProfilePage = async ({ params }: ProfilePageProps) => {
  const slug = await params;
  const { data } = await getData(endpoints.experts + `/${slug?.slug}`);
  return (
    <section className="">
      <Headings />
      <Profile data={data} />
    </section>
  );
};

export default ProfilePage;
