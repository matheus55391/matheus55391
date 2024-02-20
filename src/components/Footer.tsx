import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='bg-gray-500 h-[1px] opacity-25 mx-6  lg:mx-12 mt-6' />
            <div
                className="flex flex-col lg:flex-row items-center  mt-6 w-screen justify-between lg:px-20 mb-4"
            >
                <p className="text-sm text-gray-500 text-center items-center">
                    © {new Date().getFullYear()} Matheus55391 Portfolio
                </p>
                <div
                    className="flex flex-row items-center justify-center pt-4 lg:pt-0 text-center"
                >
                    <a
                        href="https://www.youtube.com/channel/UCLz2c241hvFzWu53Xx35Ojg"
                        aria-label="Youtube"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-500 mr-4"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://github.com/matheus55391"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-800 mr-4"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/matheus-felipe-vieira-santiago-5a321a208/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-700"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;
