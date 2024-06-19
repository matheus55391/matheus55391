"use client"
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaBars } from "react-icons/fa";
import { useState } from "react";
import Drawer from "./Drawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  return (
    <header className="bg-white">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold md:hidden">{"<MF />"}</div>
        <div className="hidden md:block text-2xl font-bold">Matheus Felipe</div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">
              <span className="font-semibold text-gray-500 hover:text-gray-600 transition-all">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="font-semibold text-gray-500 hover:text-gray-600 transition-all">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/tech-stack">
              <span className="font-semibold text-gray-500 hover:text-gray-600 transition-all">
                Tech Stack
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="font-semibold text-gray-500 hover:text-gray-600 transition-all">
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/matheus55391" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.youtube.com/channel/UCLz2c241hvFzWu53Xx35Ojg" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            <FaBars size={24} />
          </button>
        </div>
      </nav>
      <Drawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default Header;
