"use client";
import { cn } from "@/utils/cn";
import { Download } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IEventDetailsType } from "../../interface/event.interface";
import { downloadFile } from "@/utils/download";

const Gallery = ({ data }: { data: IEventDetailsType }) => {
  console.log(data?.eventGallery);
  return (
    <div className="py-4 u-padding-x gap-6 flex flex-wrap items-center justify-between">
      {data?.eventGallery?.videos?.map((item, index) => (
        <VideoSection
          key={item + index}
          eventName={data?.title}
          eventDate={data?.date?.split("T")[0]}
          src={item}
          className={`h-52`}
        />
      ))}
      {data?.eventGallery.eventImages?.map((item, index) => (
        <ImageSection
          key={item + index}
          eventName={data?.title}
          eventDate={data?.date?.split("T")[0]}
          src={item}
          className={`h-52`}
        />
      ))}
    </div>
  );
};
export default Gallery;

const ImageSection = ({
  src,
  className,
  eventName,
  eventDate,
}: {
  src: string;
  className: string;
  eventName: string;
  eventDate: string;
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  // Animation variants for better organization
  const containerVariants = {
    hover: { scale: 1.02 },
    initial: { scale: 1 },
  };

  const slideVariants = {
    hiddenTop: { y: "-100%", opacity: 0 },
    hiddenBottom: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const transitionConfig = {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
    mass: 0.5,
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={cn(`relative w-80 rounded-3xl overflow-hidden`, className)}
      variants={containerVariants}
      animate={isHover ? "hover" : "initial"}
      transition={{ duration: 0.3 }}
      layout // Enables layout animations
    >
      {/* Top Date Section */}
      <motion.div
        className="absolute z-10 top-0 inset-x-0 p-3 bg-gradient-to-t from-transparent to-[#202020]/30"
        variants={slideVariants}
        initial="hiddenTop"
        animate={isHover ? "visible" : "hiddenTop"}
        transition={transitionConfig}
      >
        <motion.span
          className="typo-mid-bd-reg text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHover ? 1 : 0 }}
          transition={{ delay: 0.1 }}
        >
          Event Date: {eventDate}
        </motion.span>
      </motion.div>

      {/* Main Image with Overlay */}
      <div className="relative h-full min-h-[300px]">
        <Image
          alt=""
          fill
          src={src}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>

      {/* Bottom Info Section */}
      <motion.div
        className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-b from-transparent to-[#202020]/30"
        variants={slideVariants}
        initial="hiddenBottom"
        animate={isHover ? "visible" : "hiddenBottom"}
        transition={transitionConfig}
      >
        <div className="flex items-center justify-between">
          <motion.span
            className="typo-lg-bd-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHover ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            {eventName}
          </motion.span>

          <button
            onClick={(e) => {
              e.preventDefault();
              downloadFile(src);
            }}
            className="typo-mid-bd-semi-bold text-white p-3 rounded-full flex items-center gap-x-2 border border-white hover:backdrop-blur-xl hover:bg-white/10 transition-all duration-300 ease-in-out"
          >
            <Download size={18} />
            Download
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface VideoSectionProps {
  src: string;
  className?: string;
  eventName: string;
  eventDate: string;
}

export const VideoSection = ({
  src,
  className = "",
  eventName,
  eventDate,
}: VideoSectionProps) => {
  const [isHover, setIsHover] = useState(false);
  // Container animation
  const containerVariants = {
    hover: { scale: 1.02 },
    initial: { scale: 1 },
  };

  // Slide animations (same as images)
  const slideVariants = {
    hiddenTop: { y: "-100%", opacity: 0 },
    hiddenBottom: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const transitionConfig = {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
    mass: 0.5,
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={cn(
        `relative w-80 rounded-3xl overflow-hidden bg-black`,
        className
      )}
      variants={containerVariants}
      animate={isHover ? "hover" : "initial"}
      transition={{ duration: 0.3 }}
      layout
    >
      {/* Top Date Section */}
      <motion.div
        className="absolute z-10 top-0 inset-x-0 p-3 bg-gradient-to-t from-transparent to-[#202020]/30"
        variants={slideVariants}
        initial="hiddenTop"
        animate={isHover ? "visible" : "hiddenTop"}
        transition={transitionConfig}
      >
        <motion.span
          className="typo-mid-bd-reg text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHover ? 1 : 0 }}
          transition={{ delay: 0.1 }}
        >
          Event Date: {eventDate}
        </motion.span>
      </motion.div>

      {/* Main Video */}
      <div className="relative h-full min-h-[300px]">
        <video
          className="object-cover w-full h-full"
          src={"/video.mp4"}
          muted
          autoPlay
          loop
          playsInline
        />
      </div>

      {/* Bottom Info Section */}
      <motion.div
        className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-b from-transparent to-[#202020]/30"
        variants={slideVariants}
        initial="hiddenBottom"
        animate={isHover ? "visible" : "hiddenBottom"}
        transition={transitionConfig}
      >
        <div className="flex items-center justify-between">
          <motion.span
            className="typo-lg-bd-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHover ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            {eventName}
          </motion.span>

          <button
            onClick={(e) => {
              e.preventDefault();
              downloadFile(src);
            }}
            className="typo-mid-bd-semi-bold text-white p-3 rounded-full flex items-center gap-x-2 border border-white hover:backdrop-blur-xl hover:bg-white/10 transition-all duration-300 ease-in-out"
          >
            <Download size={18} />
            Download
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
