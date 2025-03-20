import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-primary-100 backdrop-blur-[5.6px] px-20 py-10 text-text-400">
      <div className="gap-[6.56rem] grid grid-cols-4">
        <div>
          <div>
            <Image src={"/horizontal-logo.svg"} width={100} height={100} alt="logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer