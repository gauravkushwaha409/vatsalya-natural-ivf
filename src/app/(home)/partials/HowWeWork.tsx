import Image from "next/image";

const HowWeWorkSteps = [
  {
    image: "/home/how-we-work/step-1.png",
    title: "Book Your Appointment",
    description:
      "Kickstart your journey by setting up an appointment with our fertility experts. We’ll listen to your story, understand your concerns, and plan the best way forward for you.",
  },
  {
    image: "/home/how-we-work/step-2.png",
    title: "Consultation & Diagnosis",
    description:
      "Our fertility experts will conduct a series of tests to diagnose the root cause of your infertility. Based on the results, we’ll recommend a personalized treatment plan.",
  },
  {
    image: "/home/how-we-work/step-3.png",
    title: "Treatment & Procedures",
    description:
      "We offer a range of fertility treatments and procedures, including IVF, IUI, ICSI, and more. Our team will guide you through the process and ensure you’re comfortable every step of the way.",
  },
  {
    image: "/home/how-we-work/step-4.png",
    title: "Support & Guidance",
    description:
      "We understand that the journey to parenthood can be challenging. Our team of experts will provide you with the support and guidance you need to stay positive and hopeful throughout the process.",
  },
  {
    image: "/home/how-we-work/step-5.png",
    title: "Celebrate Your Success",
    description:
      "When you finally achieve your dream of becoming a parent, we’ll be there to celebrate with you. Our team will continue to provide you with the care and support you need to ensure a smooth transition into parenthood.",
  },
];
const HowWeWork = () => {
  return (
    <div className="py-20">
      <div className="flex justify-center items-center gap-5 py-10">
        <span className="bg-primary-500 w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 uppercase tracking-[0.18rem]">
          How we Work
        </h2>
        <span className="bg-primary-500 w-[8.5rem] h-px" />
      </div>
      <h1 className="pb-16 font-bold text-center typography-h3">
        Guiding You Through Every Step with Compassion & Care
      </h1>

      {/*  */}
      <div className="flex flex-col gap-10 px-40">
        {HowWeWorkSteps.map((step, index) => (
          <div
            className={`flex gap-x-24 ${
              index % 2 == 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={index}
          >
            <div className="flex justify-end items-end w-full">
              <div className="w-32">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className={"w-full"}>
              {index + 1}
              <div>
                <h2 className="font-bold typography-h4">{step.title}</h2>
                <p className="typography-body">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowWeWork;
