"use client ";

const HomeHero = () => {
  return (
    <div>
      {/* <div className="w-[245.19px] h-[243.08] -ml-22 -mt-14">
        <Image
          src="/svg/butterfly.svg"
          alt="Butterfly"
          width={100}
          height={100}
          className="object-cover w-full h-full"
        />
      </div> */}

      {/* <div
        className="h-10 border"
        style={{
          background:
            "linear-gradient(166deg, #FFF1EF 10.56%, rgba(255, 241, 239, 0) 90.62%)",
        }}
      /> */}

      <div className="relative flex items-center h-[660px] bg-[#FFEDEC]">
        {/* Blur Overlay */}

        <div className="absolute  h-10 w-full z-20 top-0 bg-[linear-gradient(180deg,_rgba(255,241,239,1)_80%,_rgba(255,255,255,1)_89%)] "></div>

        {/* <div className="absolute border h-10 w-full z-20 top-0 bg-[linear-gradient(166deg,_#FFF1EF_10.56%,_rgba(255,241,239,0)_90.62%)]"></div> */}

        <div className="absolute inset-0 bg-[#FFE8E7]/20  z-10  "></div>

        {/* Text Section */}
        <div className="padding-l w-[40%] shrink-0 z-10 relative">
          <h1 className="text-[52px] leading-[114.999%] font-extrabold mb-4 text-[#A0377B] max-w-xl w-full">
            We transform hope within you into life
          </h1>
          <p className="text-[#787878] text-[15px] leading-[180%] font-medium mb-8 max-w-xl w-full">
            Nepal's No. 1 IVF center, providing advanced infertility treatments
            with over 15 years of expertise to guide you on your journey to
            parenthood.
          </p>

          <button className="hover:bg-secondary bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-11 py-4.5 border-[0.4px] border-secondary-100 rounded-full font-semibold transition-colors duration-300 text-white cursor-pointer typography-paragraph-regular">
            Book Your Appointment
          </button>
        </div>

        {/* Video Section */}
        <div className="!h-[660px] w-full z-0 relative ">
          <video
            src="/home/video.mp4"
            autoPlay
            muted
            loop
            controls={false}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
