import heropic from "@/assests/about/family.png";
import Breadcrumb from "@/components/Breadcumb";
import Image from "next/image";

const Herosection = () => {
  return (
    <header>
      <div className="relative w-full h-[40vh] lg:h-[60vh]">
        <Image
          src={heropic}
          alt="heropic"
          width={1920}
          height={1080}
          className="top-0 z-10 absolute brightness-50 w-full h-full object-cover"
        />
        <div className="top-5 left-1/2 z-30 absolute -translate-x-1/2 transform">
          <Breadcrumb name="OurExperts" baseName="Home" />
        </div>
        <div className="top-1/3 left-0 lg:left-1/2 z-10 absolute px-5 text-white text-center translate-x-0 lg:-translate-x-1/2 transform">
          <h1 className="pb-5 font-bold typography-h3">Our Experts</h1>
          <p className="font-normal !text-text-50 typography-paragraph-regular">
            Our team of experts is dedicated to providing advanced fertility
            care with compassion and precision, guiding you on your journey to
            parenthood.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Herosection;
