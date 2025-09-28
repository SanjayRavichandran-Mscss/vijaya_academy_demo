import React, { useState } from "react";
import { 
  BookOpen, 
  GraduationCap, 
  School, 
  Target, 
  Shield, 
  Cpu,
  Zap,
  Building,
  Atom,
  FlaskConical,
  TreePine,
  Factory,
  Mountain,
  Ship,
  Gem,
  Droplets,
  Brain,
  Calculator,
  Microscope,
  Code2
} from "lucide-react";

// Icon mapping for each category
const iconComponents = {
  "NEET": Microscope,
  "IIT JEE": Atom,
  "School Preparation": School,
  "UPSC": Target,
  "Govt Job Exams": Building,
  "Defence": Shield,
  "Engineering Aptitude": Brain,
  "Computer Science": Code2,
  "Electrical Engineering": Zap,
  "Mechanical Engineering": Cpu,
  "Civil Engineering": Building,
  "Chemical Engineering": FlaskConical,
  "Aerospace Engineering": Mountain,
  "Biotechnology": Droplets,
  "Environmental Engineering": TreePine,
  "Industrial Engineering": Factory,
  "Mining Engineering": Gem,
  "Naval Architecture": Ship,
  "Material Science": Gem,
  "Petroleum Engineering": Droplets
};

// 20 engineering/exam categories with colors
const allCategories = [
  { id: 1, title: "NEET", subCategories: ["Class 11", "Class 12", "Dropper"], color: "from-red-500 to-pink-500", bgColor: "from-red-50 to-pink-50" },
  { id: 2, title: "IIT JEE", subCategories: ["Class 11", "Class 12", "Dropper"], color: "from-blue-500 to-cyan-500", bgColor: "from-blue-50 to-cyan-50" },
  { id: 3, title: "School Preparation", subCategories: ["Class 6", "Class 7", "Class 8", "More"], color: "from-green-500 to-emerald-500", bgColor: "from-green-50 to-emerald-50" },
  { id: 4, title: "UPSC", subCategories: [], color: "from-purple-500 to-indigo-500", bgColor: "from-purple-50 to-indigo-50" },
  { id: 5, title: "Govt Job Exams", subCategories: ["SSC", "Banking", "Teaching", "Judiciary"], color: "from-orange-500 to-amber-500", bgColor: "from-orange-50 to-amber-50" },
  { id: 6, title: "Defence", subCategories: ["NDA", "CDS", "AFCAT", "Agniveer"], color: "from-gray-600 to-gray-800", bgColor: "from-gray-50 to-gray-100" },
  { id: 7, title: "Engineering Aptitude", subCategories: ["Maths", "Physics", "Chemistry"], color: "from-indigo-500 to-purple-500", bgColor: "from-indigo-50 to-purple-50" },
  { id: 8, title: "Computer Science", subCategories: ["Programming", "Data Structures"], color: "from-blue-600 to-blue-800", bgColor: "from-blue-50 to-blue-100" },
  { id: 9, title: "Electrical Engineering", subCategories: ["Circuit Theory", "Electronics"], color: "from-yellow-500 to-orange-500", bgColor: "from-yellow-50 to-orange-50" },
  { id: 10, title: "Mechanical Engineering", subCategories: ["Thermodynamics", "Strength of Materials"], color: "from-gray-500 to-gray-700", bgColor: "from-gray-50 to-gray-100" },
  { id: 11, title: "Civil Engineering", subCategories: ["Construction", "Design"], color: "from-amber-500 to-yellow-500", bgColor: "from-amber-50 to-yellow-50" },
  { id: 12, title: "Chemical Engineering", subCategories: ["Chemical Processes", "Process Design"], color: "from-green-600 to-teal-500", bgColor: "from-green-50 to-teal-50" },
  { id: 13, title: "Aerospace Engineering", subCategories: ["Aerodynamics", "Propulsion"], color: "from-sky-500 to-blue-500", bgColor: "from-sky-50 to-blue-50" },
  { id: 14, title: "Biotechnology", subCategories: ["Genetics", "Molecular Biology"], color: "from-pink-500 to-rose-500", bgColor: "from-pink-50 to-rose-50" },
  { id: 15, title: "Environmental Engineering", subCategories: ["Water Treatment", "Pollution Control"], color: "from-emerald-500 to-green-500", bgColor: "from-emerald-50 to-green-50" },
  { id: 16, title: "Industrial Engineering", subCategories: ["Operations Research", "Supply Chain"], color: "from-violet-500 to-purple-500", bgColor: "from-violet-50 to-purple-50" },
  { id: 17, title: "Mining Engineering", subCategories: ["Geology", "Mine Safety"], color: "from-stone-500 to-gray-600", bgColor: "from-stone-50 to-gray-100" },
  { id: 18, title: "Naval Architecture", subCategories: ["Ship Design", "Hydrodynamics"], color: "from-cyan-500 to-blue-500", bgColor: "from-cyan-50 to-blue-50" },
  { id: 19, title: "Material Science", subCategories: ["Metallurgy", "Nanotechnology"], color: "from-slate-500 to-gray-600", bgColor: "from-slate-50 to-gray-100" },
  { id: 20, title: "Petroleum Engineering", subCategories: ["Reservoir Engineering", "Drilling"], color: "from-orange-600 to-red-500", bgColor: "from-orange-50 to-red-50" },
];

export default function ExamCategories() {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? allCategories : allCategories.slice(0, 6);

  return (
    <section className="px-6 md:px-14 py-16 lg:py-24 max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Exam Categories
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Vijaya Academy prepares students for 35+ exam categories with comprehensive courses and expert guidance
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCategories.map(({ id, title, subCategories, color, bgColor }) => {
          const IconComponent = iconComponents[title] || BookOpen;
          
          return (
            <div
              key={id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100 min-h-[280px] flex flex-col justify-between"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-50 rounded-2xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Section */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  {/* <div className="text-right">
                    <div className="text-sm text-gray-500">Category</div>
                    <div className="text-lg font-bold text-gray-900">{id}</div>
                  </div> */}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {title}
                </h3>

                {/* Subcategories */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {subCategories.map((sub, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {sub}
                    </span>
                  ))}
                  {subCategories.length === 0 && (
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">
                      Comprehensive Course
                    </span>
                  )}
                </div>
              </div>

              {/* Explore Button */}
              <div className="relative z-10">
                <button
                  className="flex items-center font-semibold text-gray-700 hover:text-gray-900 group/btn transition-all duration-300"
                  aria-label={`Explore ${title} Category`}
                >
                  <span className="mr-2">Explore Category</span>
                  <div className={`p-1 rounded-full bg-gradient-to-r ${color} group-hover/btn:transform group-hover/btn:translate-x-1 transition-transform duration-300`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          );
        })}
      </div>

      {/* View All Categories Link */}
      {!showAll && allCategories.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="group relative inline-flex items-center text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-300"
          >
            <span className="mr-2">View All Categories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></div>
          </button>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold">35+</div>
            <div className="text-purple-100 font-medium">Exam Categories</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold">95%</div>
            <div className="text-purple-100 font-medium">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold">10K+</div>
            <div className="text-purple-100 font-medium">Students</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold">15+</div>
            <div className="text-purple-100 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}