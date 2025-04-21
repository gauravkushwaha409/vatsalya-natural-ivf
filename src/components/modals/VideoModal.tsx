"use client";
import { X } from "lucide-react";
import ReactDOM from "react-dom";

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
  const extractVideoId = (url: string) => {
    if (!url) return "";
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]+)/
    );
    return match ? match[1] : "";
  };

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40 w-full h-screen text-black padding">
            <button
              onClick={onClose}
              className="top-[30%] lg:top-5 right-5 absolute flex justify-center items-center p-2 border border-white rounded-full w-10 h-10 cursor-pointer"
            >
              <X size={24} className="font-bold text-white" />
            </button>
            <div className="flex items-center w-full lg:w-8/12 lg:h-full aspect-video">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${extractVideoId(
                  videoUrl
                )}?&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                className="z-50 relative w-full h-52 lg:h-96 aspect-video"
              ></iframe>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
