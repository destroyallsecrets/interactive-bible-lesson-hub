
import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Question {
  id: number;
  text: string;
  note?: string;
}

const questions: Question[] = [
  { 
    id: 1, 
    text: "What made Moses turn aside to see the burning bush? What 'burning bushes' might God be using to get your attention?",
    note: "Consider how God meets us in our everyday experiences, just as He met Moses while he was tending sheep."
  },
  { 
    id: 2, 
    text: "How did God identify Himself to Moses? Why is this significant?",
    note: "God identified Himself as 'the God of Abraham, the God of Isaac, and the God of Jacob' - connecting to His covenant promises."
  },
  { 
    id: 3, 
    text: "What was Moses' initial response to God's call? How do you relate to his response?",
    note: "Moses responded with insecurity and doubt, asking 'Who am I that I should go?'"
  },
  { 
    id: 4, 
    text: "How did God reassure Moses that he was capable of fulfilling this calling?",
    note: "God promised His presence: 'I will be with you.'"
  },
  { 
    id: 5, 
    text: "What does this passage teach us about how God responds to the suffering of His people?",
    note: "God said, 'I have surely seen the affliction of my people... and have heard their cry.'"
  },
];

const DiscussionQuestions: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleQuestion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-serif mb-6 relative inline-block text-bible-navy">
        Discussion Questions
        <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-bible-gold"></span>
      </h3>
      
      <div className="space-y-4">
        {questions.map((question) => (
          <div 
            key={question.id}
            className="bg-white rounded-lg border border-bible-sand/30 overflow-hidden transition-all duration-300 hover:border-bible-sand/50"
          >
            <button
              onClick={() => toggleQuestion(question.id)}
              className="w-full flex items-center justify-between p-4 md:p-5 text-left"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bible-navy/5 flex items-center justify-center mt-0.5">
                  <span className="text-sm font-medium text-bible-navy/70">{question.id}</span>
                </div>
                <h4 className="text-lg font-medium text-bible-navy">{question.text}</h4>
              </div>
              
              <ChevronDown 
                size={20} 
                className={cn(
                  "text-bible-navy/50 transition-transform duration-300",
                  expandedId === question.id ? "transform rotate-180" : ""
                )} 
              />
            </button>
            
            {question.note && expandedId === question.id && (
              <div className="px-4 pb-4 md:px-5 md:pb-5 animate-slide-up">
                <div className="p-3 md:p-4 rounded-lg bg-bible-navy/5 flex gap-3">
                  <MessageSquare size={18} className="text-bible-navy/60 flex-shrink-0 mt-0.5" />
                  <p className="text-bible-navy/80 text-sm">{question.note}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionQuestions;
