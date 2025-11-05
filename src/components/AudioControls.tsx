import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Music } from "lucide-react";

interface AudioControlsProps {
  isMusicEnabled: boolean;
  isSoundEnabled: boolean;
  onToggleMusic: () => void;
  onToggleSound: () => void;
}

const AudioControls = ({
  isMusicEnabled,
  isSoundEnabled,
  onToggleMusic,
  onToggleSound,
}: AudioControlsProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onToggleMusic}
        className="bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30"
      >
        {isMusicEnabled ? (
          <Music className="h-5 w-5" />
        ) : (
          <Music className="h-5 w-5 opacity-50" />
        )}
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onToggleSound}
        className="bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30"
      >
        {isSoundEnabled ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default AudioControls;
