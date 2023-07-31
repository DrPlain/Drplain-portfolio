import { Link } from "react-router-dom";
import Latent from "../assets/bg3.jpg";
import Latent2 from "../assets/homeLatent2.png";
import Sigma from "../assets/sigma.png";

export default function Projects() {
  const portfolios = [
    {
      id: 1,
      src: Latent2,
      description: "A housing and accomodation services built with MERN stack",
      title: "Latent",
      github: "https://github.com/Scaarif/Latent",
      demoUrl: "https://youtu.be/EdzAD47jkPE",
    },
    {
      id: 2,
      src: Sigma,
      description:
        "An interactive data visualization service built with Django",
      title: "Sigmacodes",
      github: "https://github.com/DrPlain/portfolio-project_django",
      demoUrl: "https://youtu.be/sim1Qpiju1w",
    },
    {
      id: 3,
      src: Latent,
      description: "An API for managing images and text files",
      title: "Files Manager",
      github: "https://github.com/DrPlain/alx-files_manager",
      demoUrl: "https://github.com/DrPlain/alx-files_manager",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-white via-cyan-100 to-white md:mt-28"
    >
      <div className="pb-8 px-5 md:px-20 m-10 pt-4 shadow-md round rounded-full md:w-[80%] w-[95%] mb-10 mx-auto">
        <p className="text-3xl md:text-4xl text-center text-orange-600 font-bold pb-2">
          Projects
        </p>
        <p className="text-2xl md:text-3xl p-3 text-sky-800 font-bold text-center italic">
          Here are some of my works
        </p>
      </div>
      <div className=" p-4 md:px-20 mx-auto h-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5 sm:px-0 mx-auto">
          {portfolios.map(
            ({ id, src, description, title, github, demoUrl }) => (
              <div
                key={id}
                className="shadow-md shadow-sky-800 rounded-lg mx-auto"
              >
                <h2 className="text-2xl text-sky-800 p-4 font-bold text-center">
                  Project name: {title}
                </h2>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 w-[300px] h-[200px] mx-auto"
                />
                <div>
                  <h2 className="text-xl text-sky-800 p-4 font-bold">
                    Description:{" "}
                    <span className="font-semibold text-lg text-black">
                      {description}
                    </span>
                  </h2>
                </div>
                <div className="flex items-center justify-center">
                  <Link to={demoUrl}>
                    <button className="font-bold text-xl text-orange-600 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </Link>
                  <Link to={github}>
                    <button className="font-bold text-xl text-orange-600 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
