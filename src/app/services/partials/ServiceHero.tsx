import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "next/image";
import React from "react";

const ServiceHero = () => {
  return (
    <div>
      <div className="padding-l  bg-primary-50 flex lg:flex-row flex-col justify-between items-center gap-10 lg:gap-0">
        <div className="w-full max-w-[711px] ">
          <CustomBreadcrumb
            items={[
              { name: "Home", link: "/" },
              { name: "Service", link: "/services" },
              //   { name: `${data?.slug}` },
            ]}
          />

          <h1 className="text-secondary-500 typography-h1 font-extrabold mb-3">
            Services
          </h1>

          <p className="text-text-500 text-[16px] leading-[160%] font-normal mb-5">
            Bringing hope to families with expert fertility care and
            cutting-edge treatments, ensuring a personalized journey to
            parenthood.
          </p>

          <button className="bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-8 md:px-10 lg:px-11 py-3 md:py-4 lg:py-4.5 border-[0.4px] border-secondary-100 rounded-full font-semibold transition-all duration-300 text-white cursor-pointer text-sm md:text-base typography-paragraph-regular hover:shadow-[0px_12px_24px_0px_rgba(101,53,83,0.8)] mb-12 lg:mb-0">
            Book Your Appointment
          </button>
        </div>

        <div className="w-[454px] h-[500px]">
          <Image
            src="/service/servicehero.svg"
            alt="hero-service"
            width={700}
            height={700}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div
        className="padding py-18 flex flex-col lg:flex-row justify-between"
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 210, 206, 0.2) 0%, rgba(235, 192, 219, 0.2) 100%)",
        }}
      >
        <p className="typography-h1 font-extrabold text-secondary-500 w-full max-w-[418px] shrink-0">
          Discover Parenthood with IVF
        </p>
        <p className="text-[16px] leading-[160%] text-text-500 font-normal w-full max-w-[701px]">
          Discovering Parenthood with IVF at Vatsalya Natural IVF in Nepal,
          understanding the intricacies of infertility is a crucial step in your
          journey towards parenthood. The diagnosis process plays a pivotal role
          in uncovering the underlying reasons for challenges in conception,
          even when engaging in regular unprotected intercourse.{" "}
        </p>
      </div>
    </div>
  );
};

export default ServiceHero;
