import { Play, Clock, CheckCircle, XCircle, HardDrive } from "lucide-react";
import { cn } from "@/lib/utils";

interface KnowledgeCardProps {
  title: string;
  author: string;
  type: "video" | "audio";
  duration?: string;
  status?: "pending" | "approved" | "rejected";
  storedLocally?: boolean;
  onPlay?: () => void;
}

const KnowledgeCard = ({
  title,
  author,
  type,
  duration,
  status,
  storedLocally,
  onPlay,
}: KnowledgeCardProps) => {
  const statusConfig = {
    pending: { icon: Clock, color: "text-secondary", bg: "bg-secondary/10" },
    approved: { icon: CheckCircle, color: "text-edge-green", bg: "bg-edge-green/10" },
    rejected: { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" },
  };

  const StatusIcon = status ? statusConfig[status].icon : null;

  return (
    <div className="bg-card border border-border rounded-xl p-4 transition-all hover:shadow-lg">
      <div className="flex items-start gap-4">
        <button
          onClick={onPlay}
          className="w-16 h-16 rounded-xl bg-gradient-earth flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
        >
          <Play className="w-8 h-8 text-white" />
        </button>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground truncate">{title}</h4>
          <p className="text-sm text-muted-foreground">by {author}</p>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize">
              {type}
            </span>
            {duration && (
              <span className="text-xs text-muted-foreground">{duration}</span>
            )}
            {storedLocally && (
              <span className="text-xs flex items-center gap-1 text-edge-blue">
                <HardDrive className="w-3 h-3" />
                Stored
              </span>
            )}
            {StatusIcon && status && (
              <span
                className={cn(
                  "text-xs flex items-center gap-1 px-2 py-0.5 rounded-full capitalize",
                  statusConfig[status].color,
                  statusConfig[status].bg
                )}
              >
                <StatusIcon className="w-3 h-3" />
                {status}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCard;
