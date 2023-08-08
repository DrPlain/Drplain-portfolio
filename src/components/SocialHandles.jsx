import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/My_portfolio.pdf";

export default function SocialHandles() {
  return (
    <div className="p-50 mt-[100px]">
      <div className="md:flex-col md:items-center md:justify-center md:fixed md:left-0 md:top-[33%] bg-sky-800 p-4">
        <ul className="flex items-center md:items-start md:flex-col md:space-y-10 justify-between">
          <li className="">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/obiasor-gideon-46116418b"
              className="flex hover:scale-125 duration-200 md:ml-[-140px] md:hover:ml-[0px]"
              rel="noreferrer"
            >
              <span className=" hidden md:flex text-3xl px-2 text-white font-semibold">
                LinkedIn
              </span>{" "}
              <FaLinkedin size={40} className="text-white" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/DrPlain"
              className="flex hover:scale-125 duration-200 md:ml-[-118px] md:hover:ml-[-3px]"
              rel="noreferrer"
            >
              <span className="hidden md:flex text-3xl px-2 text-white font-semibold">
                Github
              </span>{" "}
              <FaGithub size={40} className="text-white" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="mailto: gideonobiasor@gmail.com"
              className="flex hover:scale-125 duration-200 md:ml-[-84px] md:hover:ml-[-3px]"
              rel="noreferrer"
            >
              <span className="hidden md:flex text-3xl px-2 text-white font-semibold">
                Mail
              </span>{" "}
              <HiOutlineMail size={40} className="text-white" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href={resume}
              className="flex hover:scale-125 duration-200 md:ml-[-130px] md:hover:ml-[-3px]"
              rel="noreferrer"
            >
              <span className="hidden md:flex text-3xl px-2 text-white font-semibold">
                Resume
              </span>{" "}
              <BsFillPersonLinesFill
                size={40}
                className="text-white"
                download={true}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
