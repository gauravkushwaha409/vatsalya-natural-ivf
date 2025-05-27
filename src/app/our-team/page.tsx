import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import Herosection from "./partials/Herosection";
import Leader from "./partials/Leader";
import Specialists from "./partials/Specialists";
export const dynamic = "force-dynamic";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.our_team);
  const meta = createMetadata(data);
  return meta;
}
interface TeamProps {
  searchParams?: Promise<{
    expertPage?: string;
    managementPage?: string;
  }>;
}
const page: React.FC<TeamProps> = async ({ searchParams }) => {
  const perPage = 10;
  const expertPage = (await Number((await searchParams)?.expertPage)) || 1;
  const managementPage =
    (await Number((await searchParams)?.managementPage)) || 1;
  try {
    const { data: leader } = await getData(endpoints.leader);
    const { data } = await getData(
      `${endpoints.experts}?page=${expertPage}&perPage=${perPage}`
    );
    const { data: managementTeam } = await getData(
      `${endpoints.management_team}?page=${managementPage}&perPage=${perPage}`
    );

    // const { data } = useGetDataQuery({ url: endpoints.breadcrumb.our_expert });
    // const records = data?.data?.records[0];
    // const heroData = {
    //   ...records,
    //   breadcrumb: "Our Team",
    // };

    // herosection data
    const heroResponse = await getData(endpoints.breadcrumb.our_expert);
    const records = heroResponse?.data?.records[0];
    const heroData = {
      ...records,
      breadcrumb: "Our Team",
    };

    return (
      <section>
        <Herosection heroData={heroData} />
        <Leader data={leader} />
        <Specialists data={data} managementTeam={managementTeam} />
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">An error occurred</p>
      </div>
    );
  }
};

export default page;
