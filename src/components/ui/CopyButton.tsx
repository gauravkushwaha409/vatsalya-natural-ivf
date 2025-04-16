"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface CopyButtonProps {
  oncopySucess?: () => void;
  oncopyFail?: () => void;
  text: string;
}
/**
 *
 * @param text text to be copied to the clipboard
 * @param oncopyFail callback function to be called when copying fails
 * @param oncopySucess callback function to be called when copying is successful
 * @returns button element with copy icon which is only rendered if the navigator.clipboard API is available
 */
const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  oncopyFail,
  oncopySucess,
}) => {
  const copyToClipboard = async () => {
    try {
      await window.navigator.clipboard.writeText(text);
      if (oncopySucess) oncopySucess();
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
      if (oncopyFail) oncopyFail();
    }
  };

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  });

  if (typeof window === "undefined") return null;

  return (
    window.navigator.clipboard && (
      <button disabled={copied} className={`h-7 pl-1 ${!copied?"cursor-pointer":""}`} onClick={copyToClipboard}>
        {copied ? (
          <div className="relative flex items-center gap-1 text-xs">
            <Check size={17} className="text-green-400" />
            <span className="left-full absolute bg-primary-600 ml-1 px-1 py-0.5 rounded-md text-stone-300">
              Copied
            </span>
          </div>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="19"
            viewBox="0 0 24 19"
            fill="none"
          >
            <path
              d="M15.5 3.23828H5V12.2435"
              stroke="#585858"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 6.00781H19V14.3203C19 14.6877 18.8156 15.0401 18.4874 15.2999C18.1592 15.5598 17.7141 15.7057 17.25 15.7057H10.25C9.78587 15.7057 9.34075 15.5598 9.01256 15.2999C8.68437 15.0401 8.5 14.6877 8.5 14.3203V6.00781Z"
              stroke="#585858"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    )
  );
};
export default CopyButton;
