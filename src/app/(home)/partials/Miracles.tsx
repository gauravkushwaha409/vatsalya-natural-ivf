"use client";
import { useIsSmall } from "@/hooks/useMediaQuery";
import Image from "next/image";

const Miracles = () => {
  const isMobile = useIsSmall();
  // Mobile view component
  if (isMobile) {
    return (
      <div className="flex flex-col items-center mt-10 md:mt-20 px-4">
        <div className="gap-2 grid grid-cols-2">
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 1" />
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 2" />
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 3" />
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 4" />
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 5" />
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 6" />
        </div>

        <div className="px-4 py-8 w-full text-center">
          <h1
            style={{
              background: "linear-gradient(0deg, #A03879 0%, #FF6F61 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="bg-clip-text font-extrabold text-2xl typography-h2"
          >
            50,000+ Miracles
          </h1>
          <p className="mt-2 text-text-500 typography-paragraph-small">
            Bringing hope, joy, and new beginnings—Vatsalya has helped 50,000+
            families with successful natural IVF. Your journey to parenthood
            starts here
          </p>
          <button
            style={{
              boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
            }}
            className="mt-3 px-6 py-3 border rounded-full font-extrabold text-secondary-400 text-sm typography-paragraph-regular"
          >
            Your Miracle Awaits
          </button>
        </div>
      </div>
    );
  }

  // Original desktop view (unchanged)
  return (
    <div className="flex justify-center my-[12.5rem]">
      <div className="relative flex">
        <div className="mt-[3.12rem]">
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 1" />
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 2" />
        </div>
        <div className="">
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 3" />
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 4" />
        </div>

        <div className="w-min">
          <div className="flex w-max">
            <div className="mt-[4.63rem]">
              <ImageContainer src="/team/member-1.jpeg" alt="Miracle 5" />
            </div>
            <div className="">
              <ImageContainer src="/team/member-1.jpeg" alt="Miracle 6" />
            </div>
            <div className="mt-[2.5rem]">
              <ImageContainer src="/team/member-1.jpeg" alt="Miracle 7" />
            </div>
            <div className="">
              <ImageContainer src="/team/member-1.jpeg" alt="Miracle 8" />
            </div>
            <div className="mt-[4.63rem]">
              <ImageContainer src="/team/member-1.jpeg" alt="Miracle 9" />
            </div>
          </div>
          <div className="px-[1.81rem] pb-10 w-full text-center">
            <h1
              style={{
                background: "linear-gradient(0deg, #A03879 0%, #FF6F61 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="bg-clip-text font-extrabold typography-h2"
            >
              50,000+ Miracles
            </h1>
            <p className="text-text-500 typography-paragraph-small">
              Bringing hope, joy, and new beginnings—Vatsalya has helped 50,000+
              families with successful natural IVF. Your journey to parenthood
              starts here
            </p>
            <button
              style={{
                boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
              }}
              className="mt-3 px-8 py-4 border rounded-full font-extrabold text-secondary-400 typography-paragraph-regular"
            >
              Your Miracle Awaits
            </button>
          </div>
        </div>
        <div className="">
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 10" />
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 11" />
        </div>
        <div className="mt-[3.12rem]">
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 12" />
          <ImageContainer src="/team/member-1.jpeg" alt="Miracle 13" />
        </div>
      </div>
    </div>
  );
};

export default Miracles;

const ImageContainer: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  return (
    <div className="relative m-[0.44rem] rounded-[0.75rem] w-32 h-40 overflow-hidden">
      <Image
        width={128}
        height={160}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
