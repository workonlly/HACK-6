'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../nav/header';

function Homee() {
  // Set target date for the hackathon
  const targetDate = new Date('2026-02-21T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: "#212529" }}>
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B4D8]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B4D8]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 max-w-full">
        {/* Logo */}
        <div className="mb-12 text-center">
          <h1 className="text-8xl md:text-9xl font-bold tracking-wider mb-4" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
            <span style={{ color: "#00B4D8" }}>HACK</span>
            <span className="text-white"> 6.0</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl font-light tracking-wide">
            Hack 6.0: The Journey Begins — Get Ready to Build!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full">
          {/* Days */}
          <div className="backdrop-blur-sm p-6 md:p-8 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2"
            style={{
              background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              borderColor: "rgba(0,180,216,0.3)"
            }}
          >
            <div className="text-4xl md:text-6xl font-bold mb-2" style={{ color: "#00B4D8", fontFamily: "'Science Gothic', sans-serif" }}>
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
              Days
            </div>
          </div>

          {/* Hours */}
          <div className="backdrop-blur-sm p-6 md:p-8 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2"
            style={{
              background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              borderColor: "rgba(0,180,216,0.3)"
            }}
          >
            <div className="text-4xl md:text-6xl font-bold mb-2" style={{ color: "#00B4D8", fontFamily: "'Science Gothic', sans-serif" }}>
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
              Hours
            </div>
          </div>

          {/* Minutes */}
          <div className="backdrop-blur-sm p-6 md:p-8 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2"
            style={{
              background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              borderColor: "rgba(0,180,216,0.3)"
            }}
          >
            <div className="text-4xl md:text-6xl font-bold mb-2" style={{ color: "#00B4D8", fontFamily: "'Science Gothic', sans-serif" }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
              Minutes
            </div>
          </div>

          {/* Seconds */}
          <div className="backdrop-blur-sm p-6 md:p-8 rounded-lg border text-center transition-all duration-300 hover:transform hover:-translate-y-2"
            style={{
              background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              borderColor: "rgba(0,180,216,0.3)"
            }}
          >
            <div className="text-4xl md:text-6xl font-bold mb-2" style={{ color: "#00B4D8", fontFamily: "'Science Gothic', sans-serif" }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homee;
