import C from "../assets/c-plain.svg";
import Bootstrap from "../assets/bootstrap-plain.svg";
import Css from "../assets/css3-plain.svg";
import Django from "../assets/django-plain.svg";
import Docker from "../assets/docker-plain.svg";
import Express from "../assets/express-original.svg";
import Flask from "../assets/flask-original.svg";
import Git from "../assets/git-plain.svg";
import Html from "../assets/html5-plain.svg";
import Javascript from "../assets/javascript-original.svg";
import Linux from "../assets/linux-original.svg";
import Mocha from "../assets/mocha-plain.svg";
import Mongodb from "../assets/mongodb-plain.svg";
import MySQL from "../assets/mysql-plain.svg";
import Nginx from "../assets/nginx-original.svg";
import Node from "../assets/nodejs-plain.svg";
import Python from "../assets/python-original.svg";
import ReactIcon from "../assets/react-original.svg";
import Trello from "../assets/trello-plain.svg";
import Typescript from "../assets/typescript-original.svg";
import Ubuntu from "../assets/ubuntu-plain.svg";
import Vim from "../assets/vim-plain.svg";
import Tailwindcss from "../assets/tailwindcss-plain.svg";

export default function Experience() {
  const technologies = [
    {
      id: 1,
      name: "Bootstrap",
      src: Bootstrap,
    },
    {
      id: 2,
      name: "C",
      src: C,
    },
    {
      id: 3,
      name: "CSS",
      src: Css,
    },
    {
      id: 4,
      name: "Django",
      src: Django,
    },
    {
      id: 5,
      name: "Docker",
      src: Docker,
    },
    {
      id: 6,
      name: "Express",
      src: Express,
    },
    {
      id: 7,
      name: "Git",
      src: Git,
    },
    {
      id: 8,
      name: "Html",
      src: Html,
    },
    {
      id: 9,
      name: "JavaScript",
      src: Javascript,
    },
    {
      id: 10,
      name: "Mocha",
      src: Mocha,
    },
    {
      id: 11,
      name: "MongoDB",
      src: Mongodb,
    },
    {
      id: 12,
      name: "MySQL",
      src: MySQL,
    },
    {
      id: 13,
      name: "Nginx",
      src: Nginx,
    },
    {
      id: 14,
      name: "Node Js",
      src: Node,
    },
    {
      id: 15,
      name: "Python",
      src: Python,
    },
    {
      id: 16,
      name: "React",
      src: ReactIcon,
    },
    {
      id: 17,
      name: "Tailwindcss",
      src: Css,
    },
    {
      id: 18,
      name: "Typescript",
      src: Typescript,
    },
    {
      id: 19,
      name: "Ubuntu",
      src: Ubuntu,
    },
    {
      id: 20,
      name: "Vim",
      src: Vim,
    },
    {
      id: 21,
      name: "Trello",
      src: Trello,
    },
    {
      id: 22,
      name: "Flask",
      src: Flask,
    },
    {
      id: 23,
      name: "Linux",
      src: Linux,
    },
    {
      id: 24,
      name: "Tailwindcss",
      src: Tailwindcss,
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-white via-cyan-100 to-white w-full"
    >
      <div className="px-5 mt-32 md:px-20 pt-4 shadow-md rounded-full md:w-[80%] w-[95%] mb-10 mx-auto">
        <p className="text-3xl md:text-4xl text-center text-orange-600 font-bold">
          Experience
        </p>
        <p className="text-center p-4 text-xl md:text-3xl font-bold text-sky-800 italic ">
          These are technologies I have worked with
        </p>
      </div>
      <div className="mx-auto p-5 flex flex-col justify-center w-full h-full text-sky-800 md:px-20 ">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py8 px-12 sm:px-0">
          {technologies.map(({ id, name, src }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt={`${name} icon`} className="w-20 mx-auto" />
              <p className="mt-4 font-bold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
