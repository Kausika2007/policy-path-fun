import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./contexts/GameContext";
import { EdgeAIProvider } from "./contexts/EdgeAIContext";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import ModuleQuiz from "./pages/ModuleQuiz";
import ModuleTeaching from "./pages/ModuleTeaching";
import ModuleMCQ from "./pages/ModuleMCQ";
import ModuleSequentialQuiz from "./pages/ModuleSequentialQuiz";
import Badges from "./pages/Badges";
import Leaderboard from "./pages/Leaderboard";
import Games from "./pages/Games";
import SpinWheel from "./pages/SpinWheel";
import Flashcards from "./pages/Flashcards";
import Roadmap from "./pages/Roadmap";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

// Edge AI Pages
import EdgeAIWelcome from "./pages/edge-ai/EdgeAIWelcome";
import EdgeAIOnboarding from "./pages/edge-ai/EdgeAIOnboarding";
import EdgeAIDashboard from "./pages/edge-ai/EdgeAIDashboard";
import EdgeAIChat from "./pages/edge-ai/EdgeAIChat";
import EdgeAIContent from "./pages/edge-ai/EdgeAIContent";
import EdgeAICommunity from "./pages/edge-ai/EdgeAICommunity";
import EdgeAISettings from "./pages/edge-ai/EdgeAISettings";
import EdgeAIAdmin from "./pages/edge-ai/EdgeAIAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GameProvider>
      <EdgeAIProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/module/:id" element={<ModuleQuiz />} />
              <Route path="/module/:id/teaching" element={<ModuleTeaching />} />
              <Route path="/module/:id/mcq" element={<ModuleMCQ />} />
              <Route path="/module/:id/quiz" element={<ModuleSequentialQuiz />} />
              <Route path="/badges" element={<Badges />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/games" element={<Games />} />
              <Route path="/spin-wheel" element={<SpinWheel />} />
              <Route path="/flashcards" element={<Flashcards />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Edge AI Platform Routes */}
              <Route path="/edge-ai/welcome" element={<EdgeAIWelcome />} />
              <Route path="/edge-ai/onboarding" element={<EdgeAIOnboarding />} />
              <Route path="/edge-ai" element={<EdgeAIDashboard />} />
              <Route path="/edge-ai/chat" element={<EdgeAIChat />} />
              <Route path="/edge-ai/content" element={<EdgeAIContent />} />
              <Route path="/edge-ai/community" element={<EdgeAICommunity />} />
              <Route path="/edge-ai/settings" element={<EdgeAISettings />} />
              <Route path="/edge-ai/admin" element={<EdgeAIAdmin />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </EdgeAIProvider>
    </GameProvider>
  </QueryClientProvider>
);

export default App;
