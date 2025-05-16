"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { useIsSmall } from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useState } from "react";
import { IGalleryData } from "../interface/home.gallery.interface";

type ShowCaseItemProps = {
  data: IGalleryData;
};

const Miracles: React.FC<ShowCaseItemProps> = ({ data }) => {
  const [appointmentPopupOpen, setAppointmentPopupOpen] = useState(false);
  const isMobile = useIsSmall();
  // Mobile view component
  if (isMobile) {
    return (
      <div className="flex flex-col items-center mt-10 md:mt-20 px-4">
        <RequestAppoimentModal
          isOpen={appointmentPopupOpen}
          onClose={() => setAppointmentPopupOpen(false)}
        />
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
        <p className="mt-2 text-text-500 typography-paragraph-regular">
          Bringing hope, joy, and new beginnings—Vatsalya has helped 50,000+
          families with successful natural IVF. Your journey to parenthood
          starts here
        </p>
        <button
          style={{
            boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
          }}
          onClick={() => setAppointmentPopupOpen(true)}
          className="mt-3 px-6 py-3 border rounded-full font-extrabold text-secondary-400 text-sm typography-paragraph-regular"
        >
          Your Miracle Awaits
        </button>
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {data?.images.map((image, index) => (
            <ImageContainer
              key={index}
              src={image}
              alt={`Miracle ${index + 1}`}
            />
          ))}
        </div>

        {/* <div className="px-4 py-8 w-full text-center">
          
        </div> */}
      </div>
    );
  }

  return (
    <div className="flex justify-center py-6 sm:py-10">
      <RequestAppoimentModal
        isOpen={appointmentPopupOpen}
        onClose={() => setAppointmentPopupOpen(false)}
      />
      <div className="relative flex padding">
        <div className="mt-[3.12rem]">
          <ImageContainer src={data?.images[0]} alt="Miracle 1" />
          <ImageContainer src={data?.images[1]} alt="Miracle 2" />
        </div>
        <div className="">
          <ImageContainer src={data?.images[3]} alt="Miracle 3" />
          <ImageContainer src={data?.images[4]} alt="Miracle 4" />
        </div>

        <div className="w-min">
          <div className="flex w-max">
            <div className="mt-[4.63rem]">
              <ImageContainer src={data?.images[5]} alt="Miracle 5" />
            </div>
            <div className="">
              <ImageContainer src={data?.images[6]} alt="Miracle 6" />
            </div>
            <div className="mt-[2.5rem]">
              <ImageContainer src={data?.images[7]} alt="Miracle 7" />
            </div>
            <div className="">
              <ImageContainer src={data?.images[8]} alt="Miracle 8" />
            </div>
            <div className="mt-[4.63rem]">
              <ImageContainer src={data?.images[9]} alt="Miracle 9" />
            </div>
          </div>
          <div className="space-y-4 px-[1.81rem] pb-10 w-full text-center">
            <h1
              style={{
                background: "linear-gradient(0deg, #A03879 0%, #FF6F61 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="bg-clip-text font-extrabold typography-h2"
            >
              {data?.title}
            </h1>
            <p
              className="text-text-500 typography-paragraph-small"
              dangerouslySetInnerHTML={{ __html: data?.subtitle || "" }}
            />
            <button
              onClick={() => setAppointmentPopupOpen(true)}
              style={{
                boxShadow: "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
              }}
              className="hover:bg-primary-500 mt-3 px-8 py-4 border rounded-full font-extrabold text-secondary-400 hover:text-white transition-colors duration-300 cursor-pointer typography-paragraph-regular"
            >
              Your Miracle Awaits
            </button>
          </div>
        </div>
        <div className="">
          <ImageContainer src={data?.images[10]} alt="Miracle 10" />
          <ImageContainer src={data?.images[11]} alt="Miracle 11" />
        </div>
        <div className="mt-[3.12rem]">
          <ImageContainer src={data?.images[12]} alt="Miracle 12" />
          <ImageContainer src={data?.images[13]} alt="Miracle 13" />
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
    <div className="relative m-[0.44rem] rounded-[0.75rem] w-20 2xl:w-32 aspect-[4/5] overflow-hidden">
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
