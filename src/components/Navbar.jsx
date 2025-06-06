import preshtech from "../assets/preshtech.png";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white px-10">
      <div className="flex flex-col items-center">
        <img src={preshtech} alt="Logo" className="h-10 w-10" />
        <p className="text-xl font-bold text-center leading-none -mt-1">
          Pres<span className="text-orange-500">HT</span>ech
        </p>
      </div>


      <div className="flex space-x-4">
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("services");
          }}
          className="hover:text-orange-800 transition"
        >
          Services
        </a>
        <a
          href="#works"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("works");
          }}
          className="hover:text-orange-500 transition"
        >
          Works
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className="hover:text-orange-500 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;