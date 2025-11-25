import React from 'react';
import { Heart, Users, Building2, Award, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      iconColor: "text-red-500",
      iconBg: "bg-red-50",
      title: "Holistic Patient Care",
      description: "Comprehensive healthcare services with a patient-centered approach, ensuring complete wellness and recovery."
    },
    {
      icon: <Users className="w-8 h-8" />,
      iconColor: "text-green-500",
      iconBg: "bg-green-50",
      title: "Expert Doctors",
      description: "Led by Medical Director Dr. B. Chendil Nathan and a team of highly qualified specialists across all departments."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      iconColor: "text-teal-500",
      iconBg: "bg-teal-50",
      title: "Modern Infrastructure",
      description: "State-of-the-art medical equipment and facilities designed for accurate diagnosis and effective treatment."
    },
    {
      icon: <Award className="w-8 h-8" />,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-50",
      title: "NABH Accredited",
      description: "Nationally recognized for maintaining the highest standards of healthcare quality and patient safety."
    }
  ];

  return (
    <section className="py-16 px-6 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2 lg:pr-12 lg:border-r border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              WHY CHOOSE US
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are a leading multi-specialty hospital in Chennai, dedicated to delivering world-class healthcare through compassion, expertise, and innovation. With a relentless focus on patient safety and satisfaction, we go beyond expectations to set new standards in medical care.
            </p>
            <button className="cursor-pointer inline-flex items-center gap-2 bg-[#FFE666] hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors">
              LEARN MORE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Features Grid */}
          <div className="lg:col-span-3 lg:pl-12 grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.iconBg}`}>
                  <div className={feature.iconColor}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
