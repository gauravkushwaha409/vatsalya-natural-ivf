import React from "react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaRegCopy,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import useClickOutside from "@/hooks/useClickOutside";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "sonner";
interface SocialMediaShareModalProps {
  isOpen: boolean | undefined;
  onClose: () => void;
  shareLink: string | undefined;
}
const SocialMediaShareModal: React.FC<SocialMediaShareModalProps> = ({
  isOpen,
  onClose,
  shareLink,
}) => {
  const modalRef = useClickOutside(onClose);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink || "");
    toast.success("Link copied to clipboard!");
  };
  return (
    <>
      {isOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40 text-black">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md px-10 py-7 rounded-lg w-auto"
            ref={modalRef}
          >
            <h1 className="mb-4 text-section-h1 text-center">Share to:</h1>
            <div className="flex gap-10">
              <FacebookShareButton url={shareLink || ""}>
                <FaFacebook className="text-blue-600 text-3xl" />
              </FacebookShareButton>{" "}
              <TwitterShareButton url={shareLink || ""}>
                <FaXTwitter className="text-xl lg:text-3xl" />
              </TwitterShareButton>{" "}
              <WhatsappShareButton url={shareLink || ""}>
                <FaWhatsapp className="text-green-500 text-xl lg:text-3xl" />
              </WhatsappShareButton>{" "}
              <InstapaperShareButton url={shareLink || ""}>
                <FaInstagram className="text-red-500 text-xl lg:text-3xl" />
              </InstapaperShareButton>{" "}
              <FacebookShareButton url={shareLink || ""}>
                <FaFacebookMessenger className="text-blue-500 text-xl lg:text-3xl" />
              </FacebookShareButton>{" "}
              <button aria-label="copy link" onClick={handleCopyLink}>
                <FaRegCopy className="text-gray-500 text-xl lg:text-3xl" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
export default SocialMediaShareModal;
