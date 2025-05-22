import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import PrivacyContent from "./partials/PrivacyContent";
import PrivacyHero from "./partials/PrivacyHero";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.privacy);
  const meta = createMetadata(data);
  return meta;
}

const Privacy = () => {
  return (
    <div>
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
};

export default Privacy;
