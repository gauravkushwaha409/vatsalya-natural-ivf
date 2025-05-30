import React, { useState } from "react";
import { useChat } from "../context/ChatContext";
import { IoMdSend } from "react-icons/io";

const MessageInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { sendMessage, isTyping } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isTyping) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
      <div className="relative flex-grow">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your queries here..."
          disabled={isTyping}
          className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-gray-700 placeholder-gray-400 disabled:bg-gray-100 disabled:text-gray-500 text-sm md:text-base bg-white"
        />
      </div>
      <button
        type="submit"
        disabled={!inputValue.trim() || isTyping}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-500 text-white disabled:bg-secondary-200 disabled:cursor-not-allowed hover:bg-secondary-700 transition-colors duration-200 flex-shrink-0 cursor-pointer "
        aria-label="Send message"
      >
        <IoMdSend className="text-lg" />
      </button>
    </form>
  );
};

export default MessageInput;
