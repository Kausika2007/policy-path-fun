import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      <div className="flex justify-between items-center text-sm font-medium">
        <span className="text-muted-foreground">
          Card {current} of {total}
        </span>
        <span className="text-primary">
          {Math.round(percentage)}% Complete
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

export default ProgressBar;
