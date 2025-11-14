import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
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
        "service_9xbdour",
        "template_86hd4ft",
        formData,
        "xpZbUNNEx4Nsh2oD1"
      );
      alert("Email sent successfully:", response);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error sending email:", error);
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
          className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 text-white font-extrabold hover:bg-orange-600 transition p-3 rounded"
        >
          Submit
        </button>
      </form>

      {status && <p className="text-center mt-4">{status}</p>}

      <div className="flex flex-col sm:flex-row text-center sm:text-left justify-center items-center gap-5 mt-8">
        <div className="flex items-center gap-2 text-lg">
          <MdEmail className="text-orange-400 text-2xl" />
          <span className="hover:text-orange-500 cursor-pointer">
            preshtech96@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <MdPhone className="text-orange-400 text-2xl" />
          <span className="hover:text-orange-500 cursor-pointer">
            + (234) 816-663-7301
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        {[
          {
            icon: <FaGithub />,
            link: "https://github.com/preshtech96",
          },
          {
            icon: <SiFiverr />,
            link: "https://www.fiverr.com/s/KemB4kk",
          },
          {
            icon: <SiUpwork />,
            link: "https://www.upwork.com/freelancers/~01ccccf86361409c7c?mp_source=share",
          },
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/thompson-oyiboka-festus-precious-807932387",
          },
          {
            icon: <FaWhatsapp />,
            link: "https://wa.me/2348166637301",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <p className="flex justify-center pt-10 text-center text-gray-400 text-sm">
        Copyright © 2025 PresHTech. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;

