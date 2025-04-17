"use client";

import { useEffect, useState } from "react";

interface YoutubeEmbedProps {
  url: string;
}
const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ url }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const extractVideoId = (url: string) => {
    if (!url) return "";
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]+)/
    );
    return match ? match[1] : "";
  };

  if (!url) {
    return <p className="text-red-500 text-center">No video available</p>;
  }

  return (
    <iframe
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${extractVideoId(url)}?&rel=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
      className="h-52 lg:h-96 aspect-video"
    ></iframe>
  );
};

export default YoutubeEmbed;
