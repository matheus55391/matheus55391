import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTimes } from "react-icons/fa";

type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};
const Drawer = ({ isOpen, toggleDrawer }: DrawerProps) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleDrawer}
      ></div>
      <div
        className={`fixed top-0 left-0 w-4/5 h-full bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex justify-between items-center">
          <div className="text-2xl font-bold">MF</div>
          <button onClick={toggleDrawer}>
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6">
          <li>
            <Link href="/">
              <span
                className="font-semibold text-gray-500 hover:text-gray-600 transition-all"
                onClick={toggleDrawer}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span
                className="font-semibold text-gray-500 hover:text-gray-600 transition-all"
                onClick={toggleDrawer}
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/tech-stack">
              <span
                className="font-semibold text-gray-500 hover:text-gray-600 transition-all"
                onClick={toggleDrawer}
              >
                Tech Stack
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span
                className="font-semibold text-gray-500 hover:text-gray-600 transition-all"
                onClick={toggleDrawer}
              >
                Contact
              </span>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/matheus55391"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCLz2c241hvFzWu53Xx35Ojg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Drawer;
