"use client";
import { cn } from "@/utils/cn";
import { Download } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
    const image = [
        "/event/image-1.jpg",
        "/event/image-1.jpg",
        "/event/image-2.jpg",
        "/event/image-3.jpg",
        "/event/image-4.jpg",
        "/event/image-4.jpg",
        "/event/image-4.jpg",
        "/event/image-4.jpg",
        "/event/image-5.jpg",
        "/event/image-4.jpg",
        "/event/image-4.jpg",
        "/event/image-5.jpg",
        "/event/image-6.jpg",
        "/event/image-6.jpg",
        "/event/image-6.jpg",
    ];
    return (
        <div className="pt-4 u-padding-x grid grid-cols-4 gap-6">
            {image.map((item, index) => (
                <ImageSection
                    key={item + index}
                    src={item}
                    className={index % 2 === 0 ? "row-span-2 h-102" : "h-52"}
                />
            ))}
        </div>
    );
};
export default Gallery;

const ImageSection = ({
    src,
    className,
}: {
    src: string;
    className: string;
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
            className={cn(
                `relative w-80 rounded-3xl overflow-hidden`,
                className
            )}
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
                    Event Date: 2024/jan/14
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
                {/* <motion.div
                    className="absolute inset-0 bg-black/30 rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHover ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                /> */}
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
                        Event Name
                    </motion.span>

                    <button className="typo-mid-bd-semi-bold text-white p-3 rounded-full flex items-center gap-x-2 border border-white hover:backdrop-blur-xl hover:bg-white/10 transition-all duration-300 ease-in-out">
                        <Download size={18} />
                        Download
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};
