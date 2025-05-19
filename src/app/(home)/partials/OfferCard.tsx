import Image from "next/image";
import { useRouter } from "next/navigation";
import { OfferCardProps } from "../interface/whatWeOffer.interface";

const OfferCard: React.FC<OfferCardProps> = ({
  card,
  isMobile,
  align = "center",
}) => {
  const {
    title,
    description,
    imageSrc,
    bgColor,
    textColor,
    shape,
    gradient,
    marginTop,
    slug,
  } = card;

  const router = useRouter();
  // Dynamic styles based on alignment and mobile state
  const getContainerClassName = (): string => {
    let className = `flex flex-col gap-[0.63rem] ${bgColor} ${shape}`;

    if (isMobile) {
      className += " items-center text-center px-6 py-8 h-auto w-full";
    } else {
      if (align === "center") {
        className +=
          " items-center text-center p-[2.37rem] h-[19.75rem] aspect-square";
      } else if (align === "end") {
        className += ` items-end text-right px-10 pt-${
          card.position === "left-top" ? "14" : "9"
        } h-[21rem] aspect-square`;
      } else {
        className += ` items-start text-left px-10 pt-${
          card.position === "right-top" ? "14" : "9"
        } h-[21rem] aspect-square`;
      }
    }

    return className;
  };

  // Button padding based on alignment
  const getButtonClassName = (): string => {
    let className = "font-semibold";

    if (!isMobile) {
      if (align === "start") className += " pl-1.5";
      if (align === "end") className += " pr-1.5";
    }

    className += isMobile
      ? " typography-paragraph-small"
      : " typography-paragraph-regular";
    return className;
  };

  // Text & gradient styles
  const gradientStyle = gradient
    ? {
        background: "linear-gradient(180deg, #FDEDEB 0%, #F3E7ED 100%)",
      }
    : {};

  const titleStyle = gradient
    ? {
        background: "linear-gradient(180deg, #FF6F61 0%, #A03879 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }
    : {};

  return (
    <div
      className={getContainerClassName() + " overflow-hidden"}
      style={gradientStyle}
    >
      <div
        style={{
          marginTop: marginTop,
        }}
        className="w-max overflow-hidden"
      >
        <Image
          src={imageSrc}
          width={isMobile ? 80 : 100}
          height={isMobile ? 80 : 100}
          alt={title}
          className="p-3.5"
        />
      </div>
      <h3
        className={`font-bold ${textColor} ${
          isMobile ? "typography-h6" : "typography-h4"
        }`}
        style={titleStyle}
      >
        {title}
      </h3>
      <p
        className={`font-medium text-text-400 line-clamp-${
          card.position === "left-top" ? "4" : "3"
        } ${
          isMobile
            ? "typography-paragraph-small"
            : "typography-paragraph-regular"
        }`}
        dangerouslySetInnerHTML={{ __html: description || "" }}
      />

      <button
        className={`${getButtonClassName()} cursor-pointer`}
        onClick={() => router.push(`/services/${slug}`)}
      >
        Learn more
      </button>
    </div>
  );
};

export default OfferCard;
