"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ChatWindow from "./partial/ChatWindow";
import botImage from "../../../public/svg/bot-image.svg";

const BotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-6 z-50">
      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-secondary-500 p-2 border-2 border-secondary-500 rounded-full flex items-center justify-center shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={
            isOpen
              ? { scale: 1 }
              : {
                  scale: [1, 1.1, 1],
                  y: [0, -3, 0],
                  boxShadow: [
                    "0 0 0px rgba(0,0,0,0)",
                    "0 0 12px rgba(32, 108, 137, 0.5)",
                    "0 0 0px rgba(0,0,0,0)",
                  ],
                }
          }
          transition={
            isOpen
              ? { duration: 0.3 }
              : {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "easeInOut",
                }
          }
        >
          <motion.div
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="size-12 relative"
          >
            <Image src={botImage} alt="bot" fill className="object-contain" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-0 bottom-full mb-3"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <ChatWindow isOpen={isOpen} closePopup={() => setIsOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BotPopup;
