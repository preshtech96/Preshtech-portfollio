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
import coruse from "../assets/courses-form.pdf";

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

  return (
    <nav className="bg-gray-800 text-white relative shadow-md">
      <div className="flex justify-between items-center p-4 px-6 md:px-10">
        <div className="flex flex-col items-center">
          <img src={preshtech} alt="Logo" className="h-10 w-10" />
          <p className="text-xl font-bold text-center leading-none -mt-1">
            Pres<span className="text-orange-500">HT</span>ech
          </p>
        </div>
        <div className="hidden md:flex space-x-8 items-center text-orange-300">
          <button
            onClick={() => scrollToSection("services")}
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <Briefcase size={18} />
            Services
          </button>

          <button
            onClick={() => scrollToSection("works")}
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <Home size={18} />
            Works
          </button>
          <div className="relative">
            <button
              onClick={toggleFreeDropdown}
              className="flex items-center gap-1 hover:text-orange-500 transition"
            >
              <BookOpen size={18} />
              Free Courses
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  showFreeDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
            {showFreeDropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 z-50">
                {[
                  "HTML & CSS Basics",
                  "JavaScript Fundamentals",
                  "Intro to ReactJS",
                  "Python for Beginners",
                  "Getting Started with Git & GitHub",
                  "AI Content Creation",
                ].map((course, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection("contact")}
                    className="block w-full text-left px-4 py-2 text-orange-300 hover:bg-gray-700 hover:text-orange-500 transition"
                  >
                    {course}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={togglePaidDropdown}
              className="flex items-center gap-1 hover:text-orange-500 transition"
            >
              <BookOpen size={18} />
              Paid Courses
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  showPaidDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showPaidDropdown && (
              <div className="absolute left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-3 z-50">
                  {paidCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-4 py-2 text-orange-300 hover:bg-gray-700 hover:text-orange-500 transition"
                  >
                    <span>{course.title}</span>
                    <span className="text-sm text-gray-400">{course.price}</span>
                  </div>
                ))}
                <div className="px-4 pt-4 border-t border-gray-700 mt-2">
                  <p className="text-sm text-gray-400 mb-2 italic">
                    Note: Please download and fill out the form below to apply.
                  </p>
                  <a
                    href={coruse}
                    download={"course-form.pdf"}
                    className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                  >
                    <Download size={18} />
                    Download Form
                  </a>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <Mail size={18} />
            Contact
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-orange-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="w-full bg-gray-900 border-t border-gray-700 flex flex-col text-orange-300 py-4 md:hidden max-h-[75vh] overflow-y-auto">
          <button
            onClick={() => scrollToSection("services")}
            className="flex items-center gap-2 px-6 py-2 hover:bg-gray-700 hover:text-orange-500 transition"
          >
            <Briefcase size={18} /> Services
          </button>
          <button
            onClick={() => scrollToSection("works")}
            className="flex items-center gap-2 px-6 py-2 hover:bg-gray-700 hover:text-orange-500 transition"
          >
            <Home size={18} /> Works
          </button>
          <div className="px-6 mt-2">
            <button
              onClick={togglePaidDropdown}
              className="flex items-center justify-between w-full py-2 hover:text-orange-500 transition"
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
            </button>

            {showPaidDropdown && (
              <div className="bg-gray-800 rounded-lg mt-1 max-h-64 overflow-y-auto">
                {paidCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-4 py-2 text-orange-300 hover:bg-gray-700 hover:text-orange-500 transition"
                  >
                    <span className="text-sm">{course.title}</span>
                    <span className="text-xs text-gray-400">{course.price}</span>
                  </div>
                ))}
                <div className="px-4 pt-3 border-t border-gray-700 mt-2 mb-2">
                  <p className="text-xs text-gray-400 mb-2 italic">
                    Note: Please download and fill out the form below to apply.
                  </p>
                  <a
                    href="/files/course-form.pdf"
                    download
                    className="flex items-center justify-center gap-2 bg-orange-500 text-white text-sm px-3 py-2 rounded-lg hover:bg-orange-600 transition"
                  >
                    <Download size={14} />
                    Download Form
                  </a>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 px-6 py-2 hover:bg-gray-700 hover:text-orange-500 transition"
          >
            <Mail size={18} /> Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
