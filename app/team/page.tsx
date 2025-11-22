"use client";

import { useState } from "react";

interface TeamMember {
  name: string;
  batch: string;
  imgSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Tanishq Verma",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945246/IMG_20240414_053937_668_nbxfaq.jpg",
  },
  {
    name: "Krishna Narzary",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728579687/krishna_zp05q6.jpg",
  },
  {
    name: "Tanishq Chauhan",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945307/IMG_20231001_124926_evwtzl.jpg",
  },
  {
    name: "Shryansh",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738136152/csec_shry_kwh5tn.jpg",
  },
  {
    name: "Harshal",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079965/Harshal_1_ljrjiy.jpg",
  },
  {
    name: "Kirti Sharma",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080065/IMG-20241110-WA0018_1_anaulw.jpg",
  },
  {
    name: "Arshita",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945377/IMG_20240920_223145_tc4rbp.jpg",
  },
  {
    name: "Prince Jaiswal",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945441/IMG_20230720_192947_flr5wg.jpg",
  },
  {
    name: "Aditya Kumar",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080338/IMG_0237_beywm0.jpg",
  },
  {
    name: "Tanmay Sharma",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnif0edly/image/upload/v1728535568/IMG-20240307-WA0033_mfojpp.jpg",
  },
  {
    name: "Ankush Thakur",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080439/IMG_20240720_122823_ikkncj.jpg",
  },
  {
    name: "Arnav Gupta",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080697/e6a54564-6a33-48e1-ac19-e847758fd349_hqfhh8.jpg",
  },
  {
    name: "Avinash Sharma",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1739191084/AVIN_exe_uu0yqx_k2wamg.webp",
  },
  {
    name: "Himanshu Gupta",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739194635/WhatsApp_Image_2025-02-10_at_18.19.54_eddb4d72_dah6jq.jpg",
  },
  {
    name: "Akash Kanwar",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739960542/akash_bqdy3d.jpg",
  },
  {
    name: "Isha",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080640/IMG_5198_xz4pzl.jpg",
  },
  {
    name: "Chhavi Thakur",
    batch: "2023",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944805/IMG-20240308-WA0077_nq107z.jpg",
  },
  {
    name: "Lakshay Lalia",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080749/IMG_20241101_171749_392_auyw2u.jpg",
  },
  {
    name: "Saksham Chhabra",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741525859/IMG-20240323-WA0015_dcsbh7_exdrze.jpg",
  },
  {
    name: "Navdeep Singh",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944985/IMG_4625-1_xkfqoy.jpg",
  },
  {
    name: "Prince Khandelwal",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945058/IMG-20240920-WA0013_l6p9tg.jpg",
  },
  {
    name: "Piyush Mishra",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738138149/IMG-20250112-WA0084_akkh6m.jpg",
  },
  {
    name: "Ayush Sharma",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945095/IMG-20240513-WA0233_jgmvog.jpg",
  },
  {
    name: "Avirat Mahajan",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945139/IMG-20240410-WA0016_eow17z.jpg",
  },
  {
    name: "Vansh Pal",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080858/WIN_20240415_20_11_54_Pro_zw1squ.jpg",
  },
  {
    name: "Sujal Choudhary",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738091293/sujal_sosrec_ghouip.jpg",
  },
  {
    name: "Anshuman Kapoor",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728535411/anshuman_ugy7ne.jpg",
  },
  {
    name: "Abhay Chaudhary",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738081032/IMG-20240920-WA0002_kxrj0r.jpg",
  },
  {
    name: "Himanshu Mahajan",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945205/formal_oi5vpb.jpg",
  },
  {
    name: "Harsh Goel",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1731838897/WhatsApp_Image_2024-11-17_at_15.51.00_2b583045_kqcd5x.jpg",
  },
  {
    name: "Pratyush Pragyey",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1721114549/rptdgsgi7qzijyojnja0.jpg",
  },
  {
    name: "Rudesh Kumar",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082144/photo_k91tqe.jpg",
  },
  {
    name: "Lavish",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/duezus2xn/image/upload/v1738075460/lavish_mupjh3.jpg",
  },
  {
    name: "Prashant Thakur",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/duezus2xn/image/upload/v1738075650/prashant_2_vsdpsb.jpg",
  },
  {
    name: "Aryan Sharma",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087174/IMG_20241120_152145246_HDR_pavhc9.jpg",
  },
  {
    name: "Sanket Singh Sameer",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087686/1000156654-01_ridyfs.jpg",
  },
  {
    name: "Raman Bansal",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088074/profile_badm2f.jpg",
  },
  {
    name: "Utkarsh Shukla",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088144/IMG-20241220-WA0110_qptedf.jpg",
  },
  {
    name: "Anshu Kumari",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134087/IMG_20250128_201927_kwt4vg.jpg",
  },
  {
    name: "Anilove",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088682/IMG20241110215944_qx4ejt.jpg",
  },
  {
    name: "Bhola Prasad Sah",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088411/1738076772514_ql73vg.jpg",
  },
  {
    name: "Tanmay Singh",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134170/IMG-20240818-WA0002_dolerx.jpg",
  },
  {
    name: "Tanisha",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088626/IMG_20241207_155127_mls1zh.jpg",
  },
  {
    name: "Aakriti",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738089007/IMG_20250128_235644_197_yttpst.jpg",
  },
  {
    name: "Chetna Singh",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134304/c823d071-af30-45a7-9182-a85015e0cb33_fn17g3.jpg",
  },
  {
    name: "Divyam",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134704/WhatsApp_Image_2024-11-10_at_10.47.39_PM_lpvlpg.jpg",
  },
  {
    name: "Sujal",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738089730/IMG_20241030_184111_nlzhqz.jpg",
  },
];

const getRole = (batch: string) => {
  switch (batch) {
    case "2028":
      return "Member";
    case "2027":
      return "Executive";
    case "2026":
      return "Lead";
    default:
      return "";
  }
};

export default function Page() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredMembers = selectedYear
    ? teamMembers.filter((member) => Number(member.batch) === selectedYear)
    : teamMembers;

  return (
    <div id="team" className="min-h-screen text-white" style={{ backgroundColor: "#212529" }}>
      <nav
        className="container mx-auto px-6 flex items-center fixed z-100 justify-between gap-x-4 top-0 left-0 right-0 backdrop-blur-md py-3 shadow-lg"
        style={{ backgroundColor: "rgba(33, 37, 41, 0.9)" }}
      >
        <div className="flex items-center gap-x-4">
          <div className="flex items-center">
            {/* CSEC Logo */}
            <a
              href="https://csec.nith.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 mr-3 transition-transform hover:rotate-360 duration-[2s]"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
                alt="CSEC Logo"
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))",
                }}
              />
            </a>

            {/* Separator */}
            <div className="h-7 w-px bg-gray-500 mx-3"></div>

            {/* HACK Logo */}
            <a
              href="/"
              className="w-12 h-12 mr-3 transition-transform hover:scale-110 duration-300"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29_20250208_222328_0000-50pdDbAwyrTeA1mMlMT3c72vROO2oA.png"
                alt="HACK Logo"
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 0 5px rgba(117, 2, 15, 0.5))",
                }}
              />
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <span className="relative z-10 font-bold text-3xl md:text-5xl lg:text-6xl text-white">
            <span style={{ color: "#00B4D8" }} className="inline-block">
              HACK
            </span>{" "}
            <span>5.0</span>
          </span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Team <span style={{ color: "#00B4D8" }}>CSEC</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: "#00B4D8" }}></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the talented individuals who make up our diverse team.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
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
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span className="text-gray-300">Filter by Year:</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 sm:gap-4 w-full sm:w-auto justify-center">
              {[null, 2026, 2027, 2028].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className="px-4 py-2 text-sm sm:text-base rounded-lg transition-colors whitespace-nowrap"
                  style={{
                    backgroundColor:
                      selectedYear === year
                        ? "#00B4D8"
                        : "rgba(255,255,255,0.05)",
                    color: selectedYear === year ? "white" : "rgb(209, 213, 219)",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedYear !== year) {
                      e.currentTarget.style.backgroundColor = "rgba(0, 180, 216, 0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedYear !== year) {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                    }
                  }}
                >
                  {year === null ? "All Years" : `${year}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: "rgba(0, 180, 216, 0.2)" }}
                      >
                        {member.batch}
                      </span>
                      <span
                        className="inline-block px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: "rgba(0, 180, 216, 0.2)" }}
                      >
                        {getRole(member.batch)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
