import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-300">
        {/* LinkedIn */}
        <a
          href="http://www.linkedin.com/in/indujakukatikonda"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:text-purple-300 transition-colors" />
        </a>

        {/* GitHub */}
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

