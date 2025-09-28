import React from "react";
import {
  FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter, FaTelegramPlane,
  FaApple, FaGooglePlay, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock
} from "react-icons/fa";
import { BookOpen, Users, Award, Download, Shield, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Learning Resources Section */}
        <section className="bg-white text-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Learning Resources</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access thousands of study materials, books, and notes curated by expert educators
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* PW Books Section */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">PW Books & Resources</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {["NEET Books", "IIT JEE Books", "School Prep Books", "UPSC CSE Books", "Defence Books", "GATE Books"].map((item) => (
                      <div key={item} className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-2 h-2 bg-purple-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-700 group-hover:text-purple-600 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {["CA/Finance Books", "SSC Books", "Banking Books", "Stationery", "Merchandise", "Device Courses"].map((item) => (
                      <div key={item} className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notes Section */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Study Notes (Class 6-12)</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {["Class 10 Maths", "Class 10 Physics", "Class 10 Chemistry", "Class 10 Biology", "Class 11 Physics", "Class 11 Maths"].map((item) => (
                      <div key={item} className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-2 h-2 bg-amber-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-700 group-hover:text-amber-600 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {["Class 12 Physics", "Class 12 Chemistry", "Class 12 Maths", "Class 12 Biology", "Aptitude", "Reasoning"].map((item) => (
                      <div key={item} className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-2 h-2 bg-orange-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-700 group-hover:text-orange-600 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Footer Links */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Vijaya Academy</h3>
                  <p className="text-purple-200 text-sm">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming education through innovative learning solutions. We help students achieve their dreams with personalized guidance and comprehensive resources.
              </p>
              
              {/* App Downloads */}
              <div className="mb-6">
                <p className="font-semibold mb-3">Download Our App</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-black px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                    <FaGooglePlay className="text-white text-lg" />
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Get it on</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-2 bg-black px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                    <FaApple className="text-white text-lg" />
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Download on</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="font-semibold mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebookF, color: "text-blue-400", hover: "hover:text-blue-300" },
                    { icon: FaInstagram, color: "text-pink-400", hover: "hover:text-pink-300" },
                    { icon: FaYoutube, color: "text-red-400", hover: "hover:text-red-300" },
                    { icon: FaLinkedinIn, color: "text-blue-300", hover: "hover:text-blue-200" },
                    { icon: FaTwitter, color: "text-sky-400", hover: "hover:text-sky-300" },
                    { icon: FaTelegramPlane, color: "text-blue-400", hover: "hover:text-blue-300" }
                  ].map((SocialIcon, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center ${SocialIcon.color} ${SocialIcon.hover} transition-colors backdrop-blur-sm`}
                    >
                      <SocialIcon.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-400" />
                  Company
                </h4>
                <ul className="space-y-3">
                  {["About Us", "Careers", "Contact", "Press", "Blog", "Success Stories"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                        <div className="w-1 h-1 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Centers */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="h-5 w-5 text-green-400" />
                  Our Centers
                </h4>
                <ul className="space-y-3">
                  {["New Delhi", "Patna", "Kota", "Noida", "Dhanbad", "Varanasi", "View All"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                        <div className="w-1 h-1 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></div>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exams */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-400" />
                  Popular Exams
                </h4>
                <ul className="space-y-3">
                  {["IIT JEE", "NEET", "GATE", "UPSC", "Defence", "School Prep", "CUET"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                        <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-amber-400" />
                  Support
                </h4>
                <ul className="space-y-3">
                  {["Help Center", "Contact Counselor", "Email Support", "Live Chat", "FAQ", "Privacy Policy"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                        <div className="w-1 h-1 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></div>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-green-400" />
                <div>
                  <div className="text-sm text-gray-300">Call Us</div>
                  <div className="font-semibold">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-blue-400" />
                <div>
                  <div className="text-sm text-gray-300">Email Us</div>
                  <div className="font-semibold">info@vijayaacademy.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaClock className="text-purple-400" />
                <div>
                  <div className="text-sm text-gray-300">Office Hours</div>
                  <div className="font-semibold">Mon-Sun: 7AM - 11PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <span>© 2024 Vijaya Academy. Made with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current" />
                <span>for students</span>
              </div>
              <div className="flex gap-6 text-sm text-gray-300">
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}