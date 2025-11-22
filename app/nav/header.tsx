"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Judges", href: "#judges" },
  { name: "Prizes", href: "#prizes" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Organizers", href: "#team-section" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Certificates", href: "#certificate" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showHackText, setShowHackText] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Show HACK 5.0 text only when scrolled away from hero section
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setShowHackText(window.scrollY > heroHeight * 0.5);
      }

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    
    if (href === "/team") {
      router.push("/team");
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(33, 37, 41, 0.9)" : "transparent",
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div
            className={`transition-opacity duration-300 ${
              showHackText ? "opacity-0 hidden" : "opacity-100"
            }`}
          >
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
                href="#home"
                onClick={(e) => handleNavLinkClick(e, "#home")}
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

          <div
            className={`transition-opacity duration-300 whitespace-nowrap ${
              showHackText ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "#home")}
              className="text-2xl md:text-5xl font-bold ml-1"
              style={{
                color: "#00B4D8",
                fontFamily: "'Science Gothic', sans-serif",
                fontWeight: 700,
              }}
            >
              HACK<span className="text-white" style={{ fontFamily: "'Science Gothic', sans-serif" }}> 5.0</span>
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="text-base font-bold transition-all duration-300 relative group"
                  style={{
                    fontFamily: "'Science Gothic', sans-serif",
                    letterSpacing: "0.5px",
                  }}
                >
                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                    style={{
                      textShadow:
                        activeSection === link.href.substring(1)
                          ? "0 0 10px rgba(0, 180, 216, 0.5)"
                          : "none",
                    }}
                  >
                    {link.name}
                  </span>
                  
                  {/* Animated underline */}
                  <div
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                    style={{
                      backgroundColor: "#00B4D8",
                      boxShadow: "0 0 8px rgba(0, 180, 216, 0.6)",
                    }}
                  ></div>
                  
                  {/* Glowing background on active */}
                  {activeSection === link.href.substring(1) && (
                    <div
                      className="absolute inset-0 -z-10 rounded opacity-20"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, rgba(0, 180, 216, 0.3) 0%, transparent 70%)",
                        filter: "blur(8px)",
                      }}
                    ></div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white p-2 transition-transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden backdrop-blur-md overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "rgba(33, 37, 41, 0.95)" }}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`text-lg font-medium transition-colors block py-3 ${
                    activeSection === link.href.substring(1)
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{
                    color:
                      activeSection === link.href.substring(1)
                        ? "#00B4D8"
                        : undefined,
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
