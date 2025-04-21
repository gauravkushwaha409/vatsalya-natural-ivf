import Image from "next/image";

type MessageProps = { text: string; sender: "bot" | "user"; name?: string };

const Message: React.FC<MessageProps> = ({ sender, text }) => {
  // const token = process.env.NEXT_PUBLIC_WEBSOCKET_TOKEN || "";
  // const { message, sendMessage } = useChat(token);
  // console.log(message);
  // useEffect(() => {
  //   sendMessage("hello prasanna");
  // }, []);

  // console.log("📩 All messages:");
  return (
    <div
      className={`w-full flex justify-start gap-[0.88rem]  items-end ${
        sender == "bot" ? " flex-row-reverse" : " flex-row"
      } mb-2`}
    >
      <div>
        {sender == "bot" ? (
          <div className="flex justify-center items-center bg-primary-400 rounded-full size-[1.75rem] font-semibold text-white text-sm">
            {sender ? sender[0].toUpperCase() : ""}
          </div>
        ) : (
          <Image
            src={"/svg/bot-image.svg"}
            width={50}
            height={50}
            alt="bot image"
            className="rounded-full size-[1.75rem]"
          />
        )}
      </div>
      <div
        className={`max-w-[70%] p-2  rounded-4xl ${
          sender == "bot"
            ? "bg-primary-50 text-text-400 rounded-br-xs"
            : "bg-secondary-50 text-text-400 rounded-bl-xs"
        }`}
      >
        <p className="typography-paragraph-regular">{text}</p>
      </div>
    </div>
  );
};
export default Message;
