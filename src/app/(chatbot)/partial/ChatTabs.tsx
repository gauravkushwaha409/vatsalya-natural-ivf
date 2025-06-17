// components/ChatTabs.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatMessage from "./ChatMessage";
import type { Message } from "../types/index";

interface ChatTabsProps {
  botMessages: Message[];
  realTimeMessages: Message[];
}

const ChatTabs: React.FC<ChatTabsProps> = ({
  botMessages,
  realTimeMessages,
}) => {
  return (
    <Tabs defaultValue="bot" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="bot">Chat with Bot</TabsTrigger>
        <TabsTrigger value="realtime">Real-time Chat</TabsTrigger>
      </TabsList>

      <TabsContent value="bot">
        {botMessages.map((msg, idx) => (
          <ChatMessage key={`bot-${idx}`} message={msg} />
        ))}
      </TabsContent>

      <TabsContent value="realtime">
        {realTimeMessages.map((msg, idx) => (
          <ChatMessage key={`realtime-${idx}`} message={msg} />
        ))}
      </TabsContent>
    </Tabs>
  );
};

export default ChatTabs;
