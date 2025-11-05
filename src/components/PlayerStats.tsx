import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PlayerStatsProps {
  position: number;
  lastDice: number | null;
}

const PlayerStats = ({ position, lastDice }: PlayerStatsProps) => {
  return (
    <Card className="p-6 bg-card/90 backdrop-blur-sm border-2 shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Player Status</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-medium">Position:</span>
          <Badge variant="default" className="text-lg px-4 py-1">
            {position}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Last Roll:</span>
          <Badge variant="secondary" className="text-lg px-4 py-1">
            {lastDice || "-"}
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default PlayerStats;
