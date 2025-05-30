import Image from "next/image";
import React from "react";

const Header: React.FC<{ onClose: () => void; isConnected: boolean }> = ({
  onClose,
  isConnected,
}) => {
  return (
    <div className="flex items-center gap-2 bg-secondary-50 p-2">
      <div className="bg-primary-50 rounded-full w-10 h-10">
        <Image
          src={"/svg/bot-image.svg"}
          width={50}
          height={50}
          alt="bot image"
          className="size-[2.5rem]"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="font-semibold text-primary-900">Vatsalya Bot</h4>
        {isConnected ? (
          <p className="flex items-center gap-1 text-primary-500 text-xs">
            <span className="inline-block bg-green-400 rounded-full size-2" />
            Active
          </p>
        ) : (
          <p className="flex items-center gap-1 opacity-70 grayscale-25 text-primary-500 text-xs">
            <span className="inline-block bg-red-500 rounded-full size-2" />
            Inactive
          </p>
        )}
      </div>
      <div className="flex ml-auto">
        <button
          onClick={onClose}
          className="flex justify-center items-center p-2 border border-secondary-400 rounded-full aspect-square cursor-pointer shrink-0 grow-0"
        >
          <span className="inline-block bg-secondary-400 rounded-sm w-2 h-px" />
        </button>
      </div>
    </div>
  );
};

export default Header;
