"use client";
import React, { useState } from "react";
import { IoIosQuote } from "react-icons/io";

import { CiHeart } from "react-icons/ci";
import SocialMediaShareModal from "@/components/modals/SocialMediaShareModal";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

const BlogDescription = () => {
  const [openModal, setOpenModal] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <div className="mb-10">
        <h1 className="typography-h3 font-semibold text-text-500 mb-5">
          Understanding the Journey to Parenthood
        </h1>
        <p className="typography-paragraph-large  text-text-500 text-justify leading-[150%]">
          The process begins with an initial consultation, where fertility
          specialists assess medical history, conduct necessary tests, and
          create a personalized treatment plan. This stage is crucial in
          identifying potential fertility issues and determining the most
          effective approach for each individual or couple. Tests may include
          blood work, ultrasounds, and semen analysis to ensure all factors are
          considered before moving forward. Once the plan is set, ovarian
          stimulation starts with hormone injections to encourage the production
          of multiple eggs. During this period, regular monitoring through blood
          tests and ultrasounds ensures the ovaries respond correctly to the
          medication. When the follicles reach the ideal size, an injection is
          administered to trigger ovulation, and egg retrieval is scheduled. The
          egg retrieval procedure is a minor surgical process performed under
          mild sedation. A thin needle is inserted through the vaginal wall to
          collect the eggs from the ovaries. On the same day, a sperm sample is
          collected from a partner or donor. The healthiest sperm are selected
          and combined with the retrieved eggs in a laboratory for
          fertilization. In some cases, intracytoplasmic sperm injection (ICSI)
          is used to inject a single sperm directly into an egg to increase
          fertilization success. After fertilization, embryos develop in a
          controlled environment for several days. Specialists carefully monitor
          their growth and select the most viable embryo for transfer.
          Additional embryos may be frozen for future use. The embryo transfer
          procedure is quick and painless, involving the placement of the embryo
          into the uterus using a thin catheter. No anesthesia is required, and
          patients can resume normal activities shortly after. A crucial
          two-week waiting period follows, during which patients are advised to
          take care of their physical and emotional well-being. This waiting
          period can be stressful, and support from family, friends, or
          counseling can be beneficial. A blood test is then conducted to
          determine whether implantation has occurred. If the test is positive,
          the pregnancy continues under medical supervision to ensure a healthy
          progression.
        </p>
      </div>

      <div className="flex ">
        <span className="relative lg:mt-2 mr-4">
          <svg
            width="44"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="quoteGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#EBC0DB" />
                <stop offset="100%" stopColor="#FFD2CE" />
              </linearGradient>
            </defs>
            <IoIosQuote
              fill="url(#quoteGradient)"
              size={30}
              width={41}
              height={38}
            />
          </svg>
        </span>
        <h3 className="typography-h4 lg:typography-h2 font-medium text-text-500 leading-[150%]">
          Each IVF journey is unique, and success depends on various factors,
          including age, health, and lifestyle.
        </h3>
      </div>

      <p className="typography-paragraph-large leading-[150%] text-text-500 text-justify py-10">
        The process begins with an initial consultation, where fertility
        specialists assess medical history, conduct necessary tests, and create
        a personalized treatment plan. This stage is crucial in identifying
        potential fertility issues and determining the most effective approach
        for each individual or couple. Tests may include blood work,
        ultrasounds, and semen analysis to ensure all factors are considered
        before moving forward. Once the plan is set, ovarian stimulation starts
        with hormone injections to encourage the production of multiple eggs.
        During this period, regular monitoring through blood tests and
        ultrasounds ensures the ovaries respond correctly to the medication.
        When the follicles reach the ideal size, an injection is administered to
        trigger ovulation, and egg retrieval is scheduled. The egg retrieval
        procedure is a minor surgical process performed under mild sedation. A
        thin needle is inserted through the vaginal wall to collect the eggs
        from the ovaries. On the same day, a sperm sample is collected from a
        partner or donor. The healthiest sperm are selected and combined with
        the retrieved eggs in a laboratory for fertilization. In some cases,
        intracytoplasmic sperm injection (ICSI) is used to inject a single sperm
        directly into an egg to increase fertilization success. After
        fertilization, embryos develop in a controlled environment for several
        days. Specialists carefully monitor their growth and select the most
        viable embryo for transfer. Additional embryos may be frozen for future
        use. The embryo transfer procedure is quick and painless, involving the
        placement of the embryo into the uterus using a thin catheter. No
        anesthesia is required, and patients can resume normal activities
        shortly after. A crucial two-week waiting period follows, during which
        patients are advised to take care of their physical and emotional
        well-being. This waiting period can be stressful, and support from
        family, friends, or counseling can be beneficial. A blood test is then
        conducted to determine whether implantation has occurred. If the test is
        positive, the pregnancy continues under medical supervision to ensure a
        healthy progression.
      </p>

      {/* share button  */}
      <div>
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-5 items-center">
            <div className="flex gap-1.5 items-center">
              <CiHeart size={24} />
              <span className="text-text-500 typography-paragraph-regular">
                34
              </span>
            </div>
            <div className="flex gap-1.5 items-center">
              <CiHeart size={24} />
              <span className="text-text-500 typography-paragraph-regular">
                34
              </span>
            </div>
          </div>

          {/* social media icons  */}
          <div className="flex gap-4">
            <FacebookShareButton url={currentUrl}>
              <FaFacebook className="cursor-pointer" size={22} />
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl}>
              <FaTwitter className="cursor-pointer" size={22} />
            </TwitterShareButton>
            <EmailShareButton url={currentUrl}>
              <BsEnvelope className="cursor-pointer" size={22} />
            </EmailShareButton>
            <IoShareSocial
              className="cursor-pointer"
              size={22}
              onClick={() => {
                setOpenModal(true);
                setShareLink(currentUrl);
              }}
            />
          </div>
        </div>
      </div>

      <SocialMediaShareModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        shareLink={shareLink}
      />
    </div>
  );
};

export default BlogDescription;
