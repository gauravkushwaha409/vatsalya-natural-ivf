import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
import { IProfileRoot } from "../interface/profile.interface";
import Headings from "./partials/Headings";
import Profile from "./partials/Profile";

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
    <section className="mb-10 lg:mb-40">
      <Headings />
      <Profile data={data} />
    </section>
  );
};

export default ProfilePage;
