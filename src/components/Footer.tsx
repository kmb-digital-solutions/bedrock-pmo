import React from "react";
import Logo from "./Logo";

interface FooterProps {
  // Add any props if needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  PMO Setup & Optimization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Strategic Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Team Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Performance Metrics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Whitepapers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bedrockpmo.com?subject=Careers at Bedrock PMO"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bedrockpmo.com?subject=Contact Request from Website"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="mt-4 text-base text-gray-300">
              Transforming project management for organizations of all sizes.
            </p>
            <div className="mt-4">
              <p className="text-base text-gray-300">
                &copy; {new Date().getFullYear()} Bedrock PMO. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
