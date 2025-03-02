
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { lessons } from '../data/lessons';
import { Book } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Lessons = () => {
  return (
    <div className="min-h-screen bg-bible-cream">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 text-bible-navy">
                Bible Study Lessons
              </h1>
              <p className="text-xl text-bible-navy/70 max-w-2xl mx-auto">
                Explore our collection of weekly Bible study lessons, designed to deepen your understanding of Scripture.
              </p>
            </div>
            
            <div className="grid gap-6">
              {lessons.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/lessons/${lesson.id}`}
                  className="group bg-white rounded-xl shadow-sm border border-bible-sand/30 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-bible-navy/5 flex items-center justify-center flex-shrink-0">
                      <Book size={24} className="text-bible-navy/70" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-xl font-serif font-medium text-bible-navy group-hover:text-bible-burgundy transition-colors">
                            {lesson.title}
                          </h2>
                          <p className="text-sm text-bible-sage mt-1">
                            {lesson.reference}
                          </p>
                        </div>
                        <time className="text-sm text-bible-navy/50">
                          {format(new Date(lesson.date), 'MMMM d, yyyy')}
                        </time>
                      </div>
                      
                      <p className="mt-3 text-bible-navy/70">
                        {lesson.description}
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {lesson.keyThemes.slice(0, 2).map((theme, index) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 bg-bible-sage/10 text-bible-sage rounded-full text-sm"
                          >
                            {theme.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Lessons;
