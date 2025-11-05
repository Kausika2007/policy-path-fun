import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface InsuranceMessageProps {
  message: string;
  type: "ladder" | "snake" | "win" | null;
}

const InsuranceMessage = ({ message, type }: InsuranceMessageProps) => {
  if (!message || !type) return null;

  const getBadgeVariant = () => {
    switch (type) {
      case "ladder":
        return "default";
      case "snake":
        return "destructive";
      case "win":
        return "default";
      default:
        return "secondary";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "ladder":
        return "🪜";
      case "snake":
        return "🐍";
      case "win":
        return "🏆";
      default:
        return "ℹ️";
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 shadow-lg animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="text-4xl">{getIcon()}</div>
        <div className="flex-1">
          <Badge variant={getBadgeVariant()} className="mb-2">
            {type === "ladder" ? "Insurance Benefit!" : type === "snake" ? "Insurance Risk!" : "Victory!"}
          </Badge>
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
      </div>
    </Card>
  );
};

export default InsuranceMessage;
