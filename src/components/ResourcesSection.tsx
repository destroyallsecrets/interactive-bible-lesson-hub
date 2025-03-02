
import React from 'react';
import { BookOpen, FileText, Video, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: 'book' | 'document' | 'video';
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Commentary on Exodus 3",
    description: "A detailed scholarly examination of the burning bush narrative and its theological implications.",
    link: "https://www.biblehub.com/commentaries/exodus/3-1.htm",
    icon: "book"
  },
  {
    id: 2,
    title: "Moses' Call Study Guide",
    description: "Printable PDF with additional discussion questions and journaling prompts.",
    link: "#",
    icon: "document"
  },
  {
    id: 3,
    title: "The Life of Moses: Video Series",
    description: "A six-part video series exploring the complete journey of Moses from Egypt to the Promised Land.",
    link: "#",
    icon: "video"
  },
  {
    id: 4,
    title: "Understanding God's Calling",
    description: "An article exploring the biblical patterns of God's call and how to discern His voice today.",
    link: "#",
    icon: "document"
  },
];

const ResourcesSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <BookOpen size={20} className="text-bible-navy" />;
      case 'document':
        return <FileText size={20} className="text-bible-navy" />;
      case 'video':
        return <Video size={20} className="text-bible-navy" />;
      default:
        return <BookOpen size={20} className="text-bible-navy" />;
    }
  };

  return (
    <section id="resources" className="py-16 md:py-24 bg-bible-parchment">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-bible-navy">
              Additional Resources
            </h2>
            <p className="text-bible-navy/70 max-w-2xl mx-auto">
              Deepen your understanding with these handpicked resources to help you
              explore the burning bush narrative and its applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <a 
                key={resource.id}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg border border-bible-sand/30 p-5 transition-all duration-300 hover:shadow-md hover:border-bible-sand/50 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-bible-sage/10 flex items-center justify-center flex-shrink-0">
                    {getIcon(resource.icon)}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-bible-navy group-hover:text-bible-burgundy transition-colors">
                        {resource.title}
                      </h3>
                      <ExternalLink size={14} className="text-bible-navy/50 group-hover:text-bible-burgundy/70 transition-colors" />
                    </div>
                    <p className="mt-1 text-sm text-bible-navy/70">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-bible-gold/50 text-bible-navy hover:bg-bible-gold/10 transition-all"
            >
              <span>View All Resources</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
