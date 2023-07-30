import { Link } from "react-router-dom";
import personalImage from "../assets/personal.jpg";

export default function Hero() {
  return (
    <div className="block lg:flex w-full">
      <div className="lg:w-1/2 mx-auto h-auto flex flex-col items-center justify-center m-20 p-10  border-orange-600 rounded-full text-center shadow-lg">
        <h1 className="text-sky-800 text-3xl md:text-5xl font-bold p-10 shadow-md rounded-full">
          My Name is <span className="text-orange-600">Gideon...</span>
        </h1>
        <div className="flex mx-auto bg-white w-40 h-40 mt-9 rounded-full">
          <img
            className="rounded-full"
            src={personalImage}
            alt="Image of programming setup"
          />
        </div>
        <p className="text-sky-800 text-2xl italic p-10 font-semibold">
          I&apos;m a{" "}
          <span className="text-orange-600">full stack developer</span> from
          Nigeria with a knack for problem-solving and a passion for creating
          robust and user-friendly applications
        </p>
        <Link to={"/contact"}>
          <button className="bg-sky-800 text-white hover:bg-orange-600 m-2 p-2 text-xl font-bold rounded-xl hidden md:block">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}
