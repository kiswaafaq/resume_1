import Link from "next/link";

export default function Skills() {
  return (
    <div className="bg-[#DAFFFB] min-h-screen flex flex-col justify-between italic">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#243642]">
          Skills
        </h1>
      </div>

      {/* Skills Section */}
      <div className="px-6 py-8 max-w-4xl mx-auto space-y-8">
        {/* Technical Skills */}
        <div>
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#1D3557]">
            Technical Skills
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-base sm:text-lg md:text-xl font-semibold">
            <li className="text-blue-500">
              Proficient in HTML, CSS, JavaScript, TypeScript, and Tailwind CSS.
            </li>
            <li className="text-blue-500">
              Knowledgeable in React.js and Next.js.
            </li>
            <li className="text-blue-500">
              Experienced in deploying projects using GitHub and Vercel.
            </li>
            <li className="text-blue-500">
              Familiar with Microsoft Office Suite (Word, Excel, PowerPoint).
            </li>
          </ol>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#1D3557]">
            Soft Skills
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-base sm:text-lg md:text-xl font-semibold">
            <li className="text-blue-500">Time management and multitasking.</li>
            <li className="text-blue-500">
              Effective communication and teamwork abilities.
            </li>
            <li className="text-blue-500">
              Strong problem-solving and analytical skills.
            </li>
          </ol>
        </div>

        {/* Other Relevant Skills */}
        <div>
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#1D3557]">
            Other Relevant Skills
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-base sm:text-lg md:text-xl font-semibold">
            <li className="text-blue-500">Hands-on experience with makeup artistry.</li>
            <li className="text-blue-500">Equestrian skills and familiarity with polo.</li>
            <li className="text-blue-500">Proficient swimmer with formal training.</li>
          </ol>
        </div>
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
