import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#EBEAFF] min-h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#526E48]">
          About Me
        </h1>
      </div>

      {/* About Content */}
      <div className="px-6 py-10 max-w-4xl mx-auto text-justify sm:text-center">
        <p className="font-sans hover:font-serif font-medium text-base sm:text-lg md:text-xl text-[#2A3663] leading-relaxed tracking-wide">
          I am a dedicated and ambitious student currently pursuing my academic
          and professional growth with a keen interest in web development and technology. I am highly organized, quick to learn, and passionate about problem-solving. 
          My academic journey has been complemented by hands-on experience in projects and extracurricular activities that have honed my technical skills, creativity, and teamwork. 
          I thrive on challenges and continuously seek opportunities to learn and grow. Alongside my studies, I have cultivated skills in web development and programming languages. 
          With a strong foundation in academics and an eagerness to apply my knowledge in real-world scenarios, I am driven to make a meaningful contribution to any team or organization. 
          My ultimate goal is to excel in web development while consistently enhancing my expertise and achieving impactful results.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-[#F6D6D6] text-blue-400 py-6 mt-10">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 font-serif text-sm sm:text-base md:text-lg lg:text-xl">
          <li>
            <Link href="/" className="hover:underline">
              Home
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
              <button className="hover:bg-[#AA5486] hover:text-[#A1EEBD] transition duration-300 rounded-lg">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
