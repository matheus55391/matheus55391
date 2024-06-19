import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTimes } from "react-icons/fa";
import DownloadCVButton from "./DownloadCVButton";

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
        className={`fixed top-0 left-0 w-4/5 md:w-2/5 lg:w-1/5 h-full bg-white z-50 transform  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col justify-between`}
      >
        <div className="p-6 flex justify-between items-center">
          <div className="text-2xl font-bold">{"<MF />"}</div>
          <button onClick={toggleDrawer}>
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 p-6">
          <div>
            <a
              href="https://github.com/matheus55391"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGithub size={24} />
              <div className="font-semibold text-gray-500 hover:text-gray-600 transition-all ml-4">
                GitHub
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-"
            >
              <FaLinkedin size={24} />
              <div className="font-semibold text-gray-500 hover:text-gray-600 transition-all ml-4">
                LinkedIn
              </div>
            </a>
          </div>
          <div className="">
            <a
              href="https://www.youtube.com/channel/UCLz2c241hvFzWu53Xx35Ojg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaYoutube size={24} />
              <div className="font-semibold text-gray-500 hover:text-gray-600 transition-all ml-4">
                YouTube
              </div>
            </a>
          </div>
          <div>
            <DownloadCVButton />
          </div>


        </div>

        <div className="p-6 border-t border-gray-300 mt-auto">
          
          <a
            href="tel:+5579991224649"
            className="flex items-center justify-between"
          >
            <div className="font-semibold text-gray-500 hover:text-gray-600 transition-all">
              +55 79 99122-4649
            </div>
          </a>
          <a
            href="mailto:matheus.felipe55391@gmail.com"
            className="flex items-center justify-between"
          >
            <div className="font-semibold text-gray-500 hover:text-gray-600 transition-all sm:hidden">
              matheus.felipe55391@gmail.com
            </div>
          </a>
          
        </div>
      </div>
    </>
  );
};

export default Drawer;
