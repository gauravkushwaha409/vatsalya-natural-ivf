import { useMediaQuery } from "@/hooks/useMediaQuery";
import React, { useEffect, useState } from "react";

const HeroAnimationCarousel: React.FC<{ children: React.ReactNode[] }> = ({
  children: slides,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmall = useMediaQuery("(width <= 40rem)");

  useEffect(() => {
    const next = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(next);
  }, [slides.length]);

  const thumbnailWidth = isSmall ? 70 : 100;
  const gap = 10;
  const inactiveCount = slides.length - 1;
  const totalWidth = inactiveCount * thumbnailWidth + (inactiveCount - 1) * gap;

  return (
    <div className="flex flex-col justify-center items-center pt-20 lg:pt-0 w-full h-full">
      <ul className="relative w-full h-full">
        {slides.map((slide, i) => {
          const indexOffset = (i + currentIndex) % slides.length;
          const isActive = indexOffset === 0;

          let leftPosition;
          if (isActive) {
            leftPosition = 0;
          } else {
            const position = indexOffset - 1;
            leftPosition = isSmall
              ? `calc(65% - ${totalWidth / 2}px + ${
                  position * (thumbnailWidth + gap)
                }px)`
              : `calc(50% - ${totalWidth / 2}px + ${
                  position * (thumbnailWidth + gap)
                }px)`;
          }

          return (
            <li
              key={i}
              style={{
                left: isActive ? (isSmall ? "0%" : "0") : leftPosition,
                width: isActive
                  ? isSmall
                    ? "100%"
                    : "100%"
                  : `${thumbnailWidth}px`,
                backgroundColor: isActive ? "transparent" : "white",
                borderRadius: isActive ? "0" : "1.25rem",
                zIndex: isActive ? 9 : 11,
                transition: isActive
                  ? "all 2500ms ease-in-out, z-index 0s"
                  : "all 2500ms ease-in-out",
              }}
              className={`absolute transition-all border  overflow-hidden
                ${
                  isActive
                    ? "bottom-5 lg:top-0  h-[calc(100%-200px-5.5rem)] lg:h-full border-transparent  "
                    : "bottom-0 lg:top-[calc(100%-180px-0.5rem)] h-[70px] lg:h-[110px] aspect-square  border-secondary-200"
                } `}
            >
              {slide}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HeroAnimationCarousel;
