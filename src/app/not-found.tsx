import GobackButton from "@/components/bottons/GobackButton";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-[6.37rem]">
      <Image
        src={"/svg/not-found.svg"}
        alt="Not Found"
        width={500}
        height={500}
        className="mx-auto my-8"
      />
      <GobackButton />
    </div>
  );
};
export default NotFoundPage;
