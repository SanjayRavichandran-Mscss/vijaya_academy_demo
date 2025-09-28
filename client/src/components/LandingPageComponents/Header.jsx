import React, { useState } from "react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-4 relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center font-serif font-semibold text-2xl select-none">
            <img className="border rounded-full" src="assets/logo.png" alt="" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 flex-grow ml-6">
          {/* All Courses Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="border border-purple-700 text-purple-700 rounded-lg px-5 py-2 flex items-center font-medium hover:bg-purple-50 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen ? "true" : "false"}
              type="button"
            >
              All Courses
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-[800px] bg-white border border-gray-200 shadow-lg rounded-lg flex p-6 z-50">
                {/* Left column: Categories */}
                <div className="w-1/3 pr-6 border-r border-gray-200">
                  <ul className="space-y-4 text-sm text-gray-700">
                    <li>
                      <div className="font-semibold">Engineering Entrance</div>
                      <div className="text-xs text-gray-400">
                        IIT JEE Main, JEE Advanced, BITSAT, VITEEE, WBJEE
                      </div>
                    </li>
                    <li>
                      <div className="font-semibold">Engineering Subjects</div>
                      <div className="text-xs text-gray-400">
                        Mechanical, Civil, Electrical, Computer Science, Electronics
                      </div>
                    </li>
                    <li>
                      <div className="font-semibold">Government Engineering Exams</div>
                      <div className="text-xs text-gray-400">
                        SSC JE, UPSC ESE, GATE, State PSC Exams, RRB JE
                      </div>
                    </li>
                    <li>
                      <div className="font-semibold">Postgraduate Engineering</div>
                      <div className="text-xs text-gray-400">
                        GATE, IIT JAM, CSIR NET, BARC, ISRO
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Right column: Course tiles */}
                <div className="w-2/3 grid grid-cols-2 gap-4 pl-6">
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                      alt="IIT JEE Main Icon"
                      className="w-6 h-6 mr-3"
                    />
                    IIT JEE Main
                  </button>
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                      alt="JEE Advanced Icon"
                      className="w-6 h-6 mr-3"
                    />
                    JEE Advanced
                  </button>
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2923/2923662.png"
                      alt="GATE Icon"
                      className="w-6 h-6 mr-3"
                    />
                    GATE
                  </button>
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5031/5031680.png"
                      alt="UPSC ESE Icon"
                      className="w-6 h-6 mr-3"
                    />
                    UPSC ESE
                  </button>
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3157/3157533.png"
                      alt="Mechanical Engineering Icon"
                      className="w-6 h-6 mr-3"
                    />
                    Mechanical Engineering
                  </button>
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6637/6637568.png"
                      alt="Civil Engineering Icon"
                      className="w-6 h-6 mr-3"
                    />
                    Civil Engineering
                  </button>
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2923/2923662.png"
                      alt="Electrical Engineering Icon"
                      className="w-6 h-6 mr-3"
                    />
                    Electrical Engineering
                  </button>
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3157/3157533.png"
                      alt="Computer Science Icon"
                      className="w-6 h-6 mr-3"
                    />
                    Computer Science
                  </button>
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6637/6637568.png"
                      alt="Electronics Engineering Icon"
                      className="w-6 h-6 mr-3"
                    />
                    Electronics Engineering
                  </button>
                  <button className="flex items-center p-4 bg-white rounded-lg shadow text-gray-800 hover:bg-purple-50 transition border border-gray-100">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                      alt="BITSAT Icon"
                      className="w-6 h-6 mr-3"
                    />
                    BITSAT
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Other navigation links */}
    
          <a href="#" className="text-gray-800 text-lg font-semibold hover:text-purple-700">
            Upskilling
          </a>
          <a href="#" className="text-gray-800 text-lg font-semibold hover:text-purple-700">
            VA Store (Books)
          </a>
          <a href="#" className="text-gray-800 text-lg font-semibold hover:text-purple-700">
            Real Test
          </a>
          <a href="#" className="text-gray-800 text-lg font-semibold hover:text-purple-700">
            BTech courses
          </a>
          <a href="#" className="text-gray-800 text-lg font-semibold hover:text-purple-700">
            Power Batch
          </a>
        </nav>
        {/* Login/Register Button */}
        <button className="bg-purple-700 text-white font-semibold rounded-lg px-6 py-3 hover:bg-purple-800 transition-colors">
          Login/Register
        </button>
      </div>
    </header>
  );
}