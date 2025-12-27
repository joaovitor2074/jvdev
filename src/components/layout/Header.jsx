import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

// styles
import "../../styles/layouts/header.css";

// img
import logotrans from "../../assets/images/jvdev-fundotransparente.png";

export default function Header() {
  return (
    <motion.header
      className="flex items-center justify-between p-4 bg-gray-800 text-white header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* LOGO */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={logotrans} alt="Logo" className="logo" />
      </motion.div>

      {/* NAV */}
      <nav className="nav">
        <ul className="flex space-x-6">
          {["Home", "About Me", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <a href={`/${item.toLowerCase().replace(" ", "")}`} className="link">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* BUTTON */}
      <motion.div
        className="div_btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button className="btn" onClick={() => alert("🔥 Bem-vindo ao meu portfolio!")}>
          Divirta-se
        </Button>
      </motion.div>
    </motion.header>
  );
}
