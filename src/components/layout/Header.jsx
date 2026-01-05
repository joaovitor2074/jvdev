import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import "../../styles/layouts/header.css";
import logotrans from "../../assets/images/jvdev-fundotransparente.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About Me", "Projects", "Contact"];

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
          <img src={logotrans} alt="Logo JVDev" className="logo" />
        </motion.div>

        {/* NAV DESKTOP */}
        <nav className="nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  className="link"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* BUTTON DESKTOP */}
        <div className="div_btn">
          <Button className="btn">Divirta-se</Button>
        </div>

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
          {menuItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
