import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" items-center justify-center py-6 mt-auto">
      <div className="container mx-auto text-center md:text-left space-y-4 flex flex-col items-center justify-center text-[#42446E]">
        {/* Phone and Email */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <p className="text-sm md:text-base text-[#42446E]">+55 79 99122-4649</p>
          <p className="text-sm md:text-base">
            <a href="mailto:matheus.felipe55391@gmail.com">
              matheus.felipe55391@gmail.com
            </a>
          </p>
        </div>

        {/* Icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/matheus55391"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-gray-800"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCLz2c241hvFzWu53Xx35Ojg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-red-500"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
