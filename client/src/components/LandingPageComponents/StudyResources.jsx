import React from "react";
import { BookOpen, FileText, Notebook, Download, ArrowRight, Star, Users, Clock } from "lucide-react";

const resources = [
  {
    title: "Reference Books",
    description: "Comprehensive study materials crafted by experts that break down complex concepts into easily understandable content with detailed explanations and examples.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    features: ["Expert-curated", "Detailed Solutions", "Topic-wise Coverage"],
    stats: "500+ Books"
  },
  {
    title: "NCERT Solutions",
    description: "Unlock academic excellence with step-by-step NCERT solutions that provide clear explanations and help build strong foundational concepts.",
    icon: FileText,
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-50 to-orange-50",
    features: ["Step-by-step", "CBSE Aligned", "Exam Focused"],
    stats: "100% Syllabus Covered"
  },
  {
    title: "Study Notes",
    description: "Comprehensive study notes that simplify complex ideas into easily understandable language with visual aids and quick revision points.",
    icon: Notebook,
    color: "from-emerald-500 to-green-500",
    bgColor: "from-emerald-50 to-green-50",
    features: ["Quick Revision", "Visual Aids", "Key Points"],
    stats: "10,000+ Pages"
  }
];

export default function StudyResources() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full translate-x-1/2 translate-y-1/2 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full mb-6">
            <BookOpen className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Learning Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Study Resources
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access a diverse array of premium learning materials designed to enhance your educational journey and ensure academic success
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${resource.bgColor} opacity-50 rounded-2xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${resource.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Resource</div>
                    <div className="text-lg font-bold text-gray-900">{index + 1}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {resource.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-4 w-4 text-amber-400" />
                    <span className="text-sm font-semibold text-gray-700">Key Features</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resource.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${resource.color}`}></div>
                    <span className="text-sm font-semibold text-gray-600">{resource.stats}</span>
                  </div>
                  <button className="group/btn flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                    Explore
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover Effects */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
              <Download className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-lg font-semibold text-gray-900">Free Access</div>
            <div className="text-sm text-gray-600">Download anytime</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-lg font-semibold text-gray-900">Expert Reviewed</div>
            <div className="text-sm text-gray-600">By top educators</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-lg font-semibold text-gray-900">Regular Updates</div>
            <div className="text-sm text-gray-600">Latest syllabus</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-4">
              <Star className="h-6 w-6 text-orange-600" />
            </div>
            <div className="text-lg font-semibold text-gray-900">Quality Assured</div>
            <div className="text-sm text-gray-600">Premium content</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Access All Resources
          </button>
          <p className="text-gray-600 mt-4 text-sm">Free registration • Unlimited access • Regular updates</p>
        </div>
      </div>
    </section>
  );
}