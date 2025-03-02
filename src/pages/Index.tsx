
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LessonContent from '../components/LessonContent';
import ResourcesSection from '../components/ResourcesSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-bible-cream">
      <Header />
      <Hero />
      <LessonContent />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
