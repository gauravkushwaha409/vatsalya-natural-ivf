"use client";

import HeroTextAnimation from "./HeroTextAnimation";

const HeroSection = () => {
  const text= "Journey to <parenthood,> /b Naturally and Compassionately"
  return (
    <div className="flex justify-center items-center pl-20 h-full min-h-screen">
      <div className="flex flex-col justify-center w-full h-full text-left">
        <h2 className="font-bold text-primary-500 uppercase tracking-wide typography-paragraph-large">
          Natural IVF
        </h2>
        <HeroTextAnimation text={text} />
        <p className="mt-[0.88rem] max-w-2xl font-[500] text-text-400 typography-paragraph-large">
          Nepal’s top IVF centers, offering advanced infertility treatments with
          15+ years of expertise to support your path to parenthood.
        </p>
      </div>
    </div>
  );
}
export default HeroSection