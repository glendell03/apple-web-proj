import { Link } from "react-router-dom";
import Logo from "@/assets/images/logo.png";

const navLinks = new Map<string, string>();
navLinks.set("HOME", "/");
navLinks.set("SERVICES", "/");
navLinks.set("HEALTHCARE", "/");
navLinks.set("CONTACT US", "/contact-us");
navLinks.set("ABOUT US", "/about-us");
navLinks.set("LOGIN", "/login");

const Navbar = () => {
  return (
    <div className="flex h-20">
      <div className=" bg-c-green p-8 flex items-center justify-center gap-3">
        <img src={Logo} alt="Logo" />
        <h1 className="text-white">
          SYNERGY <br /> HOMECARE
        </h1>
      </div>
      <div className="flex-1 bg-white p-8 flex items-center justify-between">
        {Array.from(navLinks).map(([name, path]) => (
          <Link to={path}>{name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
