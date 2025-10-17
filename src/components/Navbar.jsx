import React, { useState } from "react";
import { Menu, X, Home, Briefcase, Mail } from "lucide-react";
import preshtech from "../assets/preshtech.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white px-6 md:px-10 relative">
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
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-orange-300 flex flex-col items-center space-y-4 py-6 z-50 md:hidden shadow-lg">
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
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <Mail size={18} />
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
