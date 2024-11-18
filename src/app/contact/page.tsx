import Image from "next/image";
import instagram from "../../public/instagram.jpeg";
import facebook from "../../public/facebook.jpeg";
import linkedin from "../../public/linkedin.jpeg";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-[#DAFFFB] min-h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="text-center px-6 py-8">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl mb-4 text-[#AA5486]">
          I hope you have read all the details and if you are interested in hiring.
        </h2>
        <h2 className="text-center font-serif text-lg sm:text-xl md:text-2xl">
          You can contact me on:
        </h2>
      </div>

      {/* Contact Links */}
      <div className="px-4 py-6 mx-auto max-w-3xl">
        <ol className="space-y-6">
          {/* Instagram */}
          <li className="flex items-center space-x-4 sm:space-x-6">
            <Image
              src={instagram}
              alt="Instagram"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Link
              href="https://www.instagram.com/k1swa_aa?igsh=MThkZXplbHQ5YXF6cA=="
              className="text-[#FF9EAA] font-semibold text-base sm:text-lg hover:bg-[#D76C82] p-2 rounded-lg transition-colors"
            >
              Instagram
            </Link>
          </li>

          {/* Facebook */}
          <li className="flex items-center space-x-4 sm:space-x-6">
            <Image
              src={facebook}
              alt="Facebook"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Link
              href="https://www.facebook.com/kiswa.afaque.1?mibextid=LQQJ4d"
              className="text-[#FF9EAA] font-semibold text-base sm:text-lg hover:bg-[#D76C82] p-2 rounded-lg transition-colors"
            >
              Facebook
            </Link>
          </li>

          {/* LinkedIn */}
          <li className="flex items-center space-x-4 sm:space-x-6">
            <Image
              src={linkedin}
              alt="LinkedIn"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Link
              href="https://www.linkedin.com/in/kiswaafaq?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="text-[#FF9EAA] font-semibold text-base sm:text-lg hover:bg-[#D76C82] p-2 rounded-lg transition-colors"
            >
              LinkedIn
            </Link>
          </li>
        </ol>
      </div>

      {/* Footer */}
      <footer className="bg-[#F6D6D6] text-blue-400 py-6 mt-8">
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
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:underline">
              Skills
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
