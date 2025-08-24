import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto px-4 py-6">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 md:gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] lg:gap-12 w-full">
          {/* Logo & Description */}
          <div className="col-span-3 md:col-span-4 lg:col-span-1 min-w-[220px]">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/DiracSystems.png"
                alt="Dirac Systems"
                className="h-auto w-[110px] rounded-xl shadow-lg border-4 border-white bg-white object-contain"
              />
            </div>
            <p className="text-gray-600 mb-4 text-justify">
              Dirac Systems empowers teams to transform raw data into clear,
              compelling visuals — making insights easier to share, understand,
              and act on.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
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

          {/* Product */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-secondary">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-gray-600 hover:text-secondary text-sm">Features</Link></li>
              <li><Link to="/solutions" className="text-gray-600 hover:text-secondary text-sm">Pricing</Link></li>
              <li><Link to="/solutions" className="text-gray-600 hover:text-secondary text-sm">Integrations</Link></li>
              <li><Link to="/solutions" className="text-gray-600 hover:text-secondary text-sm">Changelog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-secondary">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-secondary text-sm">Documentation</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-secondary text-sm">Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-secondary">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-600 hover:text-secondary text-sm">About</Link></li>
              <li><Link to="/career" className="text-gray-600 hover:text-secondary text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-secondary text-sm">Contact</Link></li>
              <li><Link to="/partners" className="text-gray-600 hover:text-secondary text-sm">Partners</Link></li>
            </ul>
          </div>

          {/* Map */}
          <div className="col-span-3 md:col-span-1 lg:col-span-1 mx-auto md:mx-0 max-w-96 md:max-w-none">
            <div className="w-full h-60 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Dirac Systems Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.893237695716!2d31.323863376202844!3d30.097243816065983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581586ce3388dd%3A0x64fcb986dc43a59d!2sDirac%20Systems!5e0!3m2!1sen!2seg!4v1754296950203!5m2!1sen!2seg"
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
            <Link to="#" className="hover:text-secondary">Privacy Policy</Link>
            <Link to="#" className="hover:text-secondary">Terms of Service</Link>
            <Link to="#" className="hover:text-secondary">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;