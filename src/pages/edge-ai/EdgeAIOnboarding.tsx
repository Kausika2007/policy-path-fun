import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LanguageSelector from "@/components/edge-ai/LanguageSelector";
import OfflineIndicator from "@/components/edge-ai/OfflineIndicator";
import { useEdgeAI } from "@/contexts/EdgeAIContext";
import { cn } from "@/lib/utils";

const EdgeAIOnboarding = () => {
  const navigate = useNavigate();
  const { user, setUser } = useEdgeAI();
  const [step, setStep] = useState(1);
  const [name, setName] = useState(user.name);
  const [language, setLanguage] = useState(user.language);
  const [level, setLevel] = useState<"beginner" | "intermediate">("beginner");

  const handleComplete = () => {
    setUser({
      name,
      language,
      level,
      isOnboarded: true,
    });
    navigate("/edge-ai");
  };

  const roleLabel = {
    school: "School Student",
    college: "College Student",
    farmer: "Farmer",
  }[user.role || ""] || "User";

  return (
    <div className="min-h-screen bg-gradient-to-br from-edge-green/5 via-background to-edge-blue/5 p-4">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6 pt-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => (step > 1 ? setStep(step - 1) : navigate("/edge-ai/welcome"))}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={cn(
                "w-8 h-2 rounded-full transition-all",
                s <= step ? "bg-edge-green" : "bg-muted"
              )}
            />
          ))}
        </div>
        <OfflineIndicator />
      </div>

      <div className="max-w-md mx-auto">
        {/* Step 1: Name */}
        {step === 1 && (
          <div className="animate-slide-up">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-edge flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-center text-foreground mb-2">
              What's your name?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Hello {roleLabel}! Let's set up your profile.
            </p>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="h-14 text-lg"
              />
            </div>
            <Button
              onClick={() => setStep(2)}
              disabled={!name.trim()}
              className="w-full mt-8 h-14 text-lg bg-gradient-edge hover:opacity-90"
            >
              Next <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 2: Language */}
        {step === 2 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl font-bold text-center text-foreground mb-2">
              Choose Language
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Select your preferred language for AI assistance
            </p>
            <LanguageSelector
              selectedLanguage={language}
              onSelect={setLanguage}
            />
            <Button
              onClick={() => setStep(3)}
              className="w-full mt-8 h-14 text-lg bg-gradient-edge hover:opacity-90"
            >
              Next <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 3: Level (for students) or Topics (for farmers) */}
        {step === 3 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl font-bold text-center text-foreground mb-2">
              {user.role === "farmer" ? "What interests you?" : "Your Learning Level"}
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {user.role === "farmer"
                ? "We'll customize guidance for you"
                : "This helps us adjust explanations"}
            </p>

            {user.role === "farmer" ? (
              <div className="grid grid-cols-2 gap-3">
                {["Crops", "Soil Health", "Water", "Organic"].map((topic) => (
                  <button
                    key={topic}
                    className="p-4 rounded-xl border-2 border-border bg-card hover:border-edge-green/50 transition-all text-center"
                  >
                    <span className="text-2xl mb-2 block">
                      {topic === "Crops" && "🌾"}
                      {topic === "Soil Health" && "🌍"}
                      {topic === "Water" && "💧"}
                      {topic === "Organic" && "🌿"}
                    </span>
                    <span className="font-medium text-foreground">{topic}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {[
                  { id: "beginner", label: "Beginner", desc: "I'm just starting" },
                  { id: "intermediate", label: "Intermediate", desc: "I know the basics" },
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLevel(l.id as any)}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 transition-all text-left",
                      level === l.id
                        ? "border-edge-green bg-edge-green/10"
                        : "border-border bg-card hover:border-edge-green/50"
                    )}
                  >
                    <span className="font-semibold text-foreground">{l.label}</span>
                    <span className="text-sm text-muted-foreground block">{l.desc}</span>
                  </button>
                ))}
              </div>
            )}

            <Button
              onClick={handleComplete}
              className="w-full mt-8 h-14 text-lg bg-gradient-edge hover:opacity-90"
            >
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EdgeAIOnboarding;
