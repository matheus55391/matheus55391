import React from "react";

export default function Home() {



  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-6">
      <div className="p-2 ">
        <p className="pl-2 text-2xl font-bold mb-4 text-gray-300 uppercase text-left">{"<"}Olá, eu sou Matheus{"/>"}</p>
        <p className="text-9xl font-bold text-gray-300 uppercase text-left mb-2" style={{ lineHeight: "0.8" }}>
          FULLSTACK
        </p>
        <p className="text-10xl font-bold text-gray-300 uppercase text-left mb-2" style={{ lineHeight: "0.8" }}>
        DEVELOPER
        </p>
        <p className="pl-2 uppercase text-right ">Eu tenho 3 anos de experiência em desenvolvimento full stack.</p>
      </div>
    </div>
  );
}
