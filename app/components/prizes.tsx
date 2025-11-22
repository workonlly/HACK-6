"use client";

import { useState } from "react";

// Simple Confetti component
const Confetti = () => {
  const confettiPieces = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 6 + 4;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 1 + 0.5;
    const animationDelay = Math.random() * 0.2;

    const colors = ["#E63946", "#c1121f", "#FFD700"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <div
        key={i}
        className="absolute animate-fall"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: "50%",
          left: `${left}%`,
          top: "-5%",
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          zIndex: 10,
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confettiPieces}
    </div>
  );
};

export default function Prizes() {
  const [showGrandPrizeConfetti, setShowGrandPrizeConfetti] = useState(false);

  return (
    <section
      id="prizes"
      className="py-20 relative"
      style={{ backgroundColor: "#212529" }}
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-20 filter blur-[120px]"
          style={{ backgroundColor: "#00B4D8" }}
        ></div>
        <div
          className="absolute bottom-1/2 left-1/2 w-80 h-80 rounded-full opacity-20 filter blur-[100px]"
          style={{ backgroundColor: "#00B4D8" }}
        ></div>
      </div>
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>


      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
            Prize <span style={{ color: "#00B4D8" }}>Pool</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ backgroundColor: "#00B4D8" }}
          ></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Celebrating excellence with substantial rewards for groundbreaking
            achievements
          </p>
        </div>

        {/* Grand Prize with Confetti Effect */}
        <div
          className="max-w-xs sm:max-w-sm mx-auto mb-12 md:mb-16 relative"
          onMouseEnter={() => setShowGrandPrizeConfetti(true)}
          onMouseLeave={() => setShowGrandPrizeConfetti(false)}
        >
          <div
            className="backdrop-blur-sm rounded-lg border p-6 md:p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg relative z-10 h-full"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                style={{ color: "#00B4D8" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
              Grand Prize
            </h3>
            <div
              className="text-3xl md:text-4xl font-bold mb-3 md:mb-4"
              style={{ color: "#00B4D8" }}
            >
              ₹40,000
            </div>
            <p className="text-gray-300">
              Grand prize for exceptional achievement and innovation
            </p>
          </div>

          {showGrandPrizeConfetti && <Confetti />}
        </div>

        {/* Track Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              icon: (
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  style={{ color: "#00B4D8" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ),
              title: "AI/ML Track",
              amount: "₹30,000",
              description:
                "Outstanding performance and creative solutions in AI/ML",
              distribution: [
                { position: "1st", amount: "₹15,000" },
                { position: "2nd", amount: "₹10,000" },
                { position: "3rd", amount: "₹5,000" },
              ],
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  style={{ color: "#00B4D8" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  />
                </svg>
              ),
              title: "Blockchain & DeFi Track",
              amount: "₹30,000",
              description: "Excellence in execution of Blockchain & DeFi",
              distribution: [
                { position: "1st", amount: "₹15,000" },
                { position: "2nd", amount: "₹10,000" },
                { position: "3rd", amount: "₹5,000" },
              ],
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  style={{ color: "#00B4D8" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              ),
              title: "Open Innovation",
              amount: "₹30,000",
              description: "Innovative solutions and creative problem-solving",
              distribution: [
                { position: "1st", amount: "₹15,000" },
                { position: "2nd", amount: "₹10,000" },
                { position: "3rd", amount: "₹5,000" },
              ],
            },
          ].map((prize, index) => (
            <div key={index} className="h-full">
              <div
                className="backdrop-blur-sm rounded-lg border p-6 md:p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg relative group overflow-hidden h-full"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="transition-all duration-300 group-hover:opacity-0">
                  <div
                    className="p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    {prize.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">
                    {prize.title}
                  </h3>
                  <div
                    className="text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                    style={{ color: "#00B4D8" }}
                  >
                    {prize.amount}
                  </div>
                  <p className="text-gray-300">{prize.description}</p>
                </div>

                {/* Prize distribution on hover */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(33, 37, 41, 0.9)" }}
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#00B4D8" }}
                  >
                    {prize.title}
                  </h3>
                  <div className="space-y-4 w-full">
                    {prize.distribution.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center border-b pb-2"
                        style={{ borderColor: "rgba(0, 180, 216, 0.2)" }}
                      >
                        <span className="text-sm md:text-lg font-bold text-white">
                          {item.position}
                        </span>
                        <span className="text-sm md:text-lg font-bold text-white">
                          {item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    Total: {prize.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Category Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              icon: (
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  style={{ color: "#00B4D8" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              ),
              title: "Best All Girls Team",
              amount: "₹5,000",
              description: "Outstanding performance by an all-girls team",
              distribution:
                "The team should be composed entirely of girls, ensuring full female representation.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  style={{ color: "#00B4D8" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              ),
              title: "Best Beginners Hack",
              amount: "₹5,000",
              description: "Best hack by a beginner team",
              distribution:
                "The team should consist entirely of first-year students, ensuring equal experience among members.",
            },
          ].map((prize, index) => (
            <div key={index} className="h-full">
              <div
                className="backdrop-blur-sm rounded-lg border p-6 md:p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg relative group overflow-hidden h-full"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="transition-all duration-300 group-hover:opacity-0">
                  <div
                    className="p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    {prize.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">
                    {prize.title}
                  </h3>
                  <div
                    className="text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                    style={{ color: "#00B4D8" }}
                  >
                    {prize.amount}
                  </div>
                  <p className="text-gray-300">{prize.description}</p>
                </div>

                {/* Prize distribution on hover */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(33, 37, 41, 0.9)" }}
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#00B4D8" }}
                  >
                    {prize.title}
                  </h3>
                  <div className="space-y-4 w-full">
                    <span className="text-lg font-bold text-white">
                      {prize.distribution}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    Total: {prize.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-xl text-gray-300">
            Includes Prizes Worth 7k-10k
          </h2>
        </div>

        {/* Sponsor Tracks Prizes*/}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Sponsor <span style={{ color: "#00B4D8" }}>Tracks</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              icon: (
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  style={{ color: "#00B4D8" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              ),
              title: "Ethereum",
              amount: "₹8,500+",
              description:
                "Innovative solutions and projects built on Ethereum",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  style={{ color: "#00B4D8" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ),
              title: "Best use of GitHub",
              amount: "",
              description: "Chance to win Exicited Prizes by GitHub",
            },
          ].map((prize, index) => (
            <div key={index} className="h-full">
              <div
                className="backdrop-blur-sm rounded-lg border p-6 md:p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg h-full"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="p-3 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  {prize.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">
                  {prize.title}
                </h3>
                <div
                  className="text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                  style={{ color: "#00B4D8" }}
                >
                  {prize.amount}
                </div>
                <p className="text-gray-300">{prize.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
