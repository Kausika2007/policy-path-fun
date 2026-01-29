import { createContext, useContext, useState, ReactNode } from "react";

type UserRole = "school" | "college" | "farmer" | null;
type UserLevel = "beginner" | "intermediate" | "advanced";

interface EdgeAIUser {
  name: string;
  role: UserRole;
  language: string;
  level: UserLevel;
  isOnboarded: boolean;
}

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface EdgeAIContextType {
  user: EdgeAIUser;
  setUser: (user: Partial<EdgeAIUser>) => void;
  messages: ChatMessage[];
  addMessage: (role: "user" | "assistant", content: string) => void;
  clearMessages: () => void;
  isOffline: boolean;
}

const defaultUser: EdgeAIUser = {
  name: "",
  role: null,
  language: "en",
  level: "beginner",
  isOnboarded: false,
};

const EdgeAIContext = createContext<EdgeAIContextType | undefined>(undefined);

export const EdgeAIProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<EdgeAIUser>(defaultUser);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isOffline] = useState(true); // Always offline for Edge AI

  const setUser = (updates: Partial<EdgeAIUser>) => {
    setUserState((prev) => ({ ...prev, ...updates }));
  };

  const addMessage = (role: "user" | "assistant", content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <EdgeAIContext.Provider
      value={{ user, setUser, messages, addMessage, clearMessages, isOffline }}
    >
      {children}
    </EdgeAIContext.Provider>
  );
};

export const useEdgeAI = () => {
  const context = useContext(EdgeAIContext);
  if (context === undefined) {
    throw new Error("useEdgeAI must be used within an EdgeAIProvider");
  }
  return context;
};
