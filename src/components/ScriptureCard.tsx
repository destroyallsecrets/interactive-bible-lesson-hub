
import React, { useState } from 'react';
import { Book, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScriptureCardProps {
  reference: string;
  text: string;
  version?: string;
}

const ScriptureCard: React.FC<ScriptureCardProps> = ({ 
  reference, 
  text, 
  version = "ESV" 
}) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(`${reference} (${version}): ${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden bg-white rounded-xl shadow-sm border border-bible-sand/30 p-6 md:p-8 transition-all duration-300 hover:shadow-md">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-bible-parchment/20 rounded-full transition-all duration-500 group-hover:scale-150" />
      
      <div className="flex items-center gap-2 mb-4">
        <Book size={18} className="text-bible-gold" />
        <span className="text-sm font-medium text-bible-navy/70">{version}</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-serif mb-4 text-bible-navy relative z-10">
        {reference}
      </h3>
      
      <div className="prose prose-bible mb-4 relative z-10">
        <p className="text-bible-navy/80 leading-relaxed">{text}</p>
      </div>
      
      <div className="flex justify-end mt-4">
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all",
            copied 
              ? "bg-bible-sage/20 text-bible-sage" 
              : "bg-bible-navy/5 text-bible-navy/70 hover:bg-bible-navy/10"
          )}
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ScriptureCard;
