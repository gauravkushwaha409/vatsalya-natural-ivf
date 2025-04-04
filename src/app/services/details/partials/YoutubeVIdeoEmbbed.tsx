"use client";

import { useEffect, useState } from "react";

const YoutubeEmbed = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <iframe
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/vLyP1aOmENc?si=aPCpD2JOABihWFx_`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}
      className="h-52 lg:h-96 aspect-videos"
    ></iframe>
  );
};

export default YoutubeEmbed;
