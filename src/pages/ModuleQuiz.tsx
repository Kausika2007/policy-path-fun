import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGame } from '@/contexts/GameContext';
import { CheckCircle, XCircle, Trophy } from 'lucide-react';
import { toast } from 'sonner';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  image: string;
}

const moduleQuestions: Record<number, Question[]> = {
  1: [
    {
      question: 'What is insurance?',
      options: [
        'A savings account',
        'A contract that protects against financial loss',
        'A type of investment',
        'A government program'
      ],
      correct: 1,
      explanation: 'Insurance is a contract where you pay premiums to protect against potential financial losses.',
      image: '🛡️'
    },
    {
      question: 'What is a premium?',
      options: [
        'The amount you receive when you claim',
        'The amount you pay for insurance coverage',
        'A bonus from the insurance company',
        'The insurance company\'s profit'
      ],
      correct: 1,
      explanation: 'A premium is the regular payment you make to maintain your insurance coverage.',
      image: '💰'
    },
    {
      question: 'What is a deductible?',
      options: [
        'The insurance company\'s fee',
        'The amount you must pay before insurance covers the rest',
        'A type of insurance policy',
        'The maximum coverage amount'
      ],
      correct: 1,
      explanation: 'A deductible is the amount you pay out-of-pocket before your insurance starts covering costs.',
      image: '📊'
    }
  ],
  2: [
    {
      question: 'What does life insurance primarily provide?',
      options: [
        'Investment returns',
        'Financial protection for beneficiaries after death',
        'Healthcare coverage',
        'Property protection'
      ],
      correct: 1,
      explanation: 'Life insurance provides financial support to your beneficiaries when you pass away.',
      image: '❤️'
    },
    {
      question: 'Who receives the life insurance payout?',
      options: [
        'The insurance company',
        'The government',
        'The designated beneficiaries',
        'The insured person'
      ],
      correct: 2,
      explanation: 'Beneficiaries are the people you designate to receive the insurance payout.',
      image: '👨‍👩‍👧‍👦'
    }
  ],
  3: [
    {
      question: 'What does health insurance cover?',
      options: [
        'Only hospital stays',
        'Medical expenses and healthcare costs',
        'Life events',
        'Vehicle damage'
      ],
      correct: 1,
      explanation: 'Health insurance helps cover medical expenses including doctor visits, medications, and procedures.',
      image: '🏥'
    },
    {
      question: 'What is a co-payment?',
      options: [
        'The total cost of treatment',
        'A fixed amount you pay for specific services',
        'The insurance premium',
        'The annual deductible'
      ],
      correct: 1,
      explanation: 'A co-payment is a fixed amount you pay for healthcare services, with insurance covering the rest.',
      image: '💊'
    }
  ],
  4: [
    {
      question: 'What does comprehensive vehicle insurance cover?',
      options: [
        'Only collision damage',
        'Theft, natural disasters, and non-collision damage',
        'Only engine repairs',
        'Tire replacements only'
      ],
      correct: 1,
      explanation: 'Comprehensive coverage protects against theft, weather, vandalism, and other non-collision events.',
      image: '🚗'
    },
    {
      question: 'Is vehicle insurance mandatory?',
      options: [
        'No, it\'s optional everywhere',
        'Yes, in most places at least liability coverage is required',
        'Only for new vehicles',
        'Only for luxury cars'
      ],
      correct: 1,
      explanation: 'Most jurisdictions require at least liability insurance to cover damage you cause to others.',
      image: '⚖️'
    }
  ],
  5: [
    {
      question: 'What does travel insurance typically cover?',
      options: [
        'Only flight tickets',
        'Trip cancellations, medical emergencies, and lost luggage',
        'Hotel upgrades',
        'Tourist activities only'
      ],
      correct: 1,
      explanation: 'Travel insurance protects against various travel-related risks including cancellations and emergencies.',
      image: '✈️'
    },
    {
      question: 'When should you purchase travel insurance?',
      options: [
        'After returning from the trip',
        'As soon as you book your trip',
        'Only for international travel',
        'Never, it\'s not necessary'
      ],
      correct: 1,
      explanation: 'Buying travel insurance early ensures maximum coverage including cancellation protection.',
      image: '📅'
    }
  ]
};

const ModuleQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { modules, updateProgress, earnBadge, unlockModule, progress } = useGame();
  const moduleId = parseInt(id || '1');
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const module = modules.find(m => m.id === moduleId);
  const questions = moduleQuestions[moduleId] || [];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    const isCorrect = index === questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
      toast.success('Correct! 🎉', {
        description: questions[currentQuestion].explanation,
      });
    } else {
      toast.error('Not quite right', {
        description: questions[currentQuestion].explanation,
      });
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        handleComplete();
      }
    }, 2000);
  };

  const handleComplete = () => {
    setCompleted(true);
    const earnedPoints = Math.round((score / questions.length) * (module?.points || 100));
    updateProgress(earnedPoints, moduleId);

    // Earn module badge
    const badgeMap: Record<number, string> = {
      1: 'beginner',
      2: 'life-expert',
      3: 'health-pro',
      4: 'vehicle-master',
      5: 'travel-guru'
    };
    
    const badgeId = badgeMap[moduleId];
    const badge = progress.badges.find(b => b.id === badgeId);
    if (badge) {
      earnBadge(badge);
    }

    // Unlock all modules after completing module 1
    if (moduleId === 1) {
      [2, 3, 4, 5].forEach(id => unlockModule(id));
    }

    toast.success('Module Complete! 🎉', {
      description: `You earned ${earnedPoints} points!`,
    });
  };

  if (!module) {
    return <div>Module not found</div>;
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md animate-bounce-in">
          <div className="text-8xl mb-6 animate-celebrate">🏆</div>
          <h1 className="text-4xl font-bold mb-4">Module Complete!</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Score: {score}/{questions.length}
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            You earned {Math.round((score / questions.length) * (module.points))} points!
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate('/modules')} size="lg">
              Back to Modules
            </Button>
            <Button onClick={() => navigate('/badges')} variant="secondary" size="lg">
              View Badges
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">{module.title}</h1>
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
            {questions[currentQuestion].image}
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  selectedAnswer === null
                    ? 'border-border hover:border-primary hover:bg-primary/5'
                    : selectedAnswer === index
                    ? index === questions[currentQuestion].correct
                      ? 'border-success bg-success/10'
                      : 'border-destructive bg-destructive/10 animate-shake'
                    : index === questions[currentQuestion].correct
                    ? 'border-success bg-success/10'
                    : 'border-border opacity-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {selectedAnswer !== null && (
                    index === questions[currentQuestion].correct ? (
                      <CheckCircle className="text-success" />
                    ) : selectedAnswer === index ? (
                      <XCircle className="text-destructive" />
                    ) : null
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleQuiz;
