import Image from "next/image";
import HowWeWorkAnimatingLine from "./HowWeWorkAnimatingLine";

const howWeWorkSteps = [
  {
    image: "/home/how-we-work/step-1.png",
    title: "Book Your Appointment",
    description:
      "Kickstart your journey by setting up an appointment with our fertility experts. We'll listen to your story, understand your concerns, and plan the best way forward for you.",
  },
  {
    image: "/home/how-we-work/step-2.png",
    title: "Consultation & Diagnosis",
    description:
      "Our fertility experts will conduct a series of tests to diagnose the root cause of your infertility. Based on the results, we'll recommend a personalized treatment plan.",
  },
  {
    image: "/home/how-we-work/step-3.png",
    title: "Treatment & Procedures",
    description:
      "We offer a range of fertility treatments and procedures, including IVF, IUI, ICSI, and more. Our team will guide you through the process and ensure you're comfortable every step of the way.",
  },
  {
    image: "/home/how-we-work/step-4.png",
    title: "Support & Guidance",
    description:
      "We understand that the journey to parenthood can be challenging. Our team of experts will provide you with the support and guidance you need to stay positive and hopeful throughout the process.",
  },
  // {
  //   image: "/home/how-we-work/step-5.png",
  //   title: "Celebrate Your Success",
  //   description:
  //     "When you finally achieve your dream of becoming a parent, we'll be there to celebrate with you. Our team will continue to provide you with the care and support you need to ensure a smooth transition into parenthood.",
  // },
];
const HowWeWork = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="flex justify-center items-center gap-3 md:gap-5 py-6 md:py-10">
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
          How we Work
        </h2>
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
      </div>
      <h2 className="px-4 pb-8 md:pb-16 font-bold text-center typography-h2">
        Guiding You Through Every Step with Compassion & Care
      </h2>

      {/*  */}
      <div className="relative flex flex-col gap-16 md:gap-32 px-6 sm:px-10 md:px-20 lg:px-40">
        {howWeWorkSteps.map((step, index) => (
          <div
            className={`flex flex-col md:flex-row gap-y-6 gap-x-8 lg:gap-x-24 ${
              index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            key={index}
          >
            <div
              className={`flex w-full justify-center md:w-1/2 ${
                index % 2 == 0
                  ? "md:justify-end md:items-center"
                  : "md:justify-start md:items-center"
              }`}
            >
              <div className="w-full max-w-[17.1875rem] h-auto md:h-[12.125rem] aspect-[16/9] md:aspect-square">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div
              className={`w-full md:w-1/2 space-y-3 flex flex-col ${
                index % 2 == 0
                  ? "items-center md:text-left md:items-start"
                  : "items-center md:text-right md:items-end"
              }`}
            >
              <span className="flex justify-center items-center bg-primary-50 rounded-full size-[2.5rem] md:size-[3.375rem] font-roboto font-medium text-primary-500 text-xl md:text-2xl">
                {index + 1}
              </span>
              <h2 className="font-semibold md:text-left text-center typography-h6 md:typography-h4">
                {step.title}
              </h2>
              <p className="font-medium text-text-400 md:text-left text-center typography-paragraph-small md:typography-paragraph-regular">
                {step.description}
              </p>
            </div>
          </div>
        ))}

        <div className="hidden md:block left-1/2 absolute inset-y-0 -translate-x-1/2">
          <HowWeWorkAnimatingLine />
        </div>
      </div>
    </div>
  );
};
export default HowWeWork;
