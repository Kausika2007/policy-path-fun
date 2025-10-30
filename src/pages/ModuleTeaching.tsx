import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import moduleContent from '@/data/moduleContent';
import { toast } from 'sonner';

const ModuleTeaching = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { modules, completeSubmodule } = useGame();
  const moduleId = parseInt(id || '1');
  
  const module = modules.find(m => m.id === moduleId);
  const content = moduleContent.find(m => m.id === moduleId);

  if (!module || !content) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Module not found</div>;
  }

  const handleComplete = () => {
    completeSubmodule(moduleId, 1);
    toast.success('Teaching module completed! 🎉', {
      description: 'Proceed to practice MCQs next.',
    });
    navigate(`/modules`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/modules')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Modules
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{content.icon}</span>
            <div>
              <h1 className="text-4xl font-bold">{content.title}</h1>
              <p className="text-muted-foreground text-lg mt-1">Submodule 1: Teaching Content</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {content.teaching.sections.map((section, index) => (
            <div
              key={index}
              className={`${section.colorTheme} rounded-2xl p-8 border-2 border-border shadow-card animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {section.image && (
                  <span className="text-5xl flex-shrink-0">{section.image}</span>
                )}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                  <p className="text-foreground/90 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card rounded-2xl p-6 border-2 border-primary">
          <h3 className="text-xl font-bold mb-3">📚 Key Takeaways</h3>
          <p className="text-muted-foreground mb-4">
            You've learned the fundamental concepts of {content.title.toLowerCase()}. 
            Next, test your knowledge with practice questions!
          </p>
          <Button onClick={handleComplete} size="lg" className="w-full">
            Complete & Continue to Practice
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModuleTeaching;
