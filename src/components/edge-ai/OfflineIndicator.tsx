import { Wifi, WifiOff, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface OfflineIndicatorProps {
  className?: string;
}

const OfflineIndicator = ({ className }: OfflineIndicatorProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full bg-edge-green/10 border border-edge-green/30",
        className
      )}
    >
      <div className="relative">
        <Cpu className="w-4 h-4 text-edge-green" />
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-edge-green rounded-full animate-pulse" />
      </div>
      <span className="text-xs font-medium text-edge-green">Edge AI Active</span>
      <WifiOff className="w-3 h-3 text-muted-foreground" />
    </div>
  );
};

export default OfflineIndicator;
