import { useState } from "react";

const services = [
  {
    title: "Frontend Development",
    shortDescription: "I create fast, responsive, and user-friendly web apps...",
    fullDescription: `Being a skilled Frontend Developer, I create responsive, fast, and user-friendly web applications using HTML, CSS, JavaScript, React, Zustand, Tailwindcss, and GitHub. With a passion for clean code and seamless UI/UX, I turn ideas into interactive, high-performing digital experiences. Bringing your vision to life with modern and engaging web solutions is my priority!`,
  },
  {
    title: "Website Management",
    shortDescription: "I ensure your website stays optimized and up-to-date...",
    fullDescription: `A well-managed website is the key to a fast, secure, and user-friendly online presence and that’s exactly what I deliver! As a skilled Website Manager, I ensure that your site stays optimized, up-to-date, and performing at its best, handling everything to keep your website running smoothly. Whether it’s a business site, e-commerce platform, or web application, I make sure it remains efficient, responsive, and engaging for your users.`,
  },
  {
    title: "Media Management",
    shortDescription: "Helping brands stay visible and impactful...",
    fullDescription: `Helping brands stay visible, engaging, and impactful with expert media management. From content creation and scheduling to audience engagement and analytics, I ensure your media presence is strong, strategic, and results-driven. Let’s elevate your brand with powerful media management!`,
  },
  {
    title: "On/Offline Coaching",
    shortDescription: "I empower developers with hands-on coaching...",
    fullDescription: `I empower aspiring developers to build real-world skills in HTML, CSS, JavaScript, React, Zustand, TailwindCss, and GitHub through hands-on coaching. Whether you're a beginner or looking to level up, I provide structured guidance, practical projects, and expert insights to help you confidently create and manage modern web applications. Let’s code, collaborate, and elevate your frontend skills together!`,
  },
  {
    title: "General Business Management",
    shortDescription: "Optimizing business operations for success...",
    fullDescription: `I specialize in streamlining operations, optimizing productivity, and driving growth through strategic business management. From team coordination and process improvement to resource management and problem-solving, I ensure businesses run smoothly and efficiently. We pledge to take your business to the next level!`,
  },
  {
    title: "Team Work/Managment",
    shortDescription: "Good teamwork management involves...",
    fullDescription: `Good teamwork management involves setting clear goals, assigning roles based on strengths, and fostering open communication. It requires resolving conflicts constructively, encouraging collaboration, and maintaining flexibility. Recognizing achievements and providing feedback keeps the team motivated. Strong leadership ensures alignment, accountability, and a positive environment where everyone contributes to shared success.`,
  },
];

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg shadow-md transition-all duration-500 cursor-pointer overflow-hidden 
            ${hoverIndex === index ? "bg-black text-white" : "bg-white text-black"} 
            hover:scale-105`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Title & Short Description (Before Hover) */}
            <div
              className={`transition-opacity duration-500 ${hoverIndex === index ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"}`}
            >
              <h3 className="font-semibold text-xl">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.shortDescription}</p>
            </div>

            {/* Full Description (On Hover) */}
            <div
              className={`transition-opacity duration-500 ${hoverIndex === index ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"}`}
            >
              <p className="text-gray-300">{service.fullDescription}</p>
            </div>

            <div
              className={`transition-opacity duration-500 ${hoverIndex === index ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"}`}
            >
              <p className="text-gray-300">{service.fullDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;