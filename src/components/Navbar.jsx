import logo from "../assets/DS-small.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" className="mx-2 w-15 h-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/uppuluri-divyanth-861902202/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Divyanth2468" target="_blank">
          <FaGithub />
        </a>
        <a href="http://instagram.com/_.divyanth._/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
