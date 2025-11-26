import React from 'react';
import { Sparkles } from 'lucide-react';

const bannerItems = [
  'Company Meetups',
  'Product Launch Rooms',
  'Modern Conference Areas',
  'Casual Connects',
  'Workshops',
  'Private Company Meetups',
  'Startup Pitch Sessions',
  'Modern Elegance',
];

const ScrollingBanner = () => {
  return (
    <section className="w-full h-5 sm:h-16 relative flex items-center overflow-hidden py-8 mt-3 bg-[#FFE666]">
      {/* Scrolling content */}
      <div className="relative z-10 flex items-center animate-scroll font-gloock whitespace-nowrap">
        {bannerItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-black text-2xl mx-4">{item}</span>
            <Sparkles className="w-6 h-6 mx-4 text-black" />
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingBanner;
