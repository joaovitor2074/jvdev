import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import "../../styles/layouts/header.css";
import logotrans from "../../assets/images/jvdev-fundotransparente.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="header-container">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <NavLink to="/">
            <img src={logotrans} alt="Logo JVDev" className="logo" />
          </NavLink>
        </motion.div>

        {/* NAV DESKTOP */}
        <nav className="nav">
          <ul className="nav-list">
            {menuItems.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  end={path === "/"} 
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* BUTTON DESKTOP */}
        {/* <div className="div_btn">
          <Button className="btn">Divirta-se</Button>
        </div> */}

        {/* HAMBURGER */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="mobile-menu">
          {menuItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
              end={path === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </motion.header>
  );
}
