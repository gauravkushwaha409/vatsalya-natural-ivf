import Link from "next/link";

const Breadcrumb: React.FC<{
  name: string;
  offsetHeading?: boolean;
  baseName?: string;
  style?: string;
}> = ({ name, offsetHeading = false, baseName, style }) => {
  return (
    <>
      {offsetHeading && <div className="h-[4.7rem]" />}
      <div>
        <div
          className={`flex mx-auto w-max typography-caption text-text-50 ${style}`}
        >
          <Link href="/" className="flex justify-center items-center ">
            {baseName || "Home"}
          </Link>
          <span className="inline-block px-1">{">"}</span>
          <span className="text-primary-300">{name}</span>
        </div>
      </div>
    </>
  );
};
export default Breadcrumb;
