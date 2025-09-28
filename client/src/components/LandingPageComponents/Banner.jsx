import React, { useEffect, useState, useRef } from "react";
import OTPform from "../../components/LandingPageComponents/OTPform"; // Placeholder import for OTPform

const bannerImages = [
  "/assets/banner/b1.png",
  "/assets/banner/b2.png",
  "/assets/banner/b3.png",
  "/assets/banner/b4.png",
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOTPFormOpen, setIsOTPFormOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenOTPForm = () => {
    setIsOTPFormOpen(true);
  };

  const handleCloseOTPForm = () => {
    setIsOTPFormOpen(false);
  };

  return (
    <>
      {/* Banner Slider Section - Kept exactly as original */}
      <section className="relative w-full max-w-full mx-auto overflow-hidden">
        <div
          ref={containerRef}
          className="relative h-72 md:h-[410px] flex overflow-hidden"
          style={{ width: "100%" }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {bannerImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Banner ${idx + 1}`}
                className="w-full h-72 md:h-[410px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {bannerImages.map((_, idx) => (
            <span
              key={idx}
              className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                idx === activeIndex ? "bg-purple-700" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(idx)}
            ></span>
          ))}
        </div>
      </section>

      {/* Enhanced Content Section Below Banner */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full translate-x-1/2 translate-y-1/2 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content - Enhanced */}
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Vijaya Academy's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Premier & Trusted
                </span>{" "}
                Engineering Courses
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Advance your career with comprehensive preparation for top engineering entrance exams 
                and college success programs with proven results and industry-leading methodology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleOpenOTPForm}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </button>
                <button
                  onClick={handleOpenOTPForm}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Free Demo Class
                </button>
              </div>
            </div>

            {/* Right Content - Enhanced Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              {/* Feature Card 1 */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Daily Live</h3>
                    <p className="text-gray-600 leading-relaxed">Interactive classes with expert faculty</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>

              {/* Feature Card 2 */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl">
                    📚
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">10 Million+</h3>
                    <p className="text-gray-600 leading-relaxed">Tests, sample papers & study materials</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>

              {/* Feature Card 3 */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-2xl">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">24 x 7</h3>
                    <p className="text-gray-600 leading-relaxed">Doubt solving sessions with mentors</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>

              {/* Feature Card 4 */}
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                    🏫
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">100 +</h3>
                    <p className="text-gray-600 leading-relaxed">Offline centres across cities</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Additional Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">95%</div>
                <div className="text-purple-100 font-medium">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">10K+</div>
                <div className="text-purple-100 font-medium">Students Trained</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">15+</div>
                <div className="text-purple-100 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTP Form Overlay */}
      {isOTPFormOpen && (
        <div
          className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-700 ease-in-out ${
            isOTPFormOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseOTPForm}
        >
          <div
            className={`bg-white rounded-2xl p-8 max-w-md w-full transform transition-all duration-700 ease-in-out ${
              isOTPFormOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
          >
            <OTPform />
            <button
              onClick={handleCloseOTPForm}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}