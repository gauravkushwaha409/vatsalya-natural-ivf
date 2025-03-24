import { LucideHome } from "lucide-react";
import Link from "next/link";

const Breadcrumb: React.FC<{
  name: string;
  offsetHeading?: boolean;
  baseName?: string;
}> = ({ name, offsetHeading = false, baseName }) => {
  return (
    <>
      {offsetHeading && <div className="h-[4.7rem]" />}
      <div className="bg-[#f5f6fa] pt-[120px] pb-[120px]">
        <div className="flex mx-auto w-max font-inter text-[#5d626c]">
          <Link href="/" className="flex justify-center items-center gap-1">
            <LucideHome size={20} /> {baseName || "Home"}
          </Link>
          <span className="inline-block px-2.5">{">"}</span>
          <span className="text-activeblue">{name}</span>
        </div>
      </div>
    </>
  );
};
export default Breadcrumb;
