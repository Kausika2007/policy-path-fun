import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RoleCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  selected?: boolean;
  onClick: () => void;
}

const RoleCard = ({ icon, title, description, selected, onClick }: RoleCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left",
        "hover:scale-[1.02] hover:shadow-edge active:scale-[0.98]",
        selected
          ? "border-edge-green bg-gradient-to-br from-edge-green/10 to-edge-blue/10 shadow-edge"
          : "border-border bg-card hover:border-edge-green/50"
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-16 h-16 rounded-xl flex items-center justify-center text-3xl",
            selected ? "bg-gradient-edge text-white" : "bg-muted"
          )}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default RoleCard;
