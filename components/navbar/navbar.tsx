"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Using Lucide icons
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const title = "Salim Baktash";
  const menuItems = ["Home", "About", "Skills", "Experience", "ContactMe"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-lg z-50 h-14 flex items-center justify-center">
      <div className="container mx-auto px-6 flex justify-between items-center h-full max-w-4xl">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-primary">
          <span className="text-blue-400">{title}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-white hover:text-blue-400 transition duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Full-Width Dropdown */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-black border-t border-gray-700 shadow-lg">
          <div className="flex flex-col py-2 text-center">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-6 py-3 text-white hover:bg-blue-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
