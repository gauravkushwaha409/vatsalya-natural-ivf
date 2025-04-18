"use client";
import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
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
import { useGetDataQuery, usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";

interface BlogDescriptionProps {
  data: IBlogDetailsBlog;
}

const BlogDescription: React.FC<BlogDescriptionProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(data?.favorites || 0);

  const datacoment = useGetDataQuery({
    url: `${endpoints.blog}/${data?.slug}`,
    tag: "comment-count",
  });

  const [postLike, { isLoading: LikeLoading }] = usePostDataMutation();

  const handleLike = async () => {
    try {
      await postLike({
        url: `${endpoints.blog}/${data?.slug}/favorite`,
        invalidateTag: "add-like",
      });

      // Toggle local like state
      setIsLiked((prev) => !prev);

      // Update favorite count locally
      setFavoritesCount((prev) => (isLiked ? prev - 1 : prev + 1));
    } catch (error) {
      console.error("Failed to toggle like", error);
    }
  };

  const commentLength = datacoment?.currentData?.data?.blog?.comments?.length;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  // Optional: If `data.favorites` exists in API, initialize like state
  useEffect(() => {
    if (data?.favorites !== undefined) {
      setIsLiked(data.favorites > 0);
    }
  }, [data?.favorites]);

  return (
    <div>
      <div className="mb-10">
        <p
          className="typography-paragraph-large text-text-500 text-justify leading-[150%]"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
      </div>

      {/* share + like section */}
      <div>
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-5 items-center">
            <div className="flex gap-1.5 items-center">
              <MessageCircle size={24} className="text-gray-600" />
              <span className="text-text-500 typography-paragraph-regular">
                {commentLength}
              </span>
            </div>
            <button
              onClick={handleLike}
              className="flex gap-1.5 items-center focus:outline-none cursor-pointer"
              disabled={LikeLoading}
            >
              {isLiked ? (
                <FaHeart size={24} className="text-red-500" />
              ) : (
                <CiHeart size={24} className="text-red-500" />
              )}
              <span className="text-text-500 typography-paragraph-regular">
                {favoritesCount}
              </span>
            </button>
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
