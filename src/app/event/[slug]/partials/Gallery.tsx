"use client";
import { cn } from "@/utils/cn";
import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { IEventDetailsType } from "../../interface/event.interface";
import { downloadFile } from "@/utils/download";

const Gallery = ({ data }: { data: IEventDetailsType }) => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-6 py-4 u-padding-x">
      {data?.eventGallery?.videos?.map((item, index) => (
        <VideoSection
          key={item + index}
          eventName={data?.title}
          eventDate={data?.date?.split("T")[0]}
          src={item}
          className={`h-52`}
        />
      ))}
      {data?.eventGallery?.eventImages?.map((item, index) => (
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
      className={cn(`relative rounded-3xl w-80 overflow-hidden`, className)}
      variants={containerVariants}
      animate={isHover ? "hover" : "initial"}
      transition={{ duration: 0.3 }}
      layout // Enables layout animations
    >
      {/* Top Date Section */}
      <motion.div
        className="top-0 z-10 absolute inset-x-0 bg-gradient-to-t from-transparent to-[#202020]/30 p-3"
        variants={slideVariants}
        initial="hiddenTop"
        animate={isHover ? "visible" : "hiddenTop"}
        transition={transitionConfig}
      >
        <motion.span
          className="text-white typo-mid-bd-reg"
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
        className="bottom-0 absolute inset-x-0 bg-gradient-to-b from-transparent to-[#202020]/30 p-3"
        variants={slideVariants}
        initial="hiddenBottom"
        animate={isHover ? "visible" : "hiddenBottom"}
        transition={transitionConfig}
      >
        <div className="flex justify-between items-center">
          <motion.span
            className="text-white typo-lg-bd-bold"
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
            className="flex items-center gap-x-2 hover:bg-white/10 hover:backdrop-blur-xl p-3 border border-white rounded-full text-white transition-all duration-300 ease-in-out typo-mid-bd-semi-bold"
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
        `relative bg-black rounded-3xl w-80 overflow-hidden`,
        className
      )}
      variants={containerVariants}
      animate={isHover ? "hover" : "initial"}
      transition={{ duration: 0.3 }}
      layout
    >
      {/* Top Date Section */}
      <motion.div
        className="top-0 z-10 absolute inset-x-0 bg-gradient-to-t from-transparent to-[#202020]/30 p-3"
        variants={slideVariants}
        initial="hiddenTop"
        animate={isHover ? "visible" : "hiddenTop"}
        transition={transitionConfig}
      >
        <motion.span
          className="text-white typo-mid-bd-reg"
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
          className="w-full h-full object-cover"
          src={encodeURI(src)}
          muted
          autoPlay
          loop
          playsInline
          controls
        />
      </div>

      {/* Bottom Info Section */}
      <motion.div
        className="bottom-0 absolute inset-x-0 bg-gradient-to-b from-transparent to-[#202020]/30 p-3"
        variants={slideVariants}
        initial="hiddenBottom"
        animate={isHover ? "visible" : "hiddenBottom"}
        transition={transitionConfig}
      >
        <div className="flex justify-between items-center">
          <motion.span
            className="text-white typo-lg-bd-bold"
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
            className="flex items-center gap-x-2 hover:bg-white/10 hover:backdrop-blur-xl p-3 border border-white rounded-full text-white transition-all duration-300 ease-in-out typo-mid-bd-semi-bold"
          >
            <Download size={18} />
            Download
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
