import { Send } from "lucide-react";
import React, { useState } from "react";

const MessageInput: React.FC<{ sendMessage: (message: string) => void }> = ({
  sendMessage,
}) => {
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      sendMessage(messageInput);
      setMessageInput(""); // clear input
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="px-5 py-6">
      <label className="flex items-center gap-2 bg-light-variant-100 pr-5 border-dark-variant-50 rounded-[1.75rem]">
        <input
          type="text"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 py-4 pl-5 rounded-full outline-0 focus:outline-none h-max"
        />
        <button type="button" onClick={() => handleSendMessage}>
          <Send className="text-primary-900" />
        </button>
      </label>
    </div>
  );
};

export default MessageInput;
