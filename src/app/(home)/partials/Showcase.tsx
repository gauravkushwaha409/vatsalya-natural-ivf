import Image from "next/image";

const Showcase = () => {
  return (
    <div
      style={{
        background: "url(/noise.png) #fff1ef",
      }}
      className="flex justify-between px-20 py-4"
    >
      <Image
        src="/home/showcase-image.png"
        alt="Showcase"
        width={1200}
        height={800}
        className="w-min h-[22.625rem] object-contain aspect-auto"
      />
      <div className="flex justify-around items-center w-full">
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
    <div className="flex flex-col items-center gap-[1.42rem] px-16">
      <div className="p-7 border-[7px] border-primary-200/[0.54] rounded-full aspect-square">
        <Image
          src={svg}
          alt={"svg"}
          className="size-16"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center">
        <h3 className="font-bold text-primary-500 leading-[150%] typography-h3">
          {title}
        </h3>
        <p className="font-medium text-text-400 typography-paragraph-large">
          {subtitle}
        </p>
      </div>
    </div>
  );
};