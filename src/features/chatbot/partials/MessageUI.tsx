import { Send } from "lucide-react";
import Image from "next/image";
import { useChat } from "../hooks/useChat";
import Message from "./Message";

const MessageUI: React.FC<{ isOpen: boolean; closePopup: () => void }> = ({
  closePopup,
  isOpen,
}) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ0MTk3MTY3LCJpYXQiOjE3NDQxMTA3NjcsImp0aSI6ImZlYTIzMjM3MDQyNDQyNGI4NTk1YjFjZjAzNGVkNjM3IiwidXNlcl9pZCI6Ijg3OTdmOGNjLWQ2YTUtNDM4Yi04ZDIzLTYwNGE2MjY2YTdlMCJ9.i3cLXb1qVwcoG1iJvW02o_97oquZSAArpwcObubZZVg";
  const { isConnected } = useChat(token);
  console.log(isConnected, "socket connected");

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #EBC0DB 0%, #FFD2CE 100%), url('/noise.png') center / cover no-repeat, lightgray",
        boxShadow: "0px 5px 19.9px 5px rgba(0, 0, 0, 0.06)",
        opacity: isOpen ? "1" : "0",
        pointerEvents: isOpen ? "all" : "none",
        transform: isOpen ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
      }}
      className="flex flex-col border rounded-[1.25rem] min-w-[25rem] h-[40rem] max-h-[calc(100vh-10rem)] overflow-hidden"
    >
      <Header onClose={closePopup} />
      <div className="flex-1 px-1.5 overflow-y-auto">
        <MessagesContainer />
      </div>
      <div className="shrink-0">
        <MessageInput />
      </div>
    </div>
  );
};
export default MessageUI

const Header:React.FC<{onClose:()=>void}> = ({onClose}) => {
  return (
    <div className="flex items-center gap-2 bg-secondary-50 p-6">
      <div className="bg-primary-50 rounded-full w-10 h-10">
        <Image src={"/svg/bot-image.svg"} width={50} height={50} alt="bot image" className="size-[2.5rem]" />
      </div>
      <div className="flex flex-col">
        <h4 className="font-semibold text-primary-900">Vatsalya Bot</h4>
        <p className="flex items-center gap-1 text-primary-500 text-xs"><span className="inline-block bg-green-400 rounded-full size-2"/>Active</p>
      </div>
      <div className="flex ml-auto">
        <button onClick={onClose} className="flex justify-center items-center p-2 border border-secondary-400 rounded-full aspect-square cursor-pointer shrink-0 grow-0">
          <span className="inline-block bg-secondary-400 rounded-sm w-2 h-px"/>
        </button>
      </div>
    </div>
  );
}

const MessagesContainer = () => {
  return (
    <div className="space-y-5 mb-4 px-1.5 pt-4 w-full h-full">
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat" />
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat" />
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat" />
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat" />
      <Message text="Hello, how can I help you?" sender="bot" />
      {/*
      <Message text="Hello, how can I help you?" sender="user" name="saugat"/>
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat"/>
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat"/>
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat"/>
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat"/>
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat"/>
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat"/>
      <Message text="Hello, how can I help you?" sender="bot" />
      <Message text="Hello, how can I help you?" sender="user" name="saugat"/> */}
    </div>
  );
}

const MessageInput = () => {
  return (
    <div className="px-5 py-6">
      <label className="flex items-center gap-2 bg-light-variant-100 pr-5 border-dark-variant-50 rounded-[1.75rem]">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 py-4 pl-5 rounded-full outline-0 focus:outline-none h-max"
        />
        <button className="">
          <Send className="text-primary-900" />
        </button>
      </label>
    </div>
  );
}