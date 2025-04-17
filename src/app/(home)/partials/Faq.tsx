import Image from "next/image";
import Faq from "../../../components/Faqs";
import pic1 from "./../../../assests/contact/pic3.png";
import pic2 from "./../../../assests/contact/pic4.png";
import { IHomeFaq } from "../interface/home.interface";

type HomeFaqProps = {
  data: IHomeFaq[];
};
const HomeFaq: React.FC<HomeFaqProps> = ({ data }) => {
  return (
    <section className="flex gap-10 px-5 md:px-20 pb-20">
      <div className="hidden md:flex justify-start items-center w-full md:w-1/2">
        <div className="relative rounded-lg w-10/12 aspect-[16/16]">
          <Image
            src={pic1}
            alt="approval"
            width={1920}
            height={1920}
            className="w-full h-full"
          />
          <div className="-right-10 -bottom-10 absolute bg-white pt-[0.1rem] pl-[0.1rem] rounded-t-none rounded-l-3xl w-[50%] aspect-[271/252]">
            <div className="flex flex-col justify-center items-center rounded-xl w-full h-full">
              <Image
                src={pic2}
                alt="approval"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-3 py-5">
          <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
            FAQs
          </span>
          <div className="border border-primary-400 border-t w-21"></div>
        </div>
        <h2 className="pb-4 font-semibold typography-h2">
          Answers to Your Fertility Questions
        </h2>
        <Faq faq={data} />
      </div>
    </section>
  );
};

export default HomeFaq;
