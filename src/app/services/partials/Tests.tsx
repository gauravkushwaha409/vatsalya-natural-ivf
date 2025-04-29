import Image from "next/image";
const testsData = {
  men: [
    {
      name: "Blood Tests",
      description: "Blood tests can help assess hormone levels ",
      image: "/svg/trophy.svg",
    },
    {
      name: "Semen Analysis",
      description: "It helps to access quantity and quality of sperm.",
      image: "/svg/trophy.svg",
    },
    {
      name: "Hormonal Testing",
      description: "It can help identify any hormonal imbalances.",
      image: "/svg/trophy.svg",
    },
  ],
  women: [
    {
      name: "Blood Tests",
      description: "Blood tests can help assess hormone levels ",
      image: "/svg/trophy.svg",
    },
    {
      name: "Overian Reserve Testing",
      description: "finds out how effective your ovaries are.",
      image: "/svg/trophy.svg",
    },
    {
      name: "Hormonal Testing",
      description: "It can help identify any hormonal imbalances.",
      image: "/svg/trophy.svg",
    },
  ],
};

const Tests = () => {
  return (
    <div className="grid grid-cols-2 my-20 divide-x padding">
      <div>
        <h1 className="pb-4 font-bold text-primary-500 typography-h4">
          Tests for men
        </h1>
        <ul className="space-y-[0.66rem] *:bg-gradient-to-r *:from-[#EBC0DB] *:to-[#FFD2CE] pr-5 text-text-400 list-disc typography-paragraph-regular">
          {testsData.men.map((test, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-1 border rounded-md"
            >
              <div className="bg-[#FFD2EE] p-1 rounded-full size-8 shrink-0">
                <Image
                  src={test.image}
                  alt={`troubleConceiving`}
                  className="w-full h-full"
                  width={400}
                  height={400}
                />
              </div>
              <p className="flex gap-2">
                <span className="min-w-max font-bold shrink-0">
                  {test.name}
                </span>{" "}
                –<span className="w-full">{test.description}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="pl-10">
        <h1 className="pb-4 font-bold text-primary-500 typography-h4">
          Tests for women
        </h1>
        <ul className="space-y-[0.66rem] *:bg-gradient-to-r *:from-[#EBC0DB] *:to-[#FFD2CE] pr-5 text-text-400 list-disc typography-paragraph-regular">
          {testsData.women.map((test, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-1 border rounded-md"
            >
              <div className="bg-[#FFD2EE] p-1 rounded-full size-8 shrink-0">
                <Image
                  src={test.image}
                  alt={`troubleConceiving`}
                  className="w-full h-full"
                  width={400}
                  height={400}
                />
              </div>
              <p className="flex gap-2">
                <span className="min-w-max font-bold shrink-0">
                  {test.name}
                </span>{" "}
                –<span className="w-full">{test.description}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Tests;
