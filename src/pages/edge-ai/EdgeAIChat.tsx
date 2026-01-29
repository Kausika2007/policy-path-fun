import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Mic, MicOff, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from "@/components/edge-ai/ChatMessage";
import OfflineIndicator from "@/components/edge-ai/OfflineIndicator";
import { useEdgeAI } from "@/contexts/EdgeAIContext";

const EdgeAIChat = () => {
  const navigate = useNavigate();
  const { user, messages, addMessage } = useEdgeAI();
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated AI responses based on role
  const getAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (user.role === "farmer") {
      if (msg.includes("crop") || msg.includes("plant")) {
        return "Based on the current season, here are some tips for your crops:\n\n1. **Water regularly** - Early morning is best\n2. **Check soil moisture** - Use finger test method\n3. **Watch for pests** - Natural remedies work well\n\nWould you like specific information about any crop?";
      }
      if (msg.includes("soil")) {
        return "Good soil health is essential! Here's what you can do:\n\n🌍 **Test your soil** - Check pH levels\n🌿 **Add organic matter** - Compost helps a lot\n💧 **Proper drainage** - Avoid waterlogging\n\nWant me to explain any of these in detail?";
      }
      return "I'm here to help with your farming questions! Ask me about:\n\n• Crop care and planting\n• Soil health tips\n• Water management\n• Organic practices\n• Pest control";
    }

    if (user.role === "college") {
      if (msg.includes("study") || msg.includes("exam")) {
        return "Here are effective study strategies:\n\n📚 **Active recall** - Test yourself often\n⏰ **Pomodoro technique** - 25 min study, 5 min break\n📝 **Make notes** - Write in your own words\n\nWhich subject do you need help with?";
      }
      return "I can help you with college-level topics!\n\n• Engineering concepts\n• Medical sciences\n• Arts and design\n• Career guidance\n\nWhat would you like to learn about?";
    }

    // School student
    if (msg.includes("math") || msg.includes("calculate")) {
      return "Let me help you with mathematics!\n\n📐 **Step 1**: Identify what's given\n📝 **Step 2**: Write the formula\n✅ **Step 3**: Solve step by step\n\nCan you share the specific problem?";
    }
    if (msg.includes("science") || msg.includes("physics") || msg.includes("chemistry")) {
      return "Science is fascinating! Here's how to understand it better:\n\n🔬 **Observe carefully**\n❓ **Ask why things happen**\n📖 **Connect to real life examples**\n\nWhat topic are you studying?";
    }

    return "Hello! I'm your offline AI learning assistant.\n\nI can help you with:\n• Explaining difficult concepts\n• Step-by-step solutions\n• Practice questions\n• Study tips\n\nWhat would you like to learn today?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    addMessage("user", input);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = getAIResponse(input);
      addMessage("assistant", response);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickPrompts = user.role === "farmer"
    ? ["How to prepare for monsoon?", "Best organic fertilizers?", "Pest control tips"]
    : user.role === "college"
    ? ["Study tips for exams", "Explain this concept", "Career guidance"]
    : ["Help with math problem", "Explain science topic", "Study tips"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-gradient-edge text-white p-4 flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={() => navigate("/edge-ai")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="font-semibold">Offline Edge AI Assistant</h1>
          <p className="text-xs text-white/70">Local AI • No internet needed</p>
        </div>
        <OfflineIndicator className="bg-white/20 border-white/30 text-white [&_*]:text-white" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-edge flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Start Learning!</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Ask any question - I'll explain step by step
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => setInput(prompt)}
                  className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground hover:bg-edge-green/10 hover:text-edge-green transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            content={msg.content}
            role={msg.role}
            timestamp={msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          />
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-edge-green animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 rounded-full bg-edge-green animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 rounded-full bg-edge-green animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
            <span className="text-sm">AI is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-card">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsRecording(!isRecording)}
            className={isRecording ? "bg-destructive text-destructive-foreground" : ""}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything..."
            className="flex-1 h-12 text-base"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-gradient-edge hover:opacity-90 h-12 px-6"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EdgeAIChat;
