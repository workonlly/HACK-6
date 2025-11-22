"use client";

export default function About() {
  const stats = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "500+",
      text: "Participants"
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "₹ 1,50,000",
      text: "Prize Pool"
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "48",
      text: "Hours"
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "3",
      text: "Tracks"
    }
  ];

  return (
    <section id="about" className="py-20 relative" style={{ backgroundColor: "#212529" }}>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
            About <span style={{ color: "#00B4D8" }}>HACK 5.0</span>
          </h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "#00B4D8" }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="px-5 md:px-0">
            <p className="text-lg mb-6 leading-relaxed text-justify md:text-left text-gray-300">
              HACK 5.0 is the fifth edition of the national-level onsite
              hackathon organized by the Computer Science Engineers' Community
              (CSEC) of the Department of Computer Science and Engineering, NIT
              Hamirpur. This premier event brings together the brightest minds
              in technology to solve real-world problems through innovation and
              collaboration.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-justify md:text-left text-gray-300">
              Over 48 hours, participants will form teams, ideate, build, and
              present their solutions to a panel of industry experts. With
              mentorship, workshops, and networking opportunities, HACK 5.0 is
              more than just a competition—it's a platform for growth, learning,
              and technological advancement.
            </p>
            <p className="text-lg leading-relaxed text-justify md:text-left text-gray-300">
              Whether you're a seasoned developer or just starting your coding
              journey, HACK 5.0 welcomes all passionate individuals ready to
              make an impact. Join us for this thrilling onsite experience and
              push the boundaries of innovation!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-sm p-4 md:p-6 rounded-lg border flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
                style={{
                  background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  borderColor: "rgba(255,255,255,0.1)"
                }}
              >
                <div className="p-3 md:p-4 rounded-full mb-3 md:mb-4" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  {stat.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
                  {stat.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
