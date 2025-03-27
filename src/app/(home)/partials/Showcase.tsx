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
      <div>ds</div>
    </div>
  );
}
export default Showcase


// const ShowCaseItem:React.FC<>