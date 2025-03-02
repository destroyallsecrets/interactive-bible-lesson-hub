
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-bible-navy text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {/* About */}
            <div>
              <h3 className="text-xl font-serif mb-6 relative inline-block">
                About Our Bible Study
                <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-bible-gold"></span>
              </h3>
              <p className="text-white/70 mb-6">
                We are dedicated to helping people understand and apply God's Word
                in their daily lives through communal study and thoughtful discussion.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-serif mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-bible-gold"></span>
              </h3>
              <nav className="space-y-3">
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Home</a>
                <a href="#about" className="block text-white/70 hover:text-white transition-colors">About</a>
                <a href="#lessons" className="block text-white/70 hover:text-white transition-colors">Lessons</a>
                <a href="#resources" className="block text-white/70 hover:text-white transition-colors">Resources</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Bible Study Schedule</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Prayer Requests</a>
              </nav>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-xl font-serif mb-6 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-bible-gold"></span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-bible-gold mt-0.5" />
                  <p className="text-white/70">
                    123 Faith Avenue<br />
                    Grace Community, CA 90210
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-bible-gold mt-0.5" />
                  <p className="text-white/70">
                    <a href="mailto:info@biblestudy.com" className="hover:text-white transition-colors">
                      info@biblestudy.com
                    </a>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-bible-gold mt-0.5" />
                  <p className="text-white/70">
                    <a href="tel:+15551234567" className="hover:text-white transition-colors">
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
            <p>© {currentYear} Bible Study Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
