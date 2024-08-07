const DownloadCVButton = () => {
  return (
    <a
      href="/curriculo_matheus.pdf"
      download
      className="bg-[#42446E] rounded-xl hover:cursor-pointer text-white p-4 px-6 sm:p-2 sm:px-3 text-center "
    >
      <span className="text-xs font-semibold sm:font-medium">Download CV</span>
    </a>
  );
};

export default DownloadCVButton;