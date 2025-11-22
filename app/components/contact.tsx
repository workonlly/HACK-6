"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    // Simulate form submission
    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 relative"
      style={{ backgroundColor: "#212529" }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-20 filter blur-[120px]" style={{ backgroundColor: "#00B4D8" }}></div>
        <div className="absolute bottom-1/2 left-1/2 w-80 h-80 rounded-full opacity-20 filter blur-[100px]" style={{ backgroundColor: "#00B4D8" }}></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
            Get in <span style={{ color: "#00B4D8" }}>Touch</span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: "#00B4D8" }}></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Have questions? We're here to help! Reach out to us
            through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div
            className="backdrop-blur-md border shadow-lg rounded-xl overflow-hidden"
            style={{ 
              background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              borderColor: "rgba(255,255,255,0.1)"
            }}
          >
            <div className="bg-gray-800/50 p-6 border-b" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
              <h3 className="text-2xl font-bold text-white flex items-center" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
                <svg className="w-6 h-6 mr-3" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send us a Message
              </h3>
              <p className="text-gray-300 mt-2">
                We'd love to hear from you! Fill out the form below and we'll
                get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-12 px-2 transition-all duration-300 z-10 ${focusedField === "name" || formData.name
                        ? "-top-2.5 text-xs"
                        : "top-3 text-gray-400"
                      }`}
                    style={{ 
                      backgroundColor: "#212529",
                      color: focusedField === "name" || formData.name ? "#00B4D8" : undefined
                    }}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      className="w-full text-white rounded-lg pl-12 pr-4 py-3 border focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        borderColor: focusedField === "name" ? "#00B4D8" : "rgba(255,255,255,0.1)"
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-12 px-2 transition-all duration-300 z-10 ${focusedField === "email" || formData.email
                        ? "-top-2.5 text-xs"
                        : "top-3 text-gray-400"
                      }`}
                    style={{ 
                      backgroundColor: "#212529",
                      color: focusedField === "email" || formData.email ? "#00B4D8" : undefined
                    }}
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" />
                    </svg>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      className="w-full text-white rounded-lg pl-12 pr-4 py-3 border focus:outline-none transition-all"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        borderColor: focusedField === "email" ? "#00B4D8" : "rgba(255,255,255,0.1)"
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="relative text-gray-600">
                <label
                  htmlFor="subject"
                  className={`absolute left-4 text-gray-600 px-2 transition-all duration-300 z-10 ${focusedField === "subject" || formData.subject
                      ? "-top-2.5 text-xs"
                      : "top-3 text-gray-400"
                    }`}
                  style={{ 
                    backgroundColor: "#212529",
                    color: focusedField === "subject" || formData.subject ? "#00B4D8" : undefined
                  }}
                ></label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus("subject")}
                  onBlur={handleBlur}
                  className="w-full text-gray-400 rounded-lg px-4 py-3 border focus:outline-none transition-all appearance-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: focusedField === "subject" ? "#00B4D8" : "rgba(255,255,255,0.1)"
                  }}
                  required
                >
                  <option className="text-white" value="" style={{ backgroundColor: "#212529" }}>
                    Select a subject
                  </option>
                  <option className="text-white" value="general" style={{ backgroundColor: "#212529" }}>
                    General Inquiry
                  </option>
                  <option className="text-white" value="sponsorship" style={{ backgroundColor: "#212529" }}>
                    Sponsorship
                  </option>
                  <option className="text-white" value="registration" style={{ backgroundColor: "#212529" }}>
                    Registration
                  </option>
                  <option className="text-white" value="technical" style={{ backgroundColor: "#212529" }}>
                    Technical Support
                  </option>
                </select>
                <div className="absolute right-4 top-3.5 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-12 px-2 transition-all duration-300 z-10 ${focusedField === "message" || formData.message
                      ? "-top-2.5 text-xs"
                      : "top-3 text-gray-400"
                    }`}
                    style={{ 
                    backgroundColor: "#212529",
                    color: focusedField === "message" || formData.message ? "#00B4D8" : undefined
                  }}
                >
                  Message
                </label>
                <div className="relative">
                  <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    rows={4}
                    className="w-full text-white rounded-lg pl-12 pr-4 py-3 border focus:outline-none transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: focusedField === "message" ? "#00B4D8" : "rgba(255,255,255,0.1)"
                    }}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white transition-all px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-70 hover:opacity-90"
                style={{
                  backgroundColor: "#00B4D8",
                  boxShadow: "0 4px 14px rgba(0, 180, 216, 0.4)"
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitSuccess && (
                <div
                  className="mt-4 p-4 border rounded-lg text-center flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(34, 197, 94, 0.2)",
                    borderColor: "rgb(34, 197, 94)",
                    color: "rgb(187, 247, 208)"
                  }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    style={{ color: "rgb(74, 222, 128)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Your message has been sent successfully!
                </div>
              )}

              {submitError && (
                <div
                  className="mt-4 p-4 border rounded-lg text-center flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.2)",
                    borderColor: "rgb(239, 68, 68)",
                    color: "rgb(254, 202, 202)"
                  }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    style={{ color: "rgb(248, 113, 113)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Card */}
            <div
              className="backdrop-blur-md border shadow-lg rounded-xl p-6 md:p-8 text-center transition-all hover:transform hover:-translate-y-2"
              style={{ 
                background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                borderColor: "rgba(255,255,255,0.1)"
              }}
            >
              <div className="p-3 md:p-4 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
                Email Us
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Questions? Drop us a line
              </p>
              <a
                href="mailto:contact@example.com"
                className="text-gray-300 transition-all inline-block border-b border-dashed pb-1"
                style={{ 
                  borderColor: "rgba(255,255,255,0.3)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00B4D8";
                  e.currentTarget.style.borderColor = "#00B4D8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgb(209, 213, 219)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                }}
              >
                contact@example.com
              </a>
            </div>

            {/* Location Card */}
            <div
              className="backdrop-blur-md border shadow-lg rounded-xl p-6 md:p-8 text-center transition-all hover:transform hover:-translate-y-2"
              style={{ 
                background: "linear-gradient(to bottom right, rgba(255,255,255,0.02), rgba(255,255,255,0.05))",
                borderColor: "rgba(255,255,255,0.1)"
              }}
            >
              <div className="p-3 md:p-4 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
                Location
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Join us at the venue
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-all inline-block border-b border-dashed pb-1"
                style={{ 
                  borderColor: "rgba(255,255,255,0.3)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00B4D8";
                  e.currentTarget.style.borderColor = "#00B4D8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgb(209, 213, 219)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                }}
              >
                Your Location
              </a>
            </div>

            {/* Call Us Card - Full Width */}
            <div
              className="backdrop-blur-md border shadow-lg rounded-xl p-6 md:p-8 text-center transition-all md:col-span-2 hover:transform hover:-translate-y-2"
              style={{ 
                background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                borderColor: "rgba(255,255,255,0.1)"
              }}
            >
              <div className="p-3 md:p-4 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
                Call Us
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Mon-Fri, 9am-5pm
              </p>
              <div className="flex flex-col space-y-2">
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 transition-all border-b border-dashed pb-1 mx-auto"
                  style={{ 
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00B4D8";
                    e.currentTarget.style.borderColor = "#00B4D8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgb(209, 213, 219)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                >
                  +1 (234) 567-890
                </a>
                <a
                  href="tel:+1234567891"
                  className="text-gray-300 transition-all border-b border-dashed pb-1 mx-auto"
                  style={{ 
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00B4D8";
                    e.currentTarget.style.borderColor = "#00B4D8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgb(209, 213, 219)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                >
                  +1 (234) 567-891
                </a>
                <a
                  href="tel:+1234567892"
                  className="text-gray-300 transition-all border-b border-dashed pb-1 mx-auto"
                  style={{ 
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00B4D8";
                    e.currentTarget.style.borderColor = "#00B4D8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgb(209, 213, 219)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                >
                  +1 (234) 567-892
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
