import Image from "next/image";

const Showcase = () => {
  return (
    <div
      style={{
        background: "url(/noise.png) #fff1ef",
      }}
      className="flex lg:flex-row flex-col justify-between gap-8 lg:gap-0 px-4 sm:px-8 md:px-12 lg:px-20 py-4"
    >
      <div className="mx-auto lg:mx-0">
        <Image
          src="/home/showcase-image.png"
          alt="Showcase"
          width={1200}
          height={800}
          className="w-full lg:w-min h-auto lg:h-[22.625rem] object-contain aspect-auto"
        />
      </div>
      <div className="flex sm:flex-row flex-col flex-wrap justify-around items-center gap-8 sm:gap-4 w-full">
        <ShowCaseItem
          svg="/svg/award.svg"
          title={
            <>
              15&nbsp;
              <span className="font-normal typography-paragraph-regular">
                Years
              </span>
            </>
          }
          subtitle="Caring for Families"
        />
        <ShowCaseItem
          svg="/svg/trophy.svg"
          title="15000+"
          subtitle="Successful IVF Treatments"
        />
        <ShowCaseItem
          svg="/svg/star.svg"
          title="100+"
          subtitle="Expert Specialists"
        />
      </div>
    </div>
  );
};

export default Showcase;

const ShowCaseItem: React.FC<{
  svg: string;
  title: React.ReactNode;
  subtitle: string;
}> = ({ svg, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center gap-[1.42rem] px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="p-4 sm:p-5 md:p-6 lg:p-7 border-[4px] border-primary-200/[0.54] sm:border-[5px] md:border-[6px] lg:border-[7px] rounded-full aspect-square">
        <Image
          src={svg}
          alt={"svg"}
          className="size-10 sm:size-12 md:size-14 lg:size-16"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center">
        <h3 className="font-bold text-primary-500 text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-[150%] typography-h3">
          {title}
        </h3>
        <p className="font-medium text-text-400 text-sm sm:text-base lg:text-lg typography-paragraph-large">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
