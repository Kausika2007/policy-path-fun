import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Video, Mic, HardDrive, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import KnowledgeCard from "@/components/edge-ai/KnowledgeCard";
import BottomNav from "@/components/edge-ai/BottomNav";
import { cn } from "@/lib/utils";

const EdgeAICommunity = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"browse" | "my">("browse");

  const communityContent = [
    {
      title: "Natural pest control for rice crops",
      author: "Farmer Kumar",
      type: "video" as const,
      duration: "5:30",
      status: "approved" as const,
      storedLocally: true,
    },
    {
      title: "Organic composting method",
      author: "Lakshmi",
      type: "video" as const,
      duration: "8:15",
      status: "approved" as const,
      storedLocally: true,
    },
    {
      title: "Water-saving drip irrigation",
      author: "Agricultural Officer",
      type: "video" as const,
      duration: "12:00",
      status: "approved" as const,
      storedLocally: false,
    },
    {
      title: "Seed selection tips - audio guide",
      author: "Elder Rajan",
      type: "audio" as const,
      duration: "3:45",
      status: "approved" as const,
      storedLocally: true,
    },
  ];

  const myContent = [
    {
      title: "My vegetable garden tips",
      author: "You",
      type: "video" as const,
      duration: "4:20",
      status: "pending" as const,
      storedLocally: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-edge-green/5 via-background to-edge-blue/5 pb-24">
      {/* Header */}
      <div className="bg-gradient-earth text-white p-4 pt-6 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => navigate("/edge-ai")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Knowledge Sharing</h1>
            <p className="text-xs text-white/70">Share & learn from the community</p>
          </div>
        </div>

        {/* Upload Button */}
        <Button
          className="w-full h-14 bg-white/20 hover:bg-white/30 border border-white/30 text-white text-lg"
        >
          <Upload className="w-5 h-5 mr-2" />
          Share Your Knowledge
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Tabs */}
        <div className="flex gap-2 bg-muted p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("browse")}
            className={cn(
              "flex-1 py-2 rounded-lg text-sm font-medium transition-all",
              activeTab === "browse"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground"
            )}
          >
            Browse All
          </button>
          <button
            onClick={() => setActiveTab("my")}
            className={cn(
              "flex-1 py-2 rounded-lg text-sm font-medium transition-all",
              activeTab === "my"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground"
            )}
          >
            My Uploads
          </button>
        </div>

        {/* Upload Options */}
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 rounded-xl border-2 border-dashed border-border bg-card hover:border-edge-green/50 transition-all">
            <Video className="w-8 h-8 mx-auto mb-2 text-edge-green" />
            <span className="text-sm font-medium text-foreground block">Record Video</span>
            <span className="text-xs text-muted-foreground">Share practices</span>
          </button>
          <button className="p-4 rounded-xl border-2 border-dashed border-border bg-card hover:border-edge-blue/50 transition-all">
            <Mic className="w-8 h-8 mx-auto mb-2 text-edge-blue" />
            <span className="text-sm font-medium text-foreground block">Record Audio</span>
            <span className="text-xs text-muted-foreground">Voice tips</span>
          </button>
        </div>

        {/* Storage Info */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <HardDrive className="w-8 h-8 text-edge-blue" />
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-foreground">Local Storage</span>
                <span className="text-muted-foreground">2.4 GB / 5 GB</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[48%] bg-gradient-edge rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Content List */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">
            {activeTab === "browse" ? "Community Shared Knowledge" : "Your Uploads"}
          </h3>
          <div className="space-y-3">
            {(activeTab === "browse" ? communityContent : myContent).map((item, i) => (
              <KnowledgeCard
                key={i}
                title={item.title}
                author={item.author}
                type={item.type}
                duration={item.duration}
                status={item.status}
                storedLocally={item.storedLocally}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default EdgeAICommunity;
