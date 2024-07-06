import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Links() {
  const scrollToAboutMe = () => {
    event.preventDefault();
    document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    event.preventDefault();
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex w-1/3 justify-end">
        <div className="navl max-md:hidden w-full flex justify-between">
          <a href="">CV/Resume</a>
          <a href="" onClick={scrollToAboutMe}>
            Skills
          </a>
          <a href="" onClick={scrollToProjects}>
            Projects
          </a>
          <a href="" onClick={scrollToContact}>
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="navl flex flex-col items-center basis-full gap-3">
          <a href="">CV/Resume</a>
          <a href="" onClick={scrollToAboutMe}>
            Skills
          </a>
          <a href="" onClick={scrollToProjects}>
            Projects
          </a>
          <a href="" onClick={scrollToContact}>
            Contact
          </a>
        </div>
      )}
    </>
  );
}

export default Links;
