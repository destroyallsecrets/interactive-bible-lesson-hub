
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { getLatestLesson } from '../data/lessons';

const Hero: React.FC = () => {
  const latestLesson = getLatestLesson();
  
  const scrollToContent = () => {
    const contentElement = document.getElementById('lesson-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bible-parchment/80 to-bible-cream z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-bible-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-bible-sage/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 bg-bible-sage/10 text-bible-sage rounded-full text-sm font-medium animate-fade-in">
            Weekly Bible Study
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight text-bible-navy animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {latestLesson.title}
          </h1>
          
          <p className="text-xl text-bible-navy/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {latestLesson.description}
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={scrollToContent}
              className="inline-flex items-center gap-2 bg-bible-navy text-white px-8 py-3 rounded-lg hover:bg-bible-navy/90 transition-all shadow-sm hover:shadow"
            >
              Start Reading
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
