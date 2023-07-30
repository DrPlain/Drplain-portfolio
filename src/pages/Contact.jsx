export default function Contact() {
  return (
    <div className="lg:my-28 p-5 mt-10 bg-gradient-to-b from-white via-cyan-100 to-white">
      <div className="flex flex-col items-center justify center">
        <form
          action="https://getform.io/f/bc6a5234-a4e9-4277-a772-cc54990993d2"
          method="POST"
          className="flex flex-col w-full md:w-1/2 gap-4"
        >
          <label className="text-center text-sky-800 text-3xl font-bold p-2">
            Contact Form
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-sky-800 text-lg font-semibold border-sky-800 placeholder-sky-800"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-sky-800 text-lg font-semibold border-sky-800 placeholder-sky-800"
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message here"
            className="p-2 bg-transparent border-2 rounded-md text-sky-800 text-lg focus:outline-none font-semibold border-sky-800 placeholder-sky-800"
          ></textarea>
          <button className="bg-gradient-to-b from-sky-200 to-sky-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-lg text-white font-bold">
            Let&apos;s talk
          </button>
        </form>
      </div>
    </div>
  );
}
