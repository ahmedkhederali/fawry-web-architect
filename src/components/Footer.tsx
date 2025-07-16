import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
          {/* Left: Logo & Description */}
          <div className="flex-1 min-w-[220px] mb-8 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://www.diracsystems.com/wp-content/uploads/2023/08/logo-Dirac-fawry-3.png"
                alt="Dirac Systems"
                className="h-8"
              />

            </div>
            <p className="text-gray-600 mb-4">
              Dirac Systems empowers teams to transform raw data into clear,
              compelling visuals — making insights easier to share, understand, and
              act on.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
                  alt="Twitter"
                  className="h-6 w-6 opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-6 opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                  alt="GitHub"
                  className="h-6 w-6 opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6 opacity-70 hover:opacity-100"
                />
              </a>
            </div>
          </div>
          {/* Middle: Links */}
          <div className="flex-1 flex flex-col md:flex-row justify-center gap-16">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-secondary">
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-secondary">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-secondary">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="text-gray-600 hover:text-secondary transition-colors text-sm"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Right: Map */}
          <div className="flex-shrink-0 ml-0 lg:ml-12 mt-8 lg:mt-0">
            <div className="w-96 h-60 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Dirac Systems Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0123456789!2d31.235711315115!3d30.0444199818797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60c2c1eaf%3A0x2e2b2b2b2b2b2b2b!2sDirac%20Systems!5e0!3m2!1sen!2seg!4v1689000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t pt-6 text-sm text-gray-400">
          <span>© 2025 Dirac Systems. All rights reserved.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-secondary">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-secondary">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-secondary">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;