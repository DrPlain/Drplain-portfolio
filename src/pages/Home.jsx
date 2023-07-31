import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Profile from "./Profile";
import Projects from "./Projects";
// import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <div className="font-roboto h-screen bg-gradient-to-b from-white  via-cyan-100 to-white">
      {/* <Showcase /> */}
      <Hero />
      <Profile />
      <Projects />
      <Experience />
    </div>
  );
}
