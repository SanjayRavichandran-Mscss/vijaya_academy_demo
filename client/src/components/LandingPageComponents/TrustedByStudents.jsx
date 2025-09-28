import React from "react";
import { Users, FileText, PlayCircle, FileCheck, Award, Star } from "lucide-react";

const CardData = [
  {
    color: "from-orange-50 to-amber-50",
    gradient: "from-orange-400 to-amber-500",
    number: "15 Million+",
    text: "Happy Students",
    icon: Users,
    description: "Students achieving their dreams"
  },
  {
    color: "from-red-50 to-pink-50",
    gradient: "from-red-400 to-pink-500",
    number: "24,000+",
    text: "Mock Tests",
    icon: FileText,
    description: "Comprehensive test series"
  },
  {
    color: "from-blue-50 to-cyan-50",
    gradient: "from-blue-400 to-cyan-500",
    number: "14,000+",
    text: "Video Lectures",
    icon: PlayCircle,
    description: "Expert-led learning sessions"
  },
  {
    color: "from-purple-50 to-violet-50",
    gradient: "from-purple-400 to-violet-500",
    number: "80,000+",
    text: "Practice Papers",
    icon: FileCheck,
    description: "Extensive practice material"
  },
];

export default function TrustedByStudents() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-200 rounded-full opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full mb-6">
            <Award className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Trusted Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Platform{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Trusted by Students
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vijaya Academy transforms aspirations into achievements with proven results and measurable success metrics
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {CardData.map(({ color, gradient, number, text, icon: Icon, description }, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100 min-h-[320px] flex flex-col"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-50 rounded-2xl`}></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Section */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {number}
                </h3>

                {/* Title */}
                <p className="text-xl font-semibold text-gray-800 mb-3">{text}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {description}
                </p>

                {/* Bottom Decorative Element */}
                <div className="relative">
                  <div className={`h-1 w-12 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Floating Particles Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-current opacity-0 group-hover:opacity-10 rounded-full group-hover:scale-150 transition-all duration-700"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-current opacity-0 group-hover:opacity-10 rounded-full group-hover:scale-150 transition-all duration-700 delay-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Student Rating</div>
            </div>
            <div className="flex flex-col items-center border-l border-r border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-3">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-gray-900 mb-3">15+ Years</div>
              <div className="text-gray-600">Teaching Experience</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join thousands of successful students today</p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Start Your Journey Now
          </button>
        </div>
      </div>
    </section>
  );
}