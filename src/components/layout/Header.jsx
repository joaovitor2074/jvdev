import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/layouts/header.css";
import logotrans from "../../assets/images/jvdev-fundotransparente.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Início", path: "/" },
    { label: "Sobre mim", path: "/about" },
    { label: "Projetos", path: "/projects" },
    { label: "Contato", path: "/contact" },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div
          whileHover={{ scale: 1.06, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <NavLink to="/" aria-label="Ir para o início" onClick={() => setOpen(false)}>
            <img src={logotrans} alt="Logo JVDev" className="logo" />
          </NavLink>
        </motion.div>

        <nav className="nav" aria-label="Navegação principal">
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

        <button
          className="menu-btn"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Navegação mobile">
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
        </nav>
      )}
    </motion.header>
  );
}
