import React, { useState } from 'react';
import { Search, ArrowRight, MessageCircle } from 'lucide-react';
import ScrollingBanner from './heroCarousel';
import heroVideo from "../assets/heroVideo.mp4"

const HospitalHeroSection = ({ heroRef }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative h-screen overflow-hidden">
      <ScrollingBanner />
      {/* Hero Section with Video Background */}
      <div ref={heroRef} className="relative h-full">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pb-0 -bottom-28">
          {/* Search Bar */}
          <div className="w-full max-w-3xl mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search For Doctors & Specialities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-3 pr-20 rounded-full text-base text-white placeholder-white/80 bg-blue-900/40 backdrop-blur-md border border-white/20 shadow-lg focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#FFE666' }}
              />
              <button className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition" style={{ backgroundColor: '#FFE666' }}>
                <Search size={20} className="text-gray-900" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center">
            <button
              className="cursor-pointer bg-white/95 backdrop-blur-md px-8 py-4 rounded-l-full rounded-r-none flex items-center gap-4 font-semibold hover:bg-white transition-colors shadow-lg border-r border-gray-200"
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            >
              <span>Book Appointment</span>
              <div className="w-8 h-8 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center">
                <ArrowRight size={18} />
              </div>
            </button>

            <button
              className="cursor-pointer bg-white/95 backdrop-blur-md px-8 py-4 flex items-center gap-4 font-semibold hover:bg-white transition-colors shadow-lg border-r border-gray-200 rounded-none"
              style={{ borderRadius: 0 }}
            >
              <span>Book Health Check</span>
              <div className="w-8 h-8 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center">
                <ArrowRight size={18} />
              </div>
            </button>

            <button
              className="cursor-pointer bg-white/95 backdrop-blur-md px-8 py-4 rounded-r-full rounded-l-none flex items-center gap-4 font-semibold hover:bg-white transition-colors shadow-lg"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              <span>Get Expert Opinion</span>
              <div className="w-8 h-8 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        </div>

        {/* Scrolling Banner - Pinned to Bottom */}
        <div className="absolute bottom-[0px] left-0 right-0 z-30">
          <ScrollingBanner />
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-8 right-8 z-50 px-8 py-5 rounded-full shadow-2xl cursor-pointer transition flex items-center gap-4" style={{ backgroundColor: '#FFE666' }}>
        <div>
          <div className="font-bold text-gray-900">Hi, Need some help?</div>
          <div className="text-sm text-gray-700">I'm happy to assist</div>
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <MessageCircle size={24} className="text-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default HospitalHeroSection;
