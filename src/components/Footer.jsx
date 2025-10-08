// src/components/Footer.jsx
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* --- About --- */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Flipkart Stories</a></li>
            <li><a href="#" className="hover:text-blue-400">Press</a></li>
          </ul>
        </div>

        {/* --- Help --- */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Payments</a></li>
            <li><a href="#" className="hover:text-blue-400">Shipping</a></li>
            <li><a href="#" className="hover:text-blue-400">Cancellation & Returns</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400">Report Infringement</a></li>
          </ul>
        </div>

        {/* --- Policy --- */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Policy</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Return Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Use</a></li>
            <li><a href="#" className="hover:text-blue-400">Security</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
            <li><a href="#" className="hover:text-blue-400">Sitemap</a></li>
          </ul>
        </div>

        {/* --- Contact --- */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Hyderabad, India
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@flipkartclone.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 98765 43210
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500"><Facebook /></a>
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
            <a href="#" className="hover:text-pink-500"><Instagram /></a>
            <a href="#" className="hover:text-red-500"><Youtube /></a>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Flipkart Clone — Designed by <span className="text-blue-400 font-semibold">Anil Thupalli</span>
      </div>
    </footer>
  );
};

export default Footer;
