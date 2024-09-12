import React from "react";

function Skills() {
  return (
    <div className=" border-b border-gray-500 mb-40">
      <div className="flex flex-col justify-center mt-20  " id="aboutme">
        <h1 className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-4xl sm:text-5lx lg:text-6xl text-center ">
          About me
        </h1>
        <p className="text-center mt-5 text-neutral-400 w-5/6 m-auto ">
          Find out more about me, including my technical skills
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-5/6 m-auto  lg:gap-20 mt-40 mb-60">
        <div className="flex flex-col justify-center ">
          <h2 className="text-2xl lg:text-3xl text-center lg:text-left">
            Get to know me!
          </h2>
          <p className="mt-10 w-5/6 m-auto lg:ml-0 text-center lg:text-left text-neutral-400 ">
            I am Petros Christodoulou from Cyprus, passionate about learning new
            technologies and continuously improving my current skills. I am
            eager to deepen my expertise in Front-end Development. Although I do
            not have extensive commercial experience, I have worked on several
            independent client projects, which have allowed me to develop a
            strong foundation in front-end technologies. I consider myself a
            junior-level developer, driven by a commitment to growth and
            improvement.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl lg:text-3xl text-center lg:text-left mt-20 lg:mt-0">
            Skills
          </h2>
          <div className="flex flex-wrap gap-10 mt-10 justify-center lg:justify-start w-5/6 lg:w-full m-auto">
            <p className="border p-3 text-center text-xl">
              HTML
              <p className="text-sm text-neutral-400">Advanced</p>
            </p>
            <p className="border p-3 text-xl text-center">
              CSS
              <p className="text-sm text-neutral-400">Advanced</p>
            </p>
            <p className="border p-3 text-xl text-center">
              Tailwindcss
              <p className="text-sm text-neutral-400">Advanced</p>
            </p>
            <p className="border p-3 text-xl text-center">
              Javascript
              <p className="text-sm text-neutral-400 text-center">
                Intermediate
              </p>
            </p>
            <p className="border p-3 text-xl text-center">
              React.js
              <p className="text-sm text-neutral-400 text-center ">
                Intermediate
              </p>
            </p>
            <p className="border p-3 text-xl text-center">
              WordPress
              <p className="text-sm text-neutral-400 text-center ">Basics+</p>
            </p>
            <p className="border p-3 text-xl text-center">
              Git
              <p className="text-sm text-neutral-400 text-center ">Basics</p>
            </p>{" "}
            <p className="border p-3 text-xl text-center">
              Next.js
              <p className="text-sm text-neutral-400 text-center ">Basics+</p>
            </p>{" "}
            <p className="border p-3 text-xl text-center">
              Typescript
              <p className="text-sm text-neutral-400 text-center ">Soon</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
