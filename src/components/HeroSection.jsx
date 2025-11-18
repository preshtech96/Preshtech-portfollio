
import profiler from "../assets/Profiler.png";
import ptt from "../assets/ptt.jpg";
import { useState } from "react";
import PreshtechCV from "../assets/PreshtechCV.pdf";
const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-white text-black py-16 px-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-gray-600">
            ReactJs | TailwindCSS | FastAPI | MongoDB | Python
          </p>
          <h1 className="text-5xl font-bold">Fullstack Dev.</h1>
          <p className="text-lg text-gray-700 max-w-md">
            I am passionate about building clean, scalable, and user-friendly web applications.
             Specializing in React.js, TailwindCSS, FastAPI, MongoDB, Python and modern
              full-stack technologies.
            {isExpanded && (
              <>
                {" "}
                I enjoy problem-solving and optimizing web applications for
                performance. With a keen eye for UI/UX, I ensure seamless user
                experiences.
              </>
            )}
          </p>
          <div className="flex gap-20">
            <button
              className="px-6 py-3 bg-black text-blue-600 rounded-md hover:bg-gray-900 transition"
              onClick={toggleReadMore}
            >
              {isExpanded ? "Read less" : "Read more..."}
            </button>
            <button>
              <a href={PreshtechCV} download={"PreshTech-CV"}>
                Download CV
              </a>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="h-[90%] w-[90%]">
            <img
              src={ptt}
              alt="Profile"
              className="object-contain h-[80%] w-[80%] rounded-[50%] "
            />
          </div>

          {}
          <div className="absolute top-0 left-0 w-20 h-20 bg-orange-400 rounded-full transform -translate-x-5 -translate-y-5"></div>
          <div className="absolute bottom-5 right-5 w-15 h-15 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-5 right-5 w-10 h-10 bg-orange-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


