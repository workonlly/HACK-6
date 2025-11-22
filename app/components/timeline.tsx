"use client";

export default function Timeline() {
  const timelineEvents = [
    {
      date: "February 21, 2025",
      title: "Registration Opens",
      description: "Sign up and secure your spot for HACK 5.0",
    },
    {
      date: "March 21, 2025",
      title: "Registration Closes",
      description: "Last day to register for the hackathon",
    },
    {
      date: "March 22, 2025",
      title: "Screening Round",
      description: "Screening round for the Hack-5.0",
    },
    {
      date: "April 4, 2025",
      title: "Hackathon Kickoff",
      description: "Opening ceremony and hacking begins",
    },
    {
      date: "April 4-5, 2025",
      title: "Hacking Period",
      description: "48 hours of coding, building, and innovation",
    },
    {
      date: "April 5, 2025",
      title: "Project Submission",
      description: "Submit your projects for evaluation",
    },
    {
      date: "April 6, 2025",
      title: "Judging & Results",
      description: "Project evaluation and winner announcement",
    },
  ];

  return (
    <section id="timeline" className="py-20 relative" style={{ backgroundColor: "#212529" }}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full opacity-20 filter blur-[100px]" style={{ backgroundColor: "#00B4D8" }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-20 filter blur-[120px]" style={{ backgroundColor: "#00B4D8" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
            Event <span style={{ color: "#00B4D8" }}>Timeline</span>
          </h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "#00B4D8" }}></div>
        </div>

        <div className="relative max-w-3xl mx-auto py-8">
          {/* Main vertical timeline line */}
          <div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 rounded-full transform md:-translate-x-1/2"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          ></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-12 md:mb-24 last:mb-0">
              {/* Timeline dot */}
              <div
                className={`absolute w-4 h-4 rounded-full border-4 z-20 transform -translate-y-1/2 ${
                  index % 2 === 0
                    ? "left-4 md:left-1/2 md:-translate-x-1/2"
                    : "left-4 md:left-1/2 md:-translate-x-1/2"
                }`}
                style={{
                  top: "50%",
                  backgroundColor: "#00B4D8",
                  borderColor: "#212529"
                }}
              ></div>

              {/* Event content - stacked on mobile, alternating on desktop */}
              <div
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block md:w-1/2"></div>
                <div
                  className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}
                >
                  <div
                    className="backdrop-blur-sm p-4 md:p-6 rounded-lg border shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                      borderColor: "rgba(255,255,255,0.1)"
                    }}
                  >
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2" style={{ color: "#00B4D8", fontFamily: "'Science Gothic', sans-serif" }}>
                      {event.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">
                      {event.date}
                    </p>
                    <p className="text-sm md:text-base text-gray-300">
                      {event.description}
                    </p>
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
