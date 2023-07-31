// import personalImage from '../assets/personal.jpg';
export default function Profile() {
  return (
    <div className="md:mt-24 mt-6">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center p-2">
          More about me...
        </h1>
      </div>
      <div className="flex flex-col bg-gradient-to-b from-white via-cyan-100 to-white">
        {/* <div className='flex mx-auto bg-white w-60 h-60 mt-9 rounded-full'>
          <img className='rounded-full' src={personalImage} alt="Image of programming setup" />
        </div> */}
        <div className="md:px-20 py-5 px-5 text-sky-800 text-lg font-semibold">
          <h2 className="text-sky-800 pb-4 font-bold text-3xl">Bio</h2>
          <p>
            I am Gideon Obiasor, a Full stack software engineer and a member of
            The Room fellowship which is a group of world-class tech talents
            from Africa. After acheiving my first degree as a medical doctor, I
            realised that one of the numerous problems facing healthcare in
            Africa is paucity of software integrations and automations amongst
            other things. This awareness alongside my passion for building
            things made me seek for a career in tech.
          </p>
          <br />
        </div>
        <hr />
        <div className="md:px-20 py-5 px-5 text-sky-800 text-lg font-semibold">
          <h2 className="text-sky-800 pb-4 font-bold text-3xl">Education</h2>
          <p>
            I was privileged to be trained by ALX-HOLBERTON which is a one-year
            project-based full stack engineering program sponsored by Mastercard
            Foundations. In the first 9-months, I was trained to obtain
            foundational knowledge of in-demand tech skills like system devops,
            system administration, algorithms, webstacks, debugging, frontend
            and backend development. I specialised in backend devlopment in the
            last three months of the program within which I gained indepth
            experience of backend technologies and concepts.
          </p>
          <br />
        </div>
        <hr />
        <div className="md:px-20 py-5 px-5 text-sky-800 text-lg font-semibold">
          <h2 className="text-sky-800 pb-4 font-bold text-3xl">Experience</h2>
          <p>
            I have experience working with both frontend and backend
            technologies and frameworks some of which include React, Tailwind,
            TypeScript, Node.js, Express.js, NoSQL databases like MongoDB,
            Redis; SQL databases like MySQL; Django, Flask, Docker and C. I can
            comfortably work with teams using collaboration tools like GIT and
            Kanban boards. <br />
            <br />I am one of the two backend engineers who developed and manage
            a housing and accomodation service: Latent.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
