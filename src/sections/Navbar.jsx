import React from "react";
import { motion, useScroll } from "framer-motion";
import { SwitchTheme } from "../components/SwitchTheme";
import { SwitchLanguage } from "../components/SwitchLanguage";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  // Fonction utilitaire pour le scroll smooth
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-5">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => handleScroll("introduction")}>Introduction</a>
            </li>
            <li>
              <a onClick={() => handleScroll("work-experience")}>
                Work Experience
              </a>
            </li>
            <li>
              <a onClick={() => handleScroll("projects")}>Projects</a>
            </li>
            <li>
              <a onClick={() => handleScroll("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => handleScroll("introduction")}>Introduction</a>
          </li>
          <li>
            <a onClick={() => handleScroll("work-experience")}>
              Work Experience
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => handleScroll("contact")}>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        {/* <SwitchLanguage /> */}
        <SwitchTheme />
      </div>
    </div>
  );
};
