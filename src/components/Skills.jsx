import react from "../assets/react.png";
import js from "../assets/js.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import github from "../assets/github.png";
import zustand from "../assets/zustand.jpg";
import tailwind from "../assets/tailwind.png";
import worldp from "../assets/worldp.jpg";
import python from "../assets/python.jpg";
import mongodb from "../assets/mongodb.png";
import fastapi from "../assets/fastapi.png";

const skills = [
  { name: "ReactJs", icon: react },
  { name: "Python", icon: python },
  { name: "MongoDB", icon: mongodb },
  { name: "JavaScript", icon: js },
  { name: "CSS", icon: css },
  { name: "HTML", icon: html },
  { name: "GitHub", icon: github },
  { name: "Zustand", icon: zustand },
  { name: "TailwindCSS", icon: tailwind },
  { name: "WordPress", icon: worldp },
  { name: "FastAPI", icon: fastapi },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Framework Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center p-6 bg-white shadow-md rounded-lg 
                         hover:shadow-2xl transform transition-all duration-500 
                         hover:-rotate-6 hover:scale-110 cursor-pointer"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-20 w-20 object-contain transition-transform duration-500 
                           group-hover:rotate-6 group-hover:scale-110"
              />
              <p
                className="mt-3 text-lg font-medium text-gray-700 
                           transition-colors duration-300 group-hover:text-orange-500"
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
