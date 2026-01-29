import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Building2, Leaf, ArrowRight, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import RoleCard from "@/components/edge-ai/RoleCard";
import OfflineIndicator from "@/components/edge-ai/OfflineIndicator";
import { useEdgeAI } from "@/contexts/EdgeAIContext";

const EdgeAIWelcome = () => {
  const navigate = useNavigate();
  const { setUser } = useEdgeAI();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "school",
      icon: <GraduationCap className="w-8 h-8" />,
      title: "School Student",
      description: "Learn Science, Maths & more with AI help",
    },
    {
      id: "college",
      icon: <Building2 className="w-8 h-8" />,
      title: "College Student",
      description: "Engineering, Arts, Medical support",
    },
    {
      id: "farmer",
      icon: <Leaf className="w-8 h-8" />,
      title: "Farmer / Rural",
      description: "Crop care, soil health & farming tips",
    },
  ];

  const handleContinue = () => {
    if (selectedRole) {
      setUser({ role: selectedRole as any });
      navigate("/edge-ai/onboarding");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-edge-green/5 via-background to-edge-blue/5 p-4 pb-8">
      {/* Header */}
      <div className="text-center pt-8 pb-6">
        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-edge flex items-center justify-center shadow-edge">
          <Cpu className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Edge AI Learning
        </h1>
        <p className="text-muted-foreground text-lg">
          Offline AI-powered education for everyone
        </p>
        <OfflineIndicator className="mx-auto mt-4" />
      </div>

      {/* Role Selection */}
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
          Who are you?
        </h2>
        <div className="space-y-4">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              icon={role.icon}
              title={role.title}
              description={role.description}
              selected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>

        <Button
          onClick={handleContinue}
          disabled={!selectedRole}
          className="w-full mt-8 h-14 text-lg bg-gradient-edge hover:opacity-90 transition-opacity"
        >
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-center text-sm text-muted-foreground mt-6">
          No internet required • Works completely offline
        </p>
      </div>
    </div>
  );
};

export default EdgeAIWelcome;
