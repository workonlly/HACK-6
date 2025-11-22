"use client";

import React from "react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
  };

  return (
    <footer
      className="border-t pt-16 pb-8"
      style={{ backgroundColor: "#212529", borderColor: "rgba(255,255,255,0.1)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* CSEC Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <a
                href="https://csec.nith.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
                    alt="CSEC Logo"
                    className="w-full h-full object-contain rounded-lg shadow-lg"
                  />
                </div>
              </a>
              <span className="text-2xl font-bold text-white">CSEC</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Empowering innovation through code, creativity, and collaboration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://discord.com/invite/kneqCFxKHY"
                target="_blank"
                className="text-gray-400 transition-colors"
                rel="noreferrer"
                style={{ color: "rgb(156, 163, 175)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00B4D8")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgb(156, 163, 175)")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hacknith?igsh=N3VtczNwa3pjNjNo"
                target="_blank"
                className="text-gray-400 transition-colors"
                rel="noreferrer"
                style={{ color: "rgb(156, 163, 175)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00B4D8")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgb(156, 163, 175)")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/csec_nith?t=Ubyv6_7SLUkdaxtBS8MUew&s=09"
                target="_blank"
                className="text-gray-400 transition-colors"
                rel="noreferrer"
                style={{ color: "rgb(156, 163, 175)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00B4D8")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgb(156, 163, 175)")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/nith-csec/"
                target="_blank"
                className="text-gray-400 transition-colors"
                rel="noreferrer"
                style={{ color: "rgb(156, 163, 175)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00B4D8")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgb(156, 163, 175)")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "#home")}
                  className="text-gray-400 text-lg transition-colors flex items-center"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>{" "}
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className="text-gray-400 text-lg transition-colors flex items-center"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>{" "}
                  About
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  onClick={(e) => handleLinkClick(e, "#timeline")}
                  className="text-gray-400 text-lg transition-colors flex items-center"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>{" "}
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#prizes"
                  onClick={(e) => handleLinkClick(e, "#prizes")}
                  className="text-gray-400 text-lg transition-colors flex items-center"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>{" "}
                  Prizes
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  onClick={(e) => handleLinkClick(e, "#sponsors")}
                  className="text-gray-400 text-lg transition-colors flex items-center"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>{" "}
                  Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://dot-puma-97f.notion.site/Hack-5-0-Venue-19f095b2daf9809e86e5f0a3fcb7d3df"
                  target="_blank"
                  className="text-gray-400 text-lg cursor-pointer transition-colors"
                  rel="noreferrer"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  Venue Guide
                </a>
              </li>
              <li>
                <a
                  href="https://dot-puma-97f.notion.site/Hack-5-0-Hacker-s-Guide-19f095b2daf980058a2de1c0691aef59?pvs=74"
                  target="_blank"
                  className="text-gray-400 text-lg cursor-pointer transition-colors"
                  rel="noreferrer"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  Hacker&apos;s Guide
                </a>
              </li>
              <li>
                <a
                  href="/coc"
                  className="text-gray-400 text-lg transition-colors"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/GUSdHK8x"
                  target="_blank"
                  className="text-gray-400 text-lg transition-colors"
                  rel="noreferrer"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, "#faq")}
                  className="text-gray-400 text-lg transition-colors"
                  style={{ color: "rgb(156, 163, 175)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00B4D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgb(156, 163, 175)")
                  }
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4 text-lg leading-relaxed">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 border sm:rounded-r-none h-auto mb-2 sm:mb-0"
                style={{
                  backgroundColor: "rgba(33, 37, 41, 0.5)",
                  borderColor: "rgba(0, 180, 216, 0.5)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#00B4D8")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(0, 180, 216, 0.5)")
                }
              />
              <button
                className="text-white px-6 py-3 rounded-lg sm:rounded-l-none h-auto transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#00B4D8" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-8 text-center text-gray-400 text-sm"
          style={{ borderColor: "rgba(0, 180, 216, 0.1)" }}
        >
          <p>
            Designed with ❤️ by the HACK 5.0 Team | Powered by innovation and
            creativity
          </p>
        </div>
      </div>
    </footer>
  );
}
