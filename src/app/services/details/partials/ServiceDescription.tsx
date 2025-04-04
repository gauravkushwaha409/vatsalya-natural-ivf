"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import React, { useState } from "react";

const ServiceDescription = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <article className="py-10 flex  flex-col gap-5 text-text-400 text-justify">
      <p>
        Finding out that you and your partner are unable to carry the family
        legacy can be upsetting, daunting and agonizing. But remember you are
        not alone, as plenty of Nepalese couple faces the situation of
        infertility despite frequent unprotected intercourse for years.
        Infertility may result when a woman is unable to conceive or carry a
        pregnancy for long-term or when a male member fails to produce quality
        sperms. Fortunately, several safe and effective therapies improve the
        chances of getting pregnant and building your family. Followed by a few
        investigations and tests, the infertility specialist can provide
        appropriate recommendation for the male and female infertility
        treatment. It might be regulating hormones with certain drugs or
        choosing from some Assisted Reproductive Technologies (ART). IUI, IVF,
        IVF with ICSI are few common fertility treatments provided to infertile
        couples.
      </p>
      <h1 className="font-bold text-text-500 typography-h4 lg:typography-h3">
        Infertility Causes & Treatment
      </h1>
      <p>
        The common cause of infertility in women highlights the problem in
        ovulation, cervix, and damage of fallopian tubes or uterus. For a
        pregnancy to occur in a woman, the whole steps of the female
        reproduction process need to be corrected. While in male, hormonal
        imbalance, low-quality sperm may contribute to infertility cause.  
        Here, we shall discuss the causes of infertility in women, and men
        followed by their fertility treatments. 
      </p>
      <h1 className="font-bold text-text-500 typography-h4 lg:typography-h3">
        Infertility Causes & Treatment
      </h1>
      <p>
        The common cause of infertility in women highlights the problem in
        ovulation, cervix, and damage of fallopian tubes or uterus. For a
        pregnancy to occur in a woman, the whole steps of the female
        reproduction process need to be corrected. While in male, hormonal
        imbalance, low-quality sperm may contribute to infertility cause.  
        Here, we shall discuss the causes of infertility in women, and men
        followed by their fertility treatments. 
      </p>
      <h1 className="font-bold text-text-500 typography-h4 lg:typography-h3">
        Infertility Causes & Treatment
      </h1>
      <p>
        The common cause of infertility in women highlights the problem in
        ovulation, cervix, and damage of fallopian tubes or uterus. For a
        pregnancy to occur in a woman, the whole steps of the female
        reproduction process need to be corrected. While in male, hormonal
        imbalance, low-quality sperm may contribute to infertility cause.  
        Here, we shall discuss the causes of infertility in women, and men
        followed by their fertility treatments. 
      </p>
      <button
        onClick={() => setOpenModal(true)}
        className="typography-h4 font-semibold border-[0.4px] border-secondary-100 bg-secondary-500 py-4 px-11 rounded-full text-lg transition-colors duration-300 shadow-[0px 8px 18px 0px rgba(101,53,83,0.62)] cursor-pointer text-white w-fit "
      >
        Book an Appointment
      </button>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </article>
  );
};

export default ServiceDescription;
