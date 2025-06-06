import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiIndeed, SiUpwork } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "service_hwhww5b",
        "template_u5pszcl",
        formData,
        "UIedFGGSWSu8roezT"
      );

      console.log("Email sent successfully:", response);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="p-10 bg-gray-800 text-white">
      <h3 className="text-3xl font-bold text-center mb-6">
        Let's Build Something Amazing
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 text-blue-950 font-extrabold hover:bg-orange-600 transition p-3 rounded"
        >
          Submit
        </button>
      </form>

      {status && <p className="text-center mt-4">{status}</p>}

      <div className="flex flex-col sm:flex-row text-center sm:text-left justify-center items-center gap-5 mt-8">
        <div className="flex items-center gap-2 text-lg">
          <MdEmail className="text-orange-400 text-2xl" />
          <span className="hover:text-orange-800 cursor-pointer">preshtech96@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <MdPhone className="text-orange-400 text-2xl " />
          <span className="hover:text-orange-800 cursor-pointer">+ (234) 066-637-301</span>
        </div>
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://github.com/preshtech96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-orange-800 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.indeed.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-orange-800 transition"
        >
          <SiIndeed />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01ccccf86361409c7c?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 text-3xl hover:text-orange-800 transition"
        >
          <SiUpwork />
        </a>
        <a
          href="www.linkedin.com/in/festus-precious-thompson-oyiboka-3a5243365"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-orange-800 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/2348066637301" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 text-3xl hover:text-orange-800 transition"
        >
          <FaWhatsapp />
        </a>
      </div>
      <p className="flex justify-center pt-10 text-center">Copyright © 2025 PresHTech. All rights reserved.</p>
    </section>
  );
};

export default Contact;
