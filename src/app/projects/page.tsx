import Image from "next/image";
import Link from "next/link";
import countdown from "../../public/countdown.jpeg";
import quiz from "../../public/quiz.jpeg";
import todoapp from "../../public/todoapp.jpeg";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-cyan-200 via-white to-cyan-100">
      {/* Header */}
      <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide text-blue-500 py-8">
        Projects
      </h1>

      {/* Project Grid */}
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        <Image
          className="hover-effect transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
          src={countdown}
          alt="Countdown Project"
          width={500}
          height={500}
        />
        <Image
          className="hover-effect transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
          src={quiz}
          alt="Quiz Project"
          width={500}
          height={500}
        />
        <Image
          className="hover-effect transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
          src={todoapp}
          alt="Todo App Project"
          width={500}
          height={500}
        />
      </div>

      {/* Footer */}
      <footer className="bg-[#F6D6D6] text-blue-500 py-6 mt-8">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 font-serif text-sm sm:text-base md:text-lg lg:text-xl">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <button className="hover:bg-[#AA5486] hover:text-[#A1EEBD] transition duration-300 rounded-lg ">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
