"use client";
import { FaGithub, FaLinkedin, FaYoutube, FaBars } from "react-icons/fa";
import { useState } from "react";
import Drawer from "./Drawer";
import DownloadCVButton from "./DownloadCVButton";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="bg-white">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#42446E]">{"<MF />"}</div>

        <div className="hidden md:flex space-x-4 items-center">
          <DownloadCVButton />
       
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
