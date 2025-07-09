"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Part: Company Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* Replace with your actual logo path and alt text */}
              <Image
                src="/assets/logo.svg"
                alt="Company Logo"
                width={60}
                height={60}
              />
            </Link>
          </div>

          {/* Middle Part: Navigation Options (Desktop) */}
          <div className="hidden md:flex md:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Services
            </Link>

            <Link
              href="/cart"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Cart
            </Link>
            <Link
              href="/register"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          {/* Right Part: Appointment Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/appointment"
              className="px-4 py-2 rounded-md border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-300"
            >
              Appointment
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger / Close icon */}
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
        </div>
      </div>

      {/* Mobile Menu Content (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {" "}
            {/* Added items-center for centered links */}
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/cart"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              Cart
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Register
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Login
            </Link>
            {/* Appointment Button for Mobile */}
            <Link
              href="/appointment"
              className="mt-4 w-full text-center px-4 py-2 rounded-md border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-300"
            >
              Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
