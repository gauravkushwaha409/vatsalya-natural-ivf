import ServiceForm from "@/app/services/[slug]/partials/ServiceForms";
import BasicTab from "@/components/tab/BasicTab";
import { IInternationalClientRoot } from "../interface/internationalClient.interface";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

const InternationalClients = async () => {
  const internationalPatients = await getData<IInternationalClientRoot>(
    endpoints.international_patients
  );
  const Tabs =
    internationalPatients?.data?.records?.map((item) => ({
      label: item?.title,
      content: <p dangerouslySetInnerHTML={{ __html: item?.description }} />,
    })) || [];

  return (
    <section className="flex gap-5 lg:gap-10 bg-background-100 py-10 padding">
      <div className="shadow-sm px-5 py-5 rounded-lg w-full lg:w-8/12 h-auto">
        <div className="mx-auto max-w-5xl">
          <BasicTab tabs={Tabs} />
        </div>
      </div>
      <div className="w-full lg:w-4/12">
        <ServiceForm />
      </div>
    </section>
  );
};

export default InternationalClients;
