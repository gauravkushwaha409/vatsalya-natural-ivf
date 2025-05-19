import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MobileLayoutProps } from "../interface/whatWeOffer.interface";

const MobileLayout: React.FC<MobileLayoutProps> = ({ OFFER_CARDS }) => {
  return (
    <Swiper className="flex flex-col gap-6">
      {OFFER_CARDS.map((card) => (
        <SwiperSlide key={card.id} className="w-full">
          <div className="flex flex-col justify-center items-center gap-2 px-2 pb-4 border rounded-md w-full">
            <div className="w-max overflow-hidden">
              <Image
                src={card.imageSrc}
                width={80}
                height={80}
                alt={card.title}
                className="p-3.5"
              />
            </div>
            <h3
              className={`font-bold ${card.textColor} typography-h4`}
              // style={}
            >
              {card.title}
            </h3>
            <p
              className={`font-medium text-text-400 line-clamp-4 typography-paragraph-regular text-justify`}
              dangerouslySetInnerHTML={{ __html: card.description || "" }}
            />

            <Link
              href={`/services/${card.slug}`}
              className={`typography-paragraph-regular cursor-pointer text-text-300 hover:text-text-500`}
            >
              Learn more
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileLayout;
