import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  BookOpen,
  Beaker,
  Calculator,
  Globe,
  Cpu,
  Leaf,
  Droplets,
  Sprout,
  TreeDeciduous,
  Building2,
  Heart,
  Palette,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/edge-ai/ContentCard";
import OfflineIndicator from "@/components/edge-ai/OfflineIndicator";
import BottomNav from "@/components/edge-ai/BottomNav";
import { useEdgeAI } from "@/contexts/EdgeAIContext";

const EdgeAIDashboard = () => {
  const navigate = useNavigate();
  const { user } = useEdgeAI();

  const greetingTime = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  // Content based on role
  const getContent = () => {
    if (user.role === "farmer") {
      return {
        subjects: [
          { icon: <Sprout />, title: "Crop Care", subtitle: "Season tips & guidance", variant: "green" as const },
          { icon: <Globe />, title: "Soil Health", subtitle: "Testing & improvement", variant: "earth" as const },
          { icon: <Droplets />, title: "Water Management", subtitle: "Irrigation basics", variant: "blue" as const },
          { icon: <TreeDeciduous />, title: "Organic Practices", subtitle: "Eco-friendly methods", variant: "green" as const },
        ],
        quickTips: [
          "🌾 Monsoon crop preparation tips",
          "💧 Water-saving irrigation methods",
          "🌿 Natural pest control remedies",
        ],
      };
    }

    if (user.role === "college") {
      return {
        subjects: [
          { icon: <Cpu />, title: "Engineering", subtitle: "Technical subjects", variant: "blue" as const },
          { icon: <Palette />, title: "Arts & Design", subtitle: "Creative learning", variant: "default" as const },
          { icon: <Heart />, title: "Medical", subtitle: "Health sciences", variant: "green" as const },
          { icon: <Building2 />, title: "Commerce", subtitle: "Business studies", variant: "earth" as const },
        ],
        quickTips: [
          "📚 Exam preparation strategies",
          "💡 Project ideas for engineering",
          "🎯 Career guidance available",
        ],
      };
    }

    // School student (default)
    return {
      subjects: [
        { icon: <Beaker />, title: "Science", subtitle: "Physics, Chemistry, Biology", variant: "blue" as const },
        { icon: <Calculator />, title: "Mathematics", subtitle: "Algebra, Geometry, Stats", variant: "green" as const },
        { icon: <Globe />, title: "Social Science", subtitle: "History, Geography, Civics", variant: "earth" as const },
        { icon: <GraduationCap />, title: "Competitive Exams", subtitle: "TNPSC & more", variant: "default" as const },
      ],
      quickTips: [
        "📖 Today's learning goal: 30 mins",
        "✨ Complete 5 practice questions",
        "🎯 Try the Science quiz",
      ],
    };
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-edge-green/5 via-background to-edge-blue/5 pb-24">
      {/* Header */}
      <div className="bg-gradient-edge text-white p-6 pt-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/80 text-sm">{greetingTime()}</p>
            <h1 className="text-2xl font-bold">{user.name || "Learner"}</h1>
          </div>
          <OfflineIndicator className="bg-white/20 border-white/30 text-white [&_*]:text-white" />
        </div>

        {/* AI Chat Button */}
        <Button
          onClick={() => navigate("/edge-ai/chat")}
          className="w-full h-14 bg-white/20 hover:bg-white/30 border border-white/30 text-white text-lg mt-4"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          Ask AI Assistant
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Tips */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="text-xl">💡</span> Quick Tips
          </h3>
          <div className="space-y-2">
            {content.quickTips.map((tip, i) => (
              <p key={i} className="text-muted-foreground text-sm">{tip}</p>
            ))}
          </div>
        </div>

        {/* Learning Progress (for students) */}
        {user.role !== "farmer" && (
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">Your Progress</h3>
              <span className="text-sm text-edge-green font-medium">Level: {user.level}</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[35%] bg-gradient-edge rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">35% to next level</p>
          </div>
        )}

        {/* Subjects / Topics */}
        <div>
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            {user.role === "farmer" ? "Topics" : "Subjects"}
          </h3>
          <div className="space-y-3">
            {content.subjects.map((subject, i) => (
              <ContentCard
                key={i}
                icon={subject.icon}
                title={subject.title}
                subtitle={subject.subtitle}
                variant={subject.variant}
                onClick={() => navigate("/edge-ai/content")}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default EdgeAIDashboard;
