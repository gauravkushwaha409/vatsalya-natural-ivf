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

  return (
    <iframe
      width="100%"
      height="500"
      src={`${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
      className="h-52 lg:h-96 aspect-video"
    ></iframe>
  );
};

export default YoutubeEmbed;
