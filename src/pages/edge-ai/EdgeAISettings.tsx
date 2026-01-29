import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Globe, Bell, HardDrive, LogOut, ChevronRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import BottomNav from "@/components/edge-ai/BottomNav";
import OfflineIndicator from "@/components/edge-ai/OfflineIndicator";
import { useEdgeAI } from "@/contexts/EdgeAIContext";
import { cn } from "@/lib/utils";

const EdgeAISettings = () => {
  const navigate = useNavigate();
  const { user, setUser } = useEdgeAI();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const roleLabels = {
    school: "School Student",
    college: "College Student",
    farmer: "Farmer",
  };

  const languages = {
    en: "English",
    ta: "Tamil (தமிழ்)",
    hi: "Hindi (हिन्दी)",
    te: "Telugu (తెలుగు)",
    kn: "Kannada (ಕನ್ನಡ)",
    ml: "Malayalam (മലയാളം)",
  };

  const handleLogout = () => {
    setUser({
      name: "",
      role: null,
      language: "en",
      level: "beginner",
      isOnboarded: false,
    });
    navigate("/edge-ai/welcome");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-edge-green/5 via-background to-edge-blue/5 pb-24">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 pt-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/edge-ai")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Settings</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Section */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-edge flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-lg">{user.name || "User"}</h3>
              <p className="text-sm text-muted-foreground">
                {roleLabels[user.role as keyof typeof roleLabels] || "Not set"}
              </p>
              <OfflineIndicator className="mt-2 w-fit" />
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Settings List */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {/* Language */}
          <button className="w-full p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors border-b border-border">
            <div className="w-10 h-10 rounded-lg bg-edge-blue/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-edge-blue" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-foreground">Language</p>
              <p className="text-sm text-muted-foreground">
                {languages[user.language as keyof typeof languages] || "English"}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Dark Mode */}
          <div className="p-4 flex items-center gap-4 border-b border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              {darkMode ? <Moon className="w-5 h-5 text-accent" /> : <Sun className="w-5 h-5 text-accent" />}
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">Dark Mode</p>
              <p className="text-sm text-muted-foreground">Easier on the eyes</p>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>

          {/* Notifications */}
          <div className="p-4 flex items-center gap-4 border-b border-border">
            <div className="w-10 h-10 rounded-lg bg-edge-green/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-edge-green" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">Notifications</p>
              <p className="text-sm text-muted-foreground">Learning reminders</p>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>

          {/* Storage */}
          <button className="w-full p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-edge-earth/10 flex items-center justify-center">
              <HardDrive className="w-5 h-5 text-edge-earth" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-foreground">Storage</p>
              <p className="text-sm text-muted-foreground">2.4 GB used of 5 GB</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* About Section */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <h4 className="font-medium text-foreground mb-2">About Edge AI</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Pure offline AI learning platform for schools, colleges, and farmers. 
            No internet required.
          </p>
          <p className="text-xs text-muted-foreground">Version 1.0.0</p>
        </div>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full h-12 text-destructive hover:bg-destructive/10 border-destructive/30"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Log Out
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default EdgeAISettings;
