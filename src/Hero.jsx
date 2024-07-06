import React from "react";

function Hero() {
  return (
    <div className="grid grid-cols-2 items-center text-center w-9/12 pt-20 mx-auto section">
      <div>
        <p className="text-slate-600">Hello, I'm</p>
        <h1 className="text-6xl mt-4">Petros Christodoulou</h1>
        <p className="text-base mt-4 text-slate-600">
          Passionate IT specialist with Front end developer skills
        </p>
        <i class="bx bx-down-arrow-circle text-5xl cursor-pointer mt-8 "></i>
      </div>
      <div className="bg-red-500 ProfileImage"></div>
    </div>
  );
}

export default Hero;
