import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Mail,
  BookOpen,
  ChevronDown,
  Download,
} from "lucide-react";
import preshtech from "../assets/preshtech.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPaidDropdown, setShowPaidDropdown] = useState(false);
  const [showFreeDropdown, setShowFreeDropdown] = useState(false);

  const paidCourses = [
    { title: "Full Stack Web Development", price: "$417.6" },
    { title: "Frontend Development (React)", price: "$208.82" },
    { title: "Backend Development (Python/FastAPI)", price: "$243.62" },
    { title: "Database Management (MongoDB)", price: "$139.21" },
    { title: "HTML, CSS & Tailwindcss Advanced", price: "$139.21" },
    { title: "JavaScript Advanced", price: "$104.41" },
    { title: "WordPress Development", price: "$278.42" },
    { title: "NextJS", price: "$278.42" },
  ];

  const freeCourses = [
    "HTML & CSS Basics",
    "JavaScript Fundamentals",
    "Intro to ReactJS",
    "Getting Started with Git & GitHub",
    "AI Content Creation",
  ];

  const togglePaidDropdown = () => {
    setShowPaidDropdown((prev) => !prev);
    setShowFreeDropdown(false);
  };

  const toggleFreeDropdown = () => {
    setShowFreeDropdown((prev) => !prev);
    setShowPaidDropdown(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const openFormPage = () => {
    window.open(
      "https://docs.google.com/forms/d/1FFLYFz8f_0VZGW2fS23SSiUPu8VrT82rhu36EcCzh6o/preview",
      "_blank"
    );
  };

  return (
    <nav className="bg-gray-800 text-white relative shadow-md z-[999]">
      <div className="flex justify-between items-center p-4 px-6 md:px-10">
        <div className="flex flex-col items-center">
          <img src={preshtech} alt="Logo" className="h-10 w-10" />
          <p className="text-xl font-bold leading-none -mt-1">
            Pres<span className="text-orange-500">HT</span>ech
          </p>
        </div>
        <div className="hidden md:flex space-x-8 items-center text-orange-300">
          <div
            onClick={() => scrollToSection("services")}
            className="flex items-center gap-2 hover:text-orange-500 transition cursor-pointer"
          >
            <Briefcase size={18} /> Services
          </div>
          <div
            onClick={() => scrollToSection("works")}
            className="flex items-center gap-2 hover:text-orange-500 transition cursor-pointer"
          >
            <Home size={18} /> Works
          </div>
          <div className="relative cursor-pointer">
            <div
              onClick={toggleFreeDropdown}
              className="flex items-center gap-1 hover:text-orange-500 transition"
            >
              <BookOpen size={18} /> Free Courses
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  showFreeDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {showFreeDropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 z-50">
                {freeCourses.map((course, index) => (
                  <div
                    key={index}
                    onClick={() => scrollToSection("contact")}
                    className="w-full px-4 py-2 text-orange-300 hover:bg-gray-700 hover:text-orange-500 transition cursor-pointer"
                  >
                    {course}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative cursor-pointer">
            <div
              onClick={togglePaidDropdown}
              className="flex items-center gap-1 hover:text-orange-500 transition"
            >
              <BookOpen size={18} /> Paid Courses
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  showPaidDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {showPaidDropdown && (
              <div className="absolute left-0 mt-2 w-70 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-3 z-50">
                {paidCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex justify-between px-4 py-2 text-orange-300 hover:bg-gray-700 hover:text-orange-500 transition cursor-pointer"
                  >
                    <span>{course.title}</span>
                    <span className="text-sm text-gray-400">{course.price}</span>
                  </div>
                ))}

                <div className="px-4 pt-4 border-t border-gray-700 mt-2">
                  <p className="text-sm text-gray-400 mb-2 italic">
                    Note: Please click below to open the application form page.
                  </p>

                  <div
                    onClick={openFormPage}
                    className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer"
                  >
                    <Download size={18} />
                    Open Form Page
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 hover:text-orange-500 transition cursor-pointer"
          >
            <Mail size={18} /> Contact
          </div>
        </div>
        <div className="md:hidden">
          <div
            className="text-orange-400 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-full bg-gray-900 border-t border-gray-700 flex flex-col text-orange-300 py-4 md:hidden max-h-[75vh] overflow-y-auto z-[999]">

          <div
            onClick={() => scrollToSection("services")}
            className="flex items-center gap-2 px-6 py-2 hover:bg-gray-700 hover:text-orange-500 transition cursor-pointer"
          >
            <Briefcase size={18} /> Services
          </div>

          <div
            onClick={() => scrollToSection("works")}
            className="flex items-center gap-2 px-6 py-2 hover:bg-gray-700 hover:text-orange-500 transition cursor-pointer"
          >
            <Home size={18} /> Works
          </div>
          <div className="px-6 mt-2 relative z-[999]">
            <div
              onClick={toggleFreeDropdown}
              className="flex items-center justify-between w-full py-3 hover:text-orange-500 transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <BookOpen size={18} /> Free Courses
              </span>

              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  showFreeDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {showFreeDropdown && (
              <div className="rounded-lg mt-2 max-h-64 overflow-y-scroll border border-gray-700 shadow-xl">
                {freeCourses.map((course, index) => (
                  <div
                    key={index}
                    onClick={() => scrollToSection("contact")}
                    className="px-4 py-3 text-orange-300 hover:bg-gray-700 hover:text-orange-500 transition cursor-pointer"
                  >
                    {course}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="px-6 mt-4 relative z-[999]">
            <div
              onClick={togglePaidDropdown}
              className="flex items-center justify-between w-full py-3 hover:text-orange-500 transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <BookOpen size={18} /> Paid Courses
              </span>

              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  showPaidDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {showPaidDropdown && (
              <div className="bg-gray-800 rounded-lg mt-2 max-h-72 overflow-y-scroll border border-gray-700 shadow-xl">
                {paidCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex justify-between px-4 py-3 text-orange-300 hover:bg-gray-700 hover:text-orange-500 transition cursor-pointer"
                  >
                    <span className="text-sm">{course.title}</span>
                    <span className="text-xs text-gray-400">{course.price}</span>
                  </div>
                ))}

                <div className="px-4 pt-3 border-t border-gray-700 mt-2 mb-3">
                  <p className="text-xs text-gray-400 mb-2 italic">
                    Note: Click below to open the application form page.
                  </p>

                  <div
                    onClick={openFormPage}
                    className="flex items-center justify-center gap-2 bg-orange-500 text-white text-sm px-3 py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer"
                  >
                    <Download size={14} />
                    Open Form Page
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 px-6 py-2 hover:bg-gray-700 hover:text-orange-500 transition cursor-pointer"
          >
            <Mail size={18} /> Contact
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
