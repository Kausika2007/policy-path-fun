import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import moduleContent from '@/data/moduleContent';
import { toast } from 'sonner';
import { soundEffects } from '@/utils/soundEffects';

const ModuleMCQ = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { modules, completeSubmodule, updateProgress } = useGame();
  const moduleId = parseInt(id || '1');
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const module = modules.find(m => m.id === moduleId);
  const content = moduleContent.find(m => m.id === moduleId);
  const questions = content?.mcqQuestions || [];

  if (!module || !content) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Module not found</div>;
  }

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    const isCorrect = index === questions[currentQuestion].correct;
    setResults([...results, isCorrect]);

    if (isCorrect) {
      soundEffects.playPointsSound();
      toast.success('Correct! 🎉', {
        description: questions[currentQuestion].explanation,
      });
    } else {
      toast.error('Incorrect', {
        description: questions[currentQuestion].explanation,
      });
    }
  };

  const handleContinue = () => {
    soundEffects.playButtonClick();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setShowSummary(true);
    }
  };

  const handleComplete = () => {
    const score = results.filter(r => r).length;
    const earnedPoints = Math.round((score / questions.length) * 50);
    updateProgress(earnedPoints, moduleId);
    completeSubmodule(moduleId, 2);
    soundEffects.playCelebrationSound();
    toast.success('MCQ Practice completed! 🎉', {
      description: `You scored ${score}/${questions.length}. Earned ${earnedPoints} points!`,
    });
    navigate('/modules');
  };

  if (showSummary) {
    const correctCount = results.filter(r => r).length;
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="text-center animate-bounce-in">
            <div className="text-8xl mb-6">
              {correctCount >= 8 ? '🏆' : correctCount >= 5 ? '👍' : '📚'}
            </div>
            <h1 className="text-4xl font-bold mb-4">Practice Complete!</h1>
            <p className="text-2xl mb-8">
              Score: {correctCount}/{questions.length}
            </p>

            <div className="bg-card rounded-2xl p-6 mb-8 text-left">
              <h2 className="text-2xl font-bold mb-4">Review Your Answers</h2>
              <div className="space-y-3">
                {questions.map((q, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 ${
                      results[index]
                        ? 'border-success bg-success/10'
                        : 'border-destructive bg-destructive/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Question {index + 1}</span>
                      {results[index] ? (
                        <CheckCircle className="text-success" />
                      ) : (
                        <XCircle className="text-destructive" />
                      )}
                    </div>
                    {!results[index] && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Correct answer: {q.options[q.correct]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={handleComplete} size="lg" className="w-full">
              Complete & Return to Modules
            </Button>
          </div>
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
            <h1 className="text-2xl font-bold">{module.title} - Practice</h1>
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
          <div className="text-6xl text-center mb-6 animate-bounce-in">
            {questions[currentQuestion].emoji}
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showFeedback && handleAnswer(index)}
                disabled={showFeedback}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  !showFeedback
                    ? 'border-border hover:border-primary hover:bg-primary/5'
                    : selectedAnswer === index
                    ? index === questions[currentQuestion].correct
                      ? 'border-success bg-success/10'
                      : 'border-destructive bg-destructive/10'
                    : 'border-border opacity-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showFeedback && selectedAnswer === index && (
                    index === questions[currentQuestion].correct ? (
                      <CheckCircle className="text-success" />
                    ) : (
                      <XCircle className="text-destructive" />
                    )
                  )}
                </div>
              </button>
            ))}
          </div>

          {showFeedback && selectedAnswer === questions[currentQuestion].correct && (
            <Button onClick={handleContinue} size="lg" className="w-full mt-6">
              Continue
            </Button>
          )}

          {showFeedback && selectedAnswer !== questions[currentQuestion].correct && (
            <Button onClick={handleContinue} size="lg" variant="secondary" className="w-full mt-6">
              Next Question
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleMCQ;
