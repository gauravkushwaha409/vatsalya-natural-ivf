import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary-100 backdrop-blur-[5.6px] px-20 py-10 text-text-400">
      <div className="gap-[6.56rem] grid grid-cols-4">
        <div className="space-y-3 font-manrope text-text-400 typography-paragraph-regular">
          <div className="h-20 aspect-auto">
            <Image
              src={"/horizontal-logo.png"}
              width={100}
              height={100}
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <p className="">
            Natural IVF: Embracing Your Body’s Natural Rhythm for Parenthood.
          </p>
          <p className="flex items-center gap-[0.63]">
            <a href={`mailto:${`info@vatsalya.com`}`}>
              info@vatsalyagmail.com{" "}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
            >
              <path
                d="M15.5 3.23828H5V12.2435"
                stroke="#585858"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 6.00781H19V14.3203C19 14.6877 18.8156 15.0401 18.4874 15.2999C18.1592 15.5598 17.7141 15.7057 17.25 15.7057H10.25C9.78587 15.7057 9.34075 15.5598 9.01256 15.2999C8.68437 15.0401 8.5 14.6877 8.5 14.3203V6.00781Z"
                stroke="#585858"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
          <a href={`tel:${"+977 9876543210"}`}>+977 9876543210</a>
          <div className="flex gap-4">
            {/* 
                 TODO: Change this to svgs in public
             */}
            <a href="https://www.facebook.com/">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linked.com/">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.whatsapp.com/">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
