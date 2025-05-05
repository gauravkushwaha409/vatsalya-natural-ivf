import React from "react";

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col items-center">{children}</div>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <div className="flex-1 bg-primary-400 max-w-[148px] h-px" />
      <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
        {children}
      </h2>
      <div className="flex-1 bg-primary-400 max-w-[148px] h-px" />
    </div>
  );
};

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="pt-4 font-semibold text-text-500 typography-h3">{children}</p>
  );
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className="mx-auto pt-4 max-w-[95.5%] text-text-400 text-center leading-[150%] typography-paragraph-regular"
      dangerouslySetInnerHTML={{ __html: children || "" }}
    />
  );
};

SectionHeading.Title = Title;
SectionHeading.Subtitle = Subtitle;
SectionHeading.Paragraph = Paragraph;

export default SectionHeading;
