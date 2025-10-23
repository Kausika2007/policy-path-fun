import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./contexts/GameContext";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import ModuleQuiz from "./pages/ModuleQuiz";
import Badges from "./pages/Badges";
import Leaderboard from "./pages/Leaderboard";
import Games from "./pages/Games";
import SpinWheel from "./pages/SpinWheel";
import Flashcards from "./pages/Flashcards";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GameProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/module/:id" element={<ModuleQuiz />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/games" element={<Games />} />
            <Route path="/spin-wheel" element={<SpinWheel />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </GameProvider>
  </QueryClientProvider>
);

export default App;
