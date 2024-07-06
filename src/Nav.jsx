import React from "react";
import Links from "./Links";
import profilePic from "./assets/prof.jpg";

function Nav() {
  return (
    <header className=" top-0 z-20 mx-auto flex w-full items-center flex-wrap justify-between border-b border-gray-500 p-8">
      <div className="flex gap-3 justify-center items-center">
        <img src={profilePic} alt="" className="w-14 h-14 rounded-full" />
        <a href="#" className="text-xl">
          Petros.Chr
        </a>
      </div>
      <Links />
    </header>
  );
}

export default Nav;
