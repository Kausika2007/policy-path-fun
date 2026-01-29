import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ContentCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  progress?: number;
  onClick?: () => void;
  variant?: "default" | "green" | "blue" | "earth";
}

const ContentCard = ({
  icon,
  title,
  subtitle,
  progress,
  onClick,
  variant = "default",
}: ContentCardProps) => {
  const variantStyles = {
    default: "from-primary/10 to-accent/10 border-primary/20",
    green: "from-edge-green/10 to-edge-green-light/10 border-edge-green/20",
    blue: "from-edge-blue/10 to-edge-blue-light/10 border-edge-blue/20",
    earth: "from-edge-earth/10 to-edge-earth-light/10 border-edge-earth/20",
  };

  const iconBgStyles = {
    default: "bg-gradient-hero",
    green: "bg-gradient-edge",
    blue: "bg-edge-blue",
    earth: "bg-gradient-earth",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-xl border bg-gradient-to-br transition-all duration-200",
        "hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] text-left",
        variantStyles[variant]
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center text-xl text-white shrink-0",
            iconBgStyles[variant]
          )}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground truncate">{title}</h4>
          {subtitle && (
            <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
          )}
          {typeof progress === "number" && (
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-edge rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
      </div>
    </button>
  );
};

export default ContentCard;
