import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, BookOpen, Video, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContentCard from "@/components/edge-ai/ContentCard";
import BottomNav from "@/components/edge-ai/BottomNav";
import { useEdgeAI } from "@/contexts/EdgeAIContext";
import { cn } from "@/lib/utils";

const EdgeAIContent = () => {
  const navigate = useNavigate();
  const { user } = useEdgeAI();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategories = () => {
    if (user.role === "farmer") {
      return [
        { id: "crops", name: "Crops", icon: "🌾", count: 24 },
        { id: "soil", name: "Soil Health", icon: "🌍", count: 18 },
        { id: "water", name: "Water", icon: "💧", count: 12 },
        { id: "organic", name: "Organic", icon: "🌿", count: 15 },
      ];
    }
    if (user.role === "college") {
      return [
        { id: "engineering", name: "Engineering", icon: "⚙️", count: 45 },
        { id: "arts", name: "Arts", icon: "🎨", count: 30 },
        { id: "medical", name: "Medical", icon: "🏥", count: 38 },
        { id: "commerce", name: "Commerce", icon: "📊", count: 25 },
      ];
    }
    return [
      { id: "science", name: "Science", icon: "🔬", count: 42 },
      { id: "maths", name: "Mathematics", icon: "📐", count: 35 },
      { id: "social", name: "Social Science", icon: "🌍", count: 28 },
      { id: "tnpsc", name: "TNPSC", icon: "📚", count: 20 },
    ];
  };

  const categories = getCategories();

  const contentItems = [
    { title: "Introduction to the Topic", type: "lesson", duration: "10 min", progress: 100 },
    { title: "Key Concepts Explained", type: "video", duration: "15 min", progress: 60 },
    { title: "Practice Questions", type: "quiz", duration: "20 min", progress: 0 },
    { title: "Advanced Topics", type: "lesson", duration: "12 min", progress: 0 },
    { title: "Summary & Review", type: "notes", duration: "5 min", progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-edge-green/5 via-background to-edge-blue/5 pb-24">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/edge-ai")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Learn</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics..."
            className="pl-10 h-12"
          />
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Categories</h3>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all text-left",
                  selectedCategory === cat.id
                    ? "border-edge-green bg-edge-green/10"
                    : "border-border bg-card hover:border-edge-green/50"
                )}
              >
                <span className="text-2xl mb-2 block">{cat.icon}</span>
                <span className="font-semibold text-foreground block">{cat.name}</span>
                <span className="text-sm text-muted-foreground">{cat.count} lessons</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content List */}
        {selectedCategory && (
          <div className="animate-slide-up">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h3>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <ChevronDown className="w-4 h-4 mr-1" /> Sort
              </Button>
            </div>
            <div className="space-y-3">
              {contentItems.map((item, i) => (
                <ContentCard
                  key={i}
                  icon={
                    item.type === "video" ? <Video className="w-5 h-5" /> :
                    item.type === "quiz" ? <FileText className="w-5 h-5" /> :
                    <BookOpen className="w-5 h-5" />
                  }
                  title={item.title}
                  subtitle={`${item.type} • ${item.duration}`}
                  progress={item.progress}
                  variant={item.progress === 100 ? "green" : "default"}
                />
              ))}
            </div>
          </div>
        )}

        {/* Offline indicator */}
        <div className="bg-edge-green/10 border border-edge-green/30 rounded-xl p-4 text-center">
          <p className="text-sm text-edge-green font-medium">
            📥 All content available offline
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Last synced: Today at 8:00 AM
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default EdgeAIContent;
