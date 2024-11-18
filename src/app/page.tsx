import Image from "next/image";
import Link from "next/link";
import profile from "../../image/profile.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-cyan-300 via-[#FBF4DB] to-[#F6F7C4]">
      {/* Header */}
      <header className="text-center pt-10">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#AA5486] inline-block px-6 py-3 rounded-lg">
          Kiswas Resume
        </h1>
      </header>

      {/* Middle Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between p-4 md:p-10 gap-6 md:gap-20">
        <p className="text-sm sm:text-base md:text-lg text-center md:text-left font-medium text-[#AA5486] ">
          Welcome to my resume! Explore my skills, projects, and more.
        </p>
        <div className="flex justify-center">
          <Image
            className="rounded-full object-cover"
            src={profile}
            alt="oops,no image"
            width={250}
            height={250}
          />
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="bg-[#F6D6D6] text-blue-400 py-4">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 font-serif text-sm sm:text-base md:text-lg lg:text-xl">
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
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
