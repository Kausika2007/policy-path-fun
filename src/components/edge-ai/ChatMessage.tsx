import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
  timestamp?: string;
}

const ChatMessage = ({ content, role, timestamp }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 mb-4 animate-slide-up",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
          isUser ? "bg-edge-blue text-white" : "bg-gradient-edge text-white"
        )}
      >
        {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </div>
      <div
        className={cn(
          "max-w-[80%] px-4 py-3 rounded-2xl",
          isUser
            ? "bg-edge-blue text-white rounded-tr-none"
            : "bg-card border border-border rounded-tl-none"
        )}
      >
        <p className="text-base leading-relaxed whitespace-pre-wrap">{content}</p>
        {timestamp && (
          <span
            className={cn(
              "text-xs mt-2 block",
              isUser ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
