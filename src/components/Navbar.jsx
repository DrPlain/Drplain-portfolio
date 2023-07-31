/* eslint-disable react/prop-types */
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen((prevState) => !prevState);
  };

  const handleNavItemClick = () => {
    // Close the navbar when a navbar item is clicked
    setNavOpen(false);
  };

  return (
    <nav className="fixed top-0 z-10 bg-white flex items-center h-24 w-full justify-between mx-auto">
      {/* Logo */}
      <Link to="/">
        <h2 className="text-4xl p-2 font-bold text-sky-800">
          Portfolio{" "}
          <span className="text-xl text-orange-600">Gideon Obiasor</span>
        </h2>
      </Link>

      {/* Mobile Nav */}
      <div className="flex items-center md:hidden">
        <div onClick={handleNav}>
          {isNavOpen ? (
            <AiOutlineClose size={30} className="my-auto ml-4 hover:border" />
          ) : (
            <AiOutlineMenu size={30} className="my-auto ml-4 hover:border" />
          )}
        </div>
      </div>

      {/* Nav Items */}
      <ul
        className={`text-xl md:flex md:text-xl md:uppercase md:font-bold hidden ${
          isNavOpen ? "block" : "hidden"
        } md:block`}
      >
        <NavItem to="/" isNavOpen={isNavOpen} label="Home" />
        <NavItem to="/projects" isNavOpen={isNavOpen} label="Projects" />
        <NavItem to="/contact" isNavOpen={isNavOpen} label="Contact" />
        <NavItem to="profile" isNavOpen={isNavOpen} label="Profile" />
      </ul>

      {/* Mobile Nav Links */}
      {isNavOpen && (
        <ul className="fixed left-0 top-0 my-[90px] text-xl uppercase font-bold bg-white w-full ease-in-out duration-500 md:hidden">
          <NavItem
            to="/"
            isNavOpen={isNavOpen}
            label="Home"
            onClick={handleNavItemClick}
          />
          <NavItem
            to="/projects"
            isNavOpen={isNavOpen}
            label="Projects"
            onClick={handleNavItemClick}
          />
          <NavItem
            to="/contact"
            isNavOpen={isNavOpen}
            label="Contact"
            onClick={handleNavItemClick}
          />
          <NavItem
            to="/profile"
            isNavOpen={isNavOpen}
            label="Profile"
            onClick={handleNavItemClick}
          />
        </ul>
      )}
    </nav>
  );
};

const NavItem = ({ label, isNavOpen, to, onClick }) => {
  const handleItemClick = () => {
    if (typeof onClick === "function") {
      onClick(); // Call the provided onClick handler if it's a function
    }
  };
  return (
    <li
      className={`py-2 px-4 hover:bg-sky-800 hover:text-white text-sky-800 ${
        isNavOpen
          ? "border-b md:border md:rounded-lg md:m-2 md:hover:bg-sky-800 md:hover:text-white"
          : "border m-2 rounded-lg hover:bg-sky-800 hover:text-white"
      } border-blue-200`}
      onClick={handleItemClick}
    >
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default Navbar;
