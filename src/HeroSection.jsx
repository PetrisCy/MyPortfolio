import React from "react";

function HeroSection() {
  const scrollToAboutMe = () => {
    event.preventDefault();
    document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]  ">
      <div className="flex flex-col item-center mt-6 lg:mt-20  ">
        <p className="text-lg text-center">Hello, I'm</p>
        <h1 className="text-4xl sm:text-6lx lg:text-7xl text-center mt-12">
          Petros Christodoulou
        </h1>
        <p className="text-lg text-center mt-12 m-auto w-5/6 text-neutral-400">
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Passionate
          </span>{" "}
          IT specialist with Front end developer skills
        </p>
        <div className="flex justify-center my-12">
          <a
            href="#"
            className="py-3 px-4 mx-3 rounded-md border hover:text-orange-400"
          >
            Download Resume
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:text-black"
          >
            Contact
          </a>
        </div>
        <div className="socials flex justify-center mt-2 ">
          <a
            href="https://www.linkedin.com/in/petros-christodoulou-bb46227b/"
            target="_blank"
            className="px-4 hover:text-neutral-500"
          >
            <i class="  text-4xl bx bxl-linkedin-square cursor-pointer"></i>
          </a>
          <a href="" className="hover:text-neutral-500 px-4">
            <i class="  text-4xl bx bxl-github"></i>
          </a>
          <a href="" className="hover:text-neutral-500 px-4">
            <i class="  text-4xl bx bx-envelope"></i>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="#" className="text-center ">
            <i
              onClick={scrollToAboutMe}
              className="hover:text-orange-400 bx bx-down-arrow-alt text-5xl cursor-pointer mt-20 lg:mt-20 mb-20 "
            >
              <span className="text-xl"></span>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
