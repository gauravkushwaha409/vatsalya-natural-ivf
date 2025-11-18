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

      <div className="relative flex items-center h-[660px] overflow-hidden">
        {/* Background Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFEDEC] via-[#FFE8E7]/80 to-transparent z-10"></div>

        {/* Top Blur Overlay */}
        {/* <div className="absolute h-10 w-full z-30 top-0 bg-[linear-gradient(180deg,_rgba(255,241,239,1)_80%,_rgba(255,255,255,1)_89%)]"></div> */}

        {/* Enhanced Gradient Overlay for Video Blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFEDEC] via-[#FFE8E7]/40 to-transparent z-20"></div>

        {/* Text Section */}
        <div className="padding-l w-[45%] shrink-0 z-30 relative">
          <h1 className="text-[52px] leading-[114.999%] font-extrabold mb-4 text-[#A0377B] max-w-xl w-full ">
            We transform hope within you into life
          </h1>
          <p className="text-[#787878] text-[15px] leading-[180%] font-medium mb-8 max-w-xl w-full">
            Nepal's No. 1 IVF center, providing advanced infertility treatments
            with over 15 years of expertise to guide you on your journey to
            parenthood.
          </p>

          <button className="bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-11 py-4.5 border-[0.4px] border-secondary-100 rounded-full font-semibold transition-all duration-300 text-white cursor-pointer typography-paragraph-regular hover:shadow-[0px_12px_24px_0px_rgba(101,53,83,0.8)] ">
            Book Your Appointment
          </button>
        </div>

        {/* Video Section with Gradient Mask */}
        <div className="absolute  translate-x-[20%] inset-0 w-full h-[660px] z-0 ">
          <video
            src="/home/video.mp4"
            autoPlay
            muted
            loop
            controls={false}
            className="object-cover w-full h-full"
          />
          {/* Video Gradient Mask for Better Blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFEDEC]/70 via-transparent to-transparent mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FFEDEC]/40"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
