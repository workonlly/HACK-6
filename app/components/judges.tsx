"use client";

import React from "react";

interface Person {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
}

const mentors: Person[] = [
  {
    name: "Sourav Sahoo",
    role: " GSOC contributor and mentor 2018-19",
    company: "Computer Scientist @ Adobe",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227132/IMG_6677_jlwl9b.jpg",
    linkedin: "https://www.weekday.works/people/sourav-sahoo-souravsahoo",
  },
  {
    name: "Avinal",
    role: "GSOC mentor @ Fossology || GSOD Contributor 2020@VLC ",
    company: "SDE II @ RED HAT",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227115/WhatsApp_Image_2025-03-17_at_21.04.26_b63612c7_wb2qxh.jpg",
    linkedin: "https://githubcampus.expert/avinal/",
  },
  {
    name: "Udit Gulati",
    role: "GSoC 2019",
    company: "",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227112/WhatsApp_Image_2025-03-17_at_21.04.27_d3700681_y7zvf9.jpg",
    linkedin: "https://www.linkedin.com/in/uditgulati0/",
  },
  {
    name: "Amit Chambial",
    role: "",
    company: "SDE III @ Netomi",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227112/WhatsApp_Image_2025-03-17_at_21.04.28_a4067d69_txzega.jpg",
    linkedin: "http://linkedin.com/in/amit-chambial",
  },
  {
    name: "Nimit Bhardwaj",
    role: "",
    company: "Lead Tech @ D.E Shaw Group",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227115/WhatsApp_Image_2025-03-17_at_21.04.29_ff888811_s3x4iw.jpg",
    linkedin: "https://www.linkedin.com/in/nimit-bhardwaj-b137a3116",
  },
  {
    name: "Vishal Choudhary",
    role: "",
    company: "Computer Scientist @ Adobe",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227120/WhatsApp_Image_2025-03-17_at_21.04.30_df660d77_uxjhg5.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Amit Yadav",
    role: "",
    company: "Senior Blockchain Engineer @ Elys Network",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227116/WhatsApp_Image_2025-03-17_at_21.04.30_f3bbc256_nvtt4d.jpg",
    linkedin: "http://linkedin.com/in/amityadav9",
  },
  {
    name: "Vishal Bhardwaj",
    role: "",
    company: "SDE III @ Dialpad",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742301680/WhatsApp_Image_2025-03-18_at_14.40.09_176e54b2_wx2hgu.jpg",
    linkedin: "http://linkedin.com/in/vishal-bhardwaj-b72702114",
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <div
      className="group relative rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
      style={{
        background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
      }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)"
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
              {person.name}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{person.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ people }: { people: Person[] }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

export default function Judges() {
  return (
    <div className="min-h-screen text-white py-20" id="judges" style={{ backgroundColor: "#212529" }}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full opacity-20 filter blur-[100px]" style={{ backgroundColor: "#00B4D8" }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-20 filter blur-[120px]" style={{ backgroundColor: "#00B4D8" }}></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-8 h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg className="w-8 h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
            Mentor <span style={{ color: "#00B4D8" }}>And</span> Judges
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: "#00B4D8" }}></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our distinguished panel of mentors and judges who will guide
            and evaluate your innovations during HACK 5.0
          </p>
        </div>

        <Section people={mentors} />
      </div>
    </div>
  );
}
