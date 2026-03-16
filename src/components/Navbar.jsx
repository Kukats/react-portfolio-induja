// src/components/Navbar.jsx
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Left: logo only */}
      <div className="flex items-center">
        <img className="mx-2 w-10" src={logo} alt="IK logo" />
      </div>

      {/* Center: section buttons */}
      <div className="flex items-center gap-6 text-sm font-medium text-neutral-300">
        <a href="#about" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#technologies" className="hover:text-white transition-colors">
          Technologies
        </a>
        <a href="#experience" className="hover:text-white transition-colors">
          Experience
        </a>
        <a href="#projects" className="hover:text-white transition-colors">
          Projects
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </div>

      {/* Right: social icons */}
      <div className="flex items-center gap-4 text-2xl text-neutral-300">
        <a
          href="https://www.linkedin.com/in/indujakukatikonda"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:text-purple-300 transition-colors" />
        </a>
        <a
          href="https://github.com/Kukats"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="hover:text-purple-300 transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
