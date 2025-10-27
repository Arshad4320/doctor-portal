import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-inner mt-10 ">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 ">
        {/* Left side - Brand name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-600">Doctor Portal</h2>
          <p className="text-gray-600 text-sm mt-1">
            Your trusted health companion.
          </p>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/"
            className="text-blue-600 hover:underline text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-blue-600 hover:underline text-lg font-medium"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="text-blue-600 hover:underline text-lg font-medium"
          >
            Blog
          </Link>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex gap-5 text-blue-600 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-800 duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Doctor Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
