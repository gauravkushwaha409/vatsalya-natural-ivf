"use client";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  // const [isVideoLoading, setIsVideoLoading] = useState(true);

  // const handleVideoLoad = () => {
  //   setIsVideoLoading(false);
  // };

  return (
    <>
      {isOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40 w-full h-screen text-black">
          <button
            onClick={onClose}
            className="top-5 right-5 z-10 absolute flex justify-center items-center p-2 border border-white rounded-full w-10 h-10 cursor-pointer"
          >
            <X size={24} className="font-bold text-white" />
          </button>
          <div className="flex items-center w-8/12 h-full aspect-video">
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
