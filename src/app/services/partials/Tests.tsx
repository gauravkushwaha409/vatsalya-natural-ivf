import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import Image from "next/image";
import { ITestRoot } from "../interfaces/test.interface";

const Tests = async () => {
  const { data: MenTest } = await getData<ITestRoot>(
    endpoints.service_test + "?testFor=men"
  );
  const { data: WomenTest } = await getData<ITestRoot>(
    endpoints.service_test + "?testFor=women"
  );
  return (
    <div className="gap-5 lg:gap-0 grid grid-cols-1 lg:grid-cols-2 my-10 lg:my-20 divide-x-0 lg:divide-x padding">
      <div>
        <h3 className="pb-4 font-bold text-primary-500 typography-h4">
          Tests for men
        </h3>
        <ul className="space-y-[0.66rem] *:bg-gradient-to-r *:from-[#EBC0DB] *:to-[#FFD2CE] pr-0 lg:pr-5 text-text-400 list-disc typography-paragraph-regular">
          {MenTest?.records?.map((test, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-1 border rounded-md"
            >
              <div className="bg-[#FFD2EE] p-1 rounded-full size-8 shrink-0">
                <Image
                  src={test.icon}
                  alt={test.description}
                  className="w-full h-full"
                  width={400}
                  height={400}
                />
              </div>
              <p
                className="flex gap-2"
                dangerouslySetInnerHTML={{ __html: test?.description }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="pl-0 lg:pl-10">
        <h3 className="pb-4 font-bold text-primary-500 typography-h4">
          Tests for women
        </h3>
        <ul className="space-y-[0.66rem] *:bg-gradient-to-r *:from-[#EBC0DB] *:to-[#FFD2CE] pr-0 lg:pr-5 text-text-400 list-disc typography-paragraph-regular">
          {WomenTest?.records?.map((test, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-1 border rounded-md"
            >
              <div className="bg-[#FFD2EE] p-1 rounded-full size-8 shrink-0">
                <Image
                  src={test.icon}
                  alt={test.description}
                  className="w-full h-full"
                  width={400}
                  height={400}
                />
              </div>
              <p
                className="flex gap-2"
                dangerouslySetInnerHTML={{ __html: test?.description }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Tests;
