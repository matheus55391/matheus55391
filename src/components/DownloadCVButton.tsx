const DownloadCVButton = () => {
  return (
    <a
      href="/curriculo_matheus.pdf"
      download
      className="bg-black rounded-xl hover:cursor-pointer text-white p-2 px-4 sm:p-1 sm:px-2.5 text-center "
    >
      <span className="text-xs font-semibold sm:font-medium">Download CV</span>
    </a>
  );
};

export default DownloadCVButton;