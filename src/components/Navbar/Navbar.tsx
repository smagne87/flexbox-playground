import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggleButton from "../ThemeToggleButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { to: "/", label: "Intro" },
    { to: "/direction", label: "Flex Direction" },
    { to: "/flex-wrap", label: "Flex Wrap" },
    { to: "/gap", label: "Flex Gap" },
    { to: "/order", label: "Flex Order" },
    { to: "/justify-content", label: "Justify Content" },
    { to: "/align-items", label: "Align Items" },
    { to: "/align-content", label: "Align Content" },
    { to: "/align-self", label: "Align Self" },
    { to: "/flex-grow-shrink", label: "Grow/Shrink/Basis" },
    { to: "/flex-shorthand", label: "Flex (Shorthand)" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow mb-6 px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700 dark:text-white">
          Flexbox Playground
        </h1>

        {/* Hamburger toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu for desktop */}
        <div className="hidden md:flex space-x-4 items-center">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggleButton />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 dark:text-gray-100 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggleButton />
        </div>
      )}
    </nav>
  );
};
