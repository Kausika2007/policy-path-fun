import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, XCircle, Trophy } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import moduleContent from '@/data/moduleContent';
import { toast } from 'sonner';
import { soundEffects } from '@/utils/soundEffects';

const ModuleSequentialQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { modules, completeSubmodule, updateProgress, earnBadge, unlockModule, progress } = useGame();
  const moduleId = parseInt(id || '1');
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const module = modules.find(m => m.id === moduleId);
  const content = moduleContent.find(m => m.id === moduleId);
  const questions = content?.quizQuestions || [];

  if (!module || !content) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Module not found</div>;
  }

  const handleAnswer = (index: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = index;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    soundEffects.playButtonClick();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    soundEffects.playButtonClick();
    setShowResults(true);
  };

  const handleComplete = () => {
    const score = selectedAnswers.filter((answer, index) => answer === questions[index].correct).length;
    const earnedPoints = Math.round((score / questions.length) * (module.points - 50));
    updateProgress(earnedPoints, moduleId);
    completeSubmodule(moduleId, 3);

    // Award badge if applicable
    const badgeMap: Record<number, string> = {
      1: 'beginner',
      2: 'life-expert',
      3: 'health-pro',
      4: 'vehicle-master',
      5: 'travel-guru'
    };
    
    const badgeId = badgeMap[moduleId];
    if (badgeId) {
      const badge = progress.badges.find(b => b.id === badgeId);
      if (badge) {
        earnBadge(badge);
      }
    }

    // Unlock all modules after completing Module 1
    if (moduleId === 1 && module.submodules.every(s => s.completed || s.id === 3)) {
      for (let i = 2; i <= 10; i++) {
        unlockModule(i);
      }
    }

    soundEffects.playCelebrationSound();
    toast.success('Module Complete! 🎉', {
      description: `You earned ${earnedPoints} points!`,
    });
    navigate('/modules');
  };

  if (showResults) {
    const correctCount = selectedAnswers.filter((answer, index) => answer === questions[index].correct).length;
    const percentage = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center animate-bounce-in mb-8">
            <div className="text-8xl mb-6">
              {percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐' : '📚'}
            </div>
            <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
            <p className="text-3xl font-bold text-primary mb-2">
              {correctCount}/{questions.length}
            </p>
            <p className="text-xl text-muted-foreground">
              {percentage}% Score
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="text-primary" />
              Review Your Answers
            </h2>
            <div className="space-y-6">
              {questions.map((q, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === q.correct;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 ${
                      isCorrect
                        ? 'border-success bg-success/10'
                        : 'border-destructive bg-destructive/10'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg flex-1">
                        {index + 1}. {q.question}
                      </h3>
                      {isCorrect ? (
                        <CheckCircle className="text-success flex-shrink-0" size={24} />
                      ) : (
                        <XCircle className="text-destructive flex-shrink-0" size={24} />
                      )}
                    </div>
                    
                    {!isCorrect && (
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-semibold text-destructive">Your answer: </span>
                          {q.options[userAnswer]}
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold text-success">Correct answer: </span>
                          {q.options[q.correct]}
                        </p>
                      </div>
                    )}
                    
                    <p className="text-sm text-muted-foreground mt-3 p-3 bg-background rounded-lg">
                      <span className="font-semibold">Explanation: </span>
                      {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Button onClick={handleComplete} size="lg" className="w-full">
            Complete Module & Return
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/modules')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Modules
        </Button>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">{module.title} - Final Quiz</h1>
            <span className="text-muted-foreground">
              Question {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-gradient-primary h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary hover:bg-primary/5'
                }`}
              >
                <span className="font-medium">{option}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            {currentQuestion < questions.length - 1 ? (
              <Button
                onClick={handleNext}
                size="lg"
                className="w-full"
                disabled={selectedAnswers[currentQuestion] === undefined}
              >
                Next Question
              </Button>
            ) : (
              <Button
                onClick={handleFinish}
                size="lg"
                className="w-full"
                disabled={selectedAnswers[currentQuestion] === undefined}
              >
                Finish Quiz
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleSequentialQuiz;
