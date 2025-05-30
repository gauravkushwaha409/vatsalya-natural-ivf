import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import CareerTextContent from "./partials/CareerTextContent";
import HeroCareerDetail from "./partials/HeroCareerDetail";
interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}
const CareerDetail = async ({ params }: BlogDetailPageProps) => {
  try {
    const slug = await params;
    const data = await getData(endpoints.openPosition + `/slug/${slug?.slug}`);
    return (
      <div>
        <HeroCareerDetail data={data?.data} />
        <CareerTextContent data={data?.data} />
      </div>
    );
  } catch (e) {
    console.error("Error fetching blog data:", e);
  }
};

export default CareerDetail;
