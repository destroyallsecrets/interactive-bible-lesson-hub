
import React from 'react';
import ScriptureCard from './ScriptureCard';
import DiscussionQuestions from './DiscussionQuestions';

const LessonContent: React.FC = () => {
  return (
    <section id="lesson-content" className="py-16 md:py-24 bg-bible-cream">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="animate-fade-in space-y-6">
              <div className="inline-block px-3 py-1 mb-2 bg-bible-sage/10 text-bible-sage rounded-full text-sm font-medium">
                Exodus 3:1-10
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-bible-navy">
                The Burning Bush: God's Call to Moses
              </h2>
              
              <p className="text-bible-navy/80 leading-relaxed">
                One of the most profound encounters between God and humanity occurs in Exodus 3, 
                where Moses meets God at the burning bush. This pivotal moment not only changed 
                Moses' life but set in motion the deliverance of an entire nation. As we explore 
                this passage, we'll discover timeless truths about God's character, His awareness 
                of suffering, and His pattern for calling people to serve His purposes.
              </p>
            </div>
            
            {/* Scripture Card */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <ScriptureCard 
                reference="Exodus 3:1-10"
                text="Now Moses was keeping the flock of his father-in-law, Jethro, the priest of Midian, and he led his flock to the west side of the wilderness and came to Horeb, the mountain of God. And the angel of the LORD appeared to him in a flame of fire out of the midst of a bush. He looked, and behold, the bush was burning, yet it was not consumed. And Moses said, 'I will turn aside to see this great sight, why the bush is not burned.' When the LORD saw that he turned aside to see, God called to him out of the bush, 'Moses, Moses!' And he said, 'Here I am.' Then he said, 'Do not come near; take your sandals off your feet, for the place on which you are standing is holy ground.' And he said, 'I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob.' And Moses hid his face, for he was afraid to look at God. Then the LORD said, 'I have surely seen the affliction of my people who are in Egypt and have heard their cry because of their taskmasters. I know their sufferings, and I have come down to deliver them out of the hand of the Egyptians and to bring them up out of that land to a good and broad land, a land flowing with milk and honey, to the place of the Canaanites, the Hittites, the Amorites, the Perizzites, the Hivites, and the Jebusites. And now, behold, the cry of the people of Israel has come to me, and I have also seen the oppression with which the Egyptians oppress them. Come, I will send you to Pharaoh that you may bring my people, the children of Israel, out of Egypt.'"
                version="ESV"
              />
            </div>
            
            {/* Key Themes */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-serif mb-6 relative inline-block text-bible-navy">
                Key Themes
                <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-bible-gold"></span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-bible-sand/30 shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-bible-navy">God's Holiness</h4>
                  <p className="text-bible-navy/80">
                    Moses was commanded to remove his sandals because he was standing on holy ground.
                    This demonstrates God's transcendent nature and the reverence we should have in His presence.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-bible-sand/30 shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-bible-navy">God's Compassion</h4>
                  <p className="text-bible-navy/80">
                    God declared that He had seen the affliction of His people and heard their cries.
                    This reveals God's compassionate character and His concern for human suffering.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-bible-sand/30 shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-bible-navy">Divine Calling</h4>
                  <p className="text-bible-navy/80">
                    God called Moses specifically for a mission. Similarly, God calls each of us
                    to fulfill specific purposes in His redemptive plan for the world.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-bible-sand/30 shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 text-bible-navy">God's Faithfulness</h4>
                  <p className="text-bible-navy/80">
                    God identified Himself as the God of Abraham, Isaac, and Jacob, showing His
                    faithfulness to His covenant promises across generations.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Discussion Questions */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <DiscussionQuestions />
            </div>
            
            {/* Application */}
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-serif mb-6 relative inline-block text-bible-navy">
                Personal Application
                <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-bible-gold"></span>
              </h3>
              
              <div className="bg-bible-parchment p-6 md:p-8 rounded-xl border border-bible-sand/40">
                <p className="text-bible-navy/90 mb-4">
                  As we reflect on Moses' encounter with God, consider these questions for personal application:
                </p>
                
                <ul className="space-y-3 text-bible-navy/80">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bible-navy/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-bible-navy">1</span>
                    </span>
                    <p>In what areas of your life is God calling you to step out in faith, even if you feel inadequate?</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bible-navy/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-bible-navy">2</span>
                    </span>
                    <p>How might God be using ordinary circumstances in your life (like Moses tending sheep) to prepare you for His calling?</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bible-navy/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-bible-navy">3</span>
                    </span>
                    <p>What "burning bushes" might God be using to get your attention today? Are you turning aside to notice them?</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonContent;
