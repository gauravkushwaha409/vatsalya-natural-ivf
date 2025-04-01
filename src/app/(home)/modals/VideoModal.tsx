"use client";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import React, { useState } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
}: VideoModalProps) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 text-black h-screen  w-full ">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-10 h-10 flex justify-center items-center rounded-full border border-white p-2 cursor-pointer"
          >
            <X size={24} className="text-white font-bold" />
          </button>
          <div className="aspect-video w-8/12 h-full flex items-center">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/vLyP1aOmENc?si=aPCpD2JOABihWFx_`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
