import React from 'react';
import { Calendar, Package, ClipboardList, CreditCard, Search, ChevronRight } from 'lucide-react';

const PatientTools = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBF2] to-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-3">
            Patient Tools
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold text-[#002D3A] mb-4 max-w-4xl mx-auto leading-tight">
            Explore Tailored Health Packages And Preventive Check-Ups Designed For Your Needs.
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Access everything you need in one place—book appointments, view your medical records securely, 
            manage insurance and billing, and find answers to common patient questions, all designed for your convenience and peace of mind.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard 
            icon={<Calendar className="w-8 h-8 text-blue-500" />}
            bgColor="bg-blue-50"
            title="Book Appointment"
            desc="Schedule your visit with our specialists online"
          />
          <FeatureCard 
            icon={<Package className="w-8 h-8 text-green-600" />}
            bgColor="bg-green-50"
            title="Health Packages"
            desc="Comprehensive health checkup plans for all ages"
          />
          <FeatureCard 
            icon={<ClipboardList className="w-8 h-8 text-purple-600" />}
            bgColor="bg-purple-50"
            title="Patient Registration"
            desc="Quick and easy registration for new patients"
          />
          <FeatureCard 
            icon={<CreditCard className="w-8 h-8 text-orange-500" />}
            bgColor="bg-orange-50"
            title="Insurance & Billing"
            desc="View billing info and insurance coverage details"
          />
        </div>

        {/* Bottom Large Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Alphabet Filter */}
            <div>
              <h2 className="text-xl font-semibold text-[#002D3A] mb-6">
                Find Diseases & Conditions By Alphabet
              </h2>
              <div className="flex flex-wrap gap-3">
                {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
                  <button 
                    key={letter}
                    className="cursor-pointer w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-600 hover:bg-[#B9D100] hover:text-white  transition-colors"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Search */}
            <div className="flex flex-col justify-start">
              <h2 className="text-xl font-semibold text-[#002D3A] mb-6">
                Search Diseases and Conditions
              </h2>
              
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full h-12 pl-4 pr-14 rounded-full border border-gray-200 focus:outline-none focus:border-[] focus:ring-1 focus:ring-green-500"
                />
                <button className=" cursor-pointer absolute right-1 top-1 w-10 h-10 bg-[#B9D100] rounded-full flex items-center justify-center text-white hover:bg-[#768626] transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                Quickly find the information you need. Search our database to explore detailed information on various diseases and conditions, including symptoms, causes, and treatment options.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

// Reusable Card Component
const FeatureCard = ({ icon, bgColor, title, desc }) => (
  <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center h-full">
    <div className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold text-[#002D3A] mb-3">{title}</h3>
    <p className="text-gray-500 text-sm mb-6 flex-grow">{desc}</p>
    <a href="#" className="text-[#B9D100] text-sm font-bold flex items-center hover:underline mt-auto">
      Get Started <ChevronRight className="text-[#B9D100] w-4 h-4 ml-1" />
    </a>
  </div>
);

export default PatientTools;
