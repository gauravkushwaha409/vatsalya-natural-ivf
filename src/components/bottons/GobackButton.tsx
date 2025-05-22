"use client";

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    const referrer = document.referrer;
    const currentHost = window.location.host;
    const isInternalReferrer =
      referrer && new URL(referrer).host === currentHost;
    if (isInternalReferrer) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-secondary-500 hover:bg-secondary-600 mx-auto px-[3.09rem] py-[0.66rem] rounded-full font-semibold text-text-50 hover:text-white text-center transition-all cursor-pointer typography-paragraph-regular"
    >
      Back
    </button>
  );
};

export default GoBackButton;
