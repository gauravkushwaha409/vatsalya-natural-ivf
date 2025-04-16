"use client";
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

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
import { IBlogDetailsBlog } from "../../interface/blogdetails.interface";

interface BlogDescriptionProps {
  data: IBlogDetailsBlog;
}
const BlogDescription: React.FC<BlogDescriptionProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <div className="mb-10">
        <p
          className="typography-paragraph-large  text-text-500 text-justify leading-[150%]"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
      </div>

      {/* share button  */}
      <div>
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-5 items-center">
            <div className="flex gap-1.5 items-center">
              <MessageCircle size={24} className="text-gray-600" />
              <span className="text-text-500 typography-paragraph-regular">
                {data?.comments.length}
              </span>
            </div>
            <div className="flex gap-1.5 items-center">
              <CiHeart size={24} />
              <span className="text-text-500 typography-paragraph-regular">
                {data?.favorites}
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
