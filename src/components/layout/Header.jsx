import React from "react";
import Button from "../ui/Button";

//img
import logotrans from "../../assets/images/jvdev-fundotransparente.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div>
            <img src={logotrans} alt="" className="w-24 ml-14" />
        </div>

        <div>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-400">About</a></li>
                    <li><a href="#services" className="hover:text-gray-400">Services</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>
        </div>

        <div>
            <Button onClick={() => alert('Button Clicked!')}>
                Divirta-se
            </Button>
        </div>
    </header>
  );
}