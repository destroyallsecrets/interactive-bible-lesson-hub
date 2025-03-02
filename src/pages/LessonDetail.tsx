
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getLessonById } from '../data/lessons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScriptureCard from '../components/ScriptureCard';
import DiscussionQuestions from '../components/DiscussionQuestions';

const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = getLessonById(id || '');

  if (!lesson) {
    return <Navigate to="/lessons" replace />;
  }

  return (
    <div className="min-h-screen bg-bible-cream">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="animate-fade-in space-y-6">
                <div className="inline-block px-3 py-1 mb-2 bg-bible-sage/10 text-bible-sage rounded-full text-sm font-medium">
                  {lesson.reference}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 text-bible-navy">
                  {lesson.title}
                </h1>
                
                <p className="text-xl text-bible-navy/80 max-w-2xl">
                  {lesson.description}
                </p>
              </div>
              
              {/* Scripture Card */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <ScriptureCard 
                  reference={lesson.reference}
                  text={lesson.scriptureText}
                  version={lesson.scriptureVersion}
                />
              </div>
              
              {/* Key Themes */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-2xl font-serif mb-6 relative inline-block text-bible-navy">
                  Key Themes
                  <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-bible-gold"></span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {lesson.keyThemes.map((theme, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-bible-sand/30 shadow-sm">
                      <h4 className="text-lg font-semibold mb-3 text-bible-navy">{theme.title}</h4>
                      <p className="text-bible-navy/80">{theme.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Discussion Questions */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <DiscussionQuestions questions={lesson.questions} />
              </div>
              
              {/* Application */}
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-2xl font-serif mb-6 relative inline-block text-bible-navy">
                  Personal Application
                  <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-bible-gold"></span>
                </h3>
                
                <div className="bg-bible-parchment p-6 md:p-8 rounded-xl border border-bible-sand/40">
                  <p className="text-bible-navy/90 mb-4">
                    As we reflect on this lesson, consider these questions for personal application:
                  </p>
                  
                  <ul className="space-y-3 text-bible-navy/80">
                    {lesson.application.map((item) => (
                      <li key={item.id} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bible-navy/10 flex items-center justify-center">
                          <span className="text-sm font-medium text-bible-navy">{item.id}</span>
                        </span>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LessonDetail;
