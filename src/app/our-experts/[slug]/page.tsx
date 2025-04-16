import React from "react";
import Headings from "./partials/Headings";
import Profile from "./partials/Profile";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
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
