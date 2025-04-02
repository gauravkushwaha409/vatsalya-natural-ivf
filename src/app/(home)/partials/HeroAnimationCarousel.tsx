import Image from "next/image";
import { useEffect, useState } from "react";

const HeroAnimationCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmall = useIsSmall;

  useEffect(() => {
    const next = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(next);
  }, [images.length]);

  const thumbnailWidth = 100;
  const gap = 10;
  const inactiveCount = images.length - 1;
  const totalWidth = inactiveCount * thumbnailWidth + (inactiveCount - 1) * gap;

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <ul className="relative w-full h-full">
        {images.map((image, i) => {
          const indexOffset = (i + currentIndex) % images.length;
          const isActive = indexOffset === 0;

          let leftPosition;
          if (isActive) {
            leftPosition = 0;
          } else {
            const position = indexOffset - 1;
            leftPosition = `calc(50% - ${totalWidth / 2}px + ${
              position * (thumbnailWidth + gap)
            }px)`;
          }

          return (
            <li
              key={i}
              style={{
                left: isActive ? "0" : leftPosition,
                width: isActive ? "100%" : `${thumbnailWidth}px`,
                backgroundColor: isActive ? "transparent" : "white",
                borderRadius: isActive ? "0" : "1.25rem",
                zIndex: isActive ? 9 : 11,
                transition: isActive
                  ? "all 2500ms ease-in-out, z-index 0s"
                  : "all 2500ms ease-in-out",
                // transition: "z-index 0s",
              }}
              className={`absolute transition-all border 
                ${
                  isActive
                    ? "top-1/2 lg:top-0  h-[calc(100%-200px-5.5rem)] lg:h-[calc(100%-120px-1.5rem)] border-transparent "
                    : "bottom-0 lg:top-[calc(100%-180px-0.5rem)] h-[50px] lg:h-[110px] aspect-square  border-secondary-200"
                } `}
            >
              <Image
                width={1800}
                height={2000}
                alt={`Image ${i}`}
                src={image}
                className="block rounded-lg w-auto h-full object-cover"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HeroAnimationCarousel;
