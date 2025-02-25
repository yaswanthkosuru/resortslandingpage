import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaCommentDots,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="min-h-[60vh] bg-primary text-gray-300 flex flex-col">
      {/* Main content area */}
      <main className="flex-grow">{/* Your main content goes here */}</main>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Contact Section */}
            <div>
              <h2 className="text-2xl font-light mb-6">ELEMENTIS</h2>
              <div className="space-y-2">
                <p>Contact Us</p>
                <p className="text-sm">info@ELEMENTIS.co</p>
                <p className="text-sm">+62 823 4078 1817</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Destinations
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Wellness
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Innovation
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Nature
                </a>
              </div>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  The Story
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  New Developments
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Press Room
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Careers
                </a>
              </div>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="mb-6">Stay Connected</h3>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaCommentDots size={24} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaTiktok size={24} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
            <p className="text-sm mb-4 md:mb-0">
              © 2025 ELEMENTIS. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Policies and Terms
              </a>
              <p className="text-sm">Website by Eleone</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
