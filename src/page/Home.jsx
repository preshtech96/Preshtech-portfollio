import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Works from "../components/Works"; // Import Works Component
import Contact from "../components/Contact";

const Home = () => {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <Skills />
        <section id="services">
          <Services />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    );
  };
  
  export default Home;
