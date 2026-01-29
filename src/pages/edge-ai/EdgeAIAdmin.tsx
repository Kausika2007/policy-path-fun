import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Package,
  BarChart3,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import KnowledgeCard from "@/components/edge-ai/KnowledgeCard";
import { cn } from "@/lib/utils";

const EdgeAIAdmin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "packs">("pending");

  const pendingContent = [
    {
      title: "Traditional rice farming methods",
      author: "Farmer Muthu",
      type: "video" as const,
      duration: "6:30",
      status: "pending" as const,
      storedLocally: true,
    },
    {
      title: "Organic fertilizer preparation",
      author: "Lakshmi",
      type: "audio" as const,
      duration: "4:15",
      status: "pending" as const,
      storedLocally: true,
    },
  ];

  const approvedContent = [
    {
      title: "Water-saving techniques",
      author: "Agricultural Dept",
      type: "video" as const,
      duration: "10:00",
      status: "approved" as const,
      storedLocally: true,
    },
  ];

  const stats = [
    { label: "Total Users", value: "1,247", icon: Users, color: "text-edge-blue" },
    { label: "Pending Review", value: "12", icon: Clock, color: "text-secondary" },
    { label: "Approved", value: "156", icon: CheckCircle, color: "text-edge-green" },
    { label: "Knowledge Packs", value: "8", icon: Package, color: "text-accent" },
  ];

  const knowledgePacks = [
    { name: "School Science Pack", size: "450 MB", items: 42, status: "active" },
    { name: "Farmer Essentials", size: "320 MB", items: 28, status: "active" },
    { name: "College Engineering", size: "680 MB", items: 56, status: "draft" },
    { name: "TNPSC Preparation", size: "520 MB", items: 35, status: "active" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-edge-green/5 via-background to-edge-blue/5 pb-8">
      {/* Header */}
      <div className="bg-gradient-edge text-white p-4 pt-6 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => navigate("/edge-ai")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-xs text-white/70">Manage content & users (Offline)</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <stat.icon className={cn("w-4 h-4", stat.color)} />
                <span className="text-xs text-white/80">{stat.label}</span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Tabs */}
        <div className="flex gap-2 bg-muted p-1 rounded-xl">
          {[
            { id: "pending", label: "Pending", count: 12 },
            { id: "approved", label: "Approved", count: 156 },
            { id: "packs", label: "Packs", count: 8 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex-1 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1",
                activeTab === tab.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              {tab.label}
              <span className={cn(
                "text-xs px-1.5 py-0.5 rounded-full",
                activeTab === tab.id ? "bg-edge-green/20 text-edge-green" : "bg-muted-foreground/20"
              )}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Pending Content */}
        {activeTab === "pending" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Pending Approval</h3>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-1" /> Filter
              </Button>
            </div>
            {pendingContent.map((item, i) => (
              <div key={i} className="space-y-2">
                <KnowledgeCard
                  title={item.title}
                  author={item.author}
                  type={item.type}
                  duration={item.duration}
                  status={item.status}
                  storedLocally={item.storedLocally}
                />
                <div className="flex gap-2 pl-20">
                  <Button size="sm" className="flex-1 bg-edge-green hover:bg-edge-green/90">
                    <CheckCircle className="w-4 h-4 mr-1" /> Approve
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-destructive border-destructive/30">
                    <XCircle className="w-4 h-4 mr-1" /> Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Approved Content */}
        {activeTab === "approved" && (
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Approved Content</h3>
            {approvedContent.map((item, i) => (
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
        )}

        {/* Knowledge Packs */}
        {activeTab === "packs" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Knowledge Packs</h3>
              <Button size="sm" className="bg-gradient-edge">
                + Create Pack
              </Button>
            </div>
            <div className="space-y-3">
              {knowledgePacks.map((pack, i) => (
                <div key={i} className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-edge flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{pack.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {pack.items} items • {pack.size}
                      </p>
                    </div>
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      pack.status === "active" 
                        ? "bg-edge-green/10 text-edge-green"
                        : "bg-muted text-muted-foreground"
                    )}>
                      {pack.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EdgeAIAdmin;
