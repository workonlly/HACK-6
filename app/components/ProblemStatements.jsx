import { useState } from 'react';

const ProblemStatements = () => {
  const [activeTab, setActiveTab] = useState(1);

  const problemStatements = [
    {
      id: 1,
      title: 'Lightweight Mobile Network Traffic Analyzer',
      content: (
        <>
          <p className="font-bold mb-3">Challenge:</p>
          <p className="mb-4">
            Design and develop an Android app that captures and visualizes network traffic
            (Wi-Fi/cellular) in real time without requiring root access. The tool should help users
            understand what types of data apps are sending/receiving.
          </p>

          <p className="font-bold mb-3">Key Features to Implement:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Capture network flows per app.</li>
            <li>Display basic protocol info (HTTP, DNS, TCP/UDP).</li>
            <li>Alert when suspicious traffic patterns (e.g., unknown servers) are observed.</li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <p className="mb-4">
            A mobile app with UI showing live traffic stats, and a simple report summarizing potential privacy concerns.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: 'Smart SMS/Call Fraud Detector',
      content: (
        <>
          <p className="font-bold mb-3">Challenge:</p>
          <p className="mb-4">
            Modern mobiles are flooded with spam messages, phishing SMS, and fraudulent calls.
            Build a mobile solution that monitors incoming SMS and call metadata to detect
            potential fraud using rule-based + lightweight ML techniques.
          </p>

          <p className="font-bold mb-3">Key Features to Implement:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Parse and classify SMS/call logs.</li>
            <li>Detect phishing/scam patterns (keyword matching, sender anomalies).</li>
            <li>Provide user warnings and safe action suggestions.</li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <p className="mb-4">
            An Android proof-of-concept app that flags scam messages/calls with category labels
            (e.g., "Phishing", "Spam", "Unknown") and history logging.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: 'Mobile App Vulnerability Scanner',
      content: (
        <>
          <p className="font-bold mb-3">Challenge:</p>
          <p className="mb-4">
            Create a tool (possibly cross-platform CLI + Android UI) that scans installed apps on an Android
            device for common security issues like excessive permissions, outdated SDKs,
            or insecure hardcoded URLs.
          </p>

          <p className="font-bold mb-3">Key Features to Implement:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>List installed apps with permission summary.</li>
            <li>Flag potential risky permissions (SMS, contacts, camera, location).</li>
            <li>Suggest secure alternatives or mitigation.</li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <p className="mb-4">
            A scanner that outputs a readable security assessment report for installed mobile apps.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: 'Secure Peer-to-Peer Chat Module',
      content: (
        <>
          <p className="font-bold mb-3">Challenge:</p>
          <p className="mb-4">
            Build a secure mobile chat prototype (can be Android or cross-platform) supporting:
          </p>
          
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>End-to-end encryption (E2EE),</li>
            <li>Optional self-destructing messages,</li>
            <li>Basic anonymity (no central server logging).</li>
          </ul>

          <p className="font-bold mb-3">Key Features to Implement:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>E2EE using well-known libraries (e.g., libsodium / Signal9X protocols).</li>
            <li>Timer-based auto deletion of messages from both devices.</li>
            <li>Minimal UI for chatting.</li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <p className="mb-4">
            A working mobile chat app where messages are encrypted and can auto-expire securely after a timeout.
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: 'Privacy Guardian for Mobile Sensor & App Usage',
      content: (
        <>
          <p className="font-bold mb-3">Challenge:</p>
          <p className="mb-4">
            Build a mobile utility that:
          </p>
          
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>Tracks sensor permissions usage (microphone, camera, GPS) per app,</li>
            <li>Logs suspicious on-device activity,</li>
            <li>Alerts the user when an app uses a sensitive sensor in the background.</li>
          </ul>

          <p className="font-bold mb-3">Key Features to Implement:</p>

          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Background service to monitor sensor accesses.</li>
            <li>Alerts/notifications when unexpected access happens.</li>
            <li>Permissions audit and recommendations.</li>
          </ul>

          <p className="font-bold mb-3">Expected Outcome:</p>

          <p className="mb-4">
            A privacy-monitoring app with dashboard summarizing sensor usage trends and alerts.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-3xl font-bold text-[#5A2A25] mb-8">Problem Statements</h4>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 border-b-2 border-[#5A2A25]">
            {problemStatements.map((ps) => (
              <button
                key={ps.id}
                onClick={() => setActiveTab(ps.id)}
                className={`px-6 py-3 font-medium transition-all duration-200 relative ${
                  activeTab === ps.id
                    ? 'text-[#E8A87C] border-b-2 border-[#E8A87C] -mb-0.5'
                    : 'text-[#33110E] hover:text-[#5A2A25]'
                }`}
              >
                Problem Statement {ps.id}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white">
          {problemStatements.map((ps) => (
            <div
              key={ps.id}
              className={`${activeTab === ps.id ? 'block' : 'hidden'}`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#5A2A25] pb-3 border-b-2 border-[#E8A87C] inline-block">
                  {ps.title}
                </h3>
              </div>
              <div className="prose max-w-none text-[#33110E]">{ps.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
