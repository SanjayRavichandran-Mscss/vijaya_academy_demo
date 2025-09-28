import React, { useState } from "react";

export default function OTPForm({ onClose }) {
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle OTP submission logic here
  };

  return (
    <div className="fixed inset-0 z-50 bg-opacity-30 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl p-10 pt-14 pb-10 w-full max-w-lg mx-2 shadow-xl">
        {/* Close button */}
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl text-gray-400 hover:text-black focus:outline-none transition-colors duration-300"
          aria-label="Close"
        >
          &times;
        </button> */}

        {/* Logo & icon area */}
        <div className="flex flex-col items-center mb-8">
          <div className="mb-8">
            {/* Example SVG/Logo -- update to your own Academy logo if desired */}
            <div className="rounded-full bg-yellow-100 p-6 flex items-center justify-center">
              <img src="/assets/logo.png" alt="Logo" className="w-16 h-16 rounded-full" />
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-center mb-3">
            Please enter your Mobile Number
            <span className="align-middle ml-2 inline-flex bg-yellow-200 px-3 py-1 rounded-2xl relative top-[-2px]">
              <span className="block w-2 h-2 bg-yellow-400 rounded-full mx-0.5 inline-block"></span>
              <span className="block w-2 h-2 bg-yellow-400 rounded-full mx-0.5 inline-block"></span>
              <span className="block w-2 h-2 bg-yellow-400 rounded-full mx-0.5 inline-block"></span>
            </span>
          </h2>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit}>
          <div className="flex border border-gray-400 rounded-lg overflow-hidden mb-10">
            <select className="outline-none py-4 px-3 bg-gray-100 text-gray-700 font-medium border-none max-w-[90px]">
              <option value="IN">IN +91</option>
            </select>
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="flex-1 px-4 py-4 outline-none text-xl"
              placeholder="E.g 9877654335"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gray-500 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            Get OTP
          </button>
        </form>

        {/* Terms */}
        <p className="mt-8 text-center text-sm text-gray-500">
          By continuing you agree to our{" "}
          <a href="#" className="text-blue-600 underline font-medium">
            Terms of use & Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}