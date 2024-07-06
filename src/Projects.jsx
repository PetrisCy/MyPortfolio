import React from "react";
import ProjectItem from "./ProjectItem";
function Projects() {
  return (
    <div className="flex flex-col justify-center  " id="projects">
      <h1 className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-4xl sm:text-5lx lg:text-6xl text-center">
        Projects
      </h1>
      <p className="text-center mt-5 text-neutral-400 w-5/6 m-auto ">
        Here are some of my personal projects done either for a client or
        personal growth/exercise
      </p>
      <ProjectItem />
    </div>
  );
}

export default Projects;
