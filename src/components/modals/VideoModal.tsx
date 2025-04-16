"use client";
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
  // const [isVideoLoading, setIsVideoLoading] = useState(true);

  // const handleVideoLoad = () => {
  // };
  console.log(videoUrl || "videourl");
  return (
    <>
      {isOpen && (
        <div className="padding z-50 fixed inset-0 flex justify-center items-center bg-black/40 w-full h-screen text-black">
          <button
            onClick={onClose}
            className="top-[30%] lg:top-5 right-5 z-10 absolute flex justify-center items-center p-2 border border-white rounded-full w-10 h-10 cursor-pointer"
          >
            <X size={24} className="font-bold text-white" />
          </button>
          <div className="flex items-center w-full lg:w-8/12 lg:h-full aspect-video">
            <iframe
              width="100%"
              height="500"
              src={
                videoUrl ||
                `https://www.youtube.com/embed/vLyP1aOmENc?si=aPCpD2JOABihWFx_`
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              className="w-full h-52 lg:h-96 aspect-videos"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
