import React from "react";
import { ProjectsImport } from "./Constants/index.jsx";
function ProjectItem() {
  return (
    <>
      {ProjectsImport.map((project, index) => (
        <div
          key={index}
          className=" grid grid-cols-1 lg:grid-cols-2  w-5/6 m-auto mb-10 mt-40  "
        >
          <div>
            <img src={project.img} alt="" />
          </div>
          <div>
            <h1 className="text-xl text-center lg:text-left">
              {project.title}
            </h1>
            <p className="mt-5 text-neutral-400 text-center lg:text-left lg:w-5/6">
              {project.description}.
            </p>
            <p className="mt-5 text-center lg:text-left">Created with:</p>
            <div className="flex gap-5 justify-center lg:justify-start">
              {project.tools.map((tool, index) => (
                <h1 className="mt-5 border p-2 text-center text-sm" key={index}>
                  {tool}
                </h1>
              ))}
            </div>
            <div className="flex justify-center lg:justify-start text-center lg:text-left">
              <a
                href={project.link}
                target="_blank"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:text-black mt-10"
              >
                View website
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectItem;
