"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is Hack 5.0 - Obsidian Saga?",
    answer:
      "It is not just a hackathon—it is an epic fusion of creativity, caffeine, and code! Think of it as a 48-hour sprint where brilliant minds come together to solve real problems, build cool stuff, and maybe win some brag-worthy prizes",
  },
  {
    question: "Who can participate?",
    answer:
      "Whether you're a coding ninja, a design wizard, or just someone with crazy ideas—everyone is welcome! Students, beginners, pros... if you have got the passion, you have got a spot here.",
  },
  {
    question: "How do I register?",
    answer:
      'Just click that big, shiny "Register Now" button on our website, fill in your details, and boom—you are in! Do not wait too long though; spots fill up fast!',
  },
  {
    question: "What if I do not have a team?",
    answer:
      "No worries! We have got a team formation session before the hackathon kicks off. So, you will find your crew and maybe your next best friends.",
  },
  {
    question: "Can I participate solo?",
    answer: "No, teams must have a minimum of 2 members (maximum 4). We will help you find teammates if needed!",
  },
  {
    question: "Is there a registration fee?",
    answer: "No, Hack 5.0 is completely free! Just register and you are in. There are no registration fees or hidden charges.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative" style={{ backgroundColor: "#212529" }}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-20 filter blur-[120px]" style={{ backgroundColor: "#00B4D8" }}></div>
        <div className="absolute bottom-1/2 left-1/2 w-80 h-80 rounded-full opacity-20 filter blur-[100px]" style={{ backgroundColor: "#00B4D8" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
            Frequently Asked <span style={{ color: "#00B4D8" }}>Questions</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: "#00B4D8" }}></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">Got questions? We've got answers!</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div 
                className="backdrop-blur-sm rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  borderColor: "rgba(255,255,255,0.1)"
                }}
              >
                <button
                  className="w-full p-4 md:p-6 text-left flex justify-between items-center text-white"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-base md:text-lg font-medium pr-4" style={{ fontFamily: "'Science Gothic', sans-serif" }}>{faq.question}</h3>
                  {openIndex === index ? (
                    <svg 
                      className="shrink-0 w-6 h-6" 
                      style={{ color: "#00B4D8" }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg 
                      className="shrink-0 w-6 h-6" 
                      style={{ color: "#00B4D8" }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                <div
                  style={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div 
                    className="p-4 md:p-6 pt-0 text-sm md:text-base text-gray-300 border-t"
                    style={{ borderColor: "rgba(0, 180, 216, 0.1)" }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
