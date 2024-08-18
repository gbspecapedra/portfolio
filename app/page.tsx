import Image from "next/image";
import HeroImage from "../public/hero.png";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import { GrProjects, GrUserFemale } from "react-icons/gr";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-dvh w-dvw max-h-screen max-w-7xl flex flex-col items-center justify-center overflow-hidden mx-auto">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      <div className="h-full w-full flex">
        <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-8 py-2 px-5 mt-4 gap-6">
          <Link
            href="/"
            className="text-neutral-800 hover:text-accent hover:underline"
          >
            <span className="block sm:hidden">
              <AiOutlineHome size={28} />
            </span>
            <span className="hidden text-lg !cursor-pointer sm:block">
              Home
            </span>
          </Link>
          <Link
            href="/"
            className="text-neutral-800 hover:text-accent hover:underline"
          >
            <span className="block sm:hidden">
              <GrUserFemale size={24} />
            </span>
            <span className="hidden text-lg !cursor-pointer sm:block">
              About
            </span>
          </Link>
          <Link
            href="/"
            className="text-neutral-800 hover:text-accent hover:underline"
          >
            <span className="block sm:hidden">
              <GrProjects size={22} />
            </span>
            <span className="hidden text-lg !cursor-pointer sm:block">
              Projects
            </span>
          </Link>
        </nav>

        <div className="flex flex-col items-center justify-center gap-4 w-full pt-16 sm:flex-row-reverse sm:pt-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px]">
            <Image src={HeroImage} alt="hero" fill className="rounded-full" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-neutral-800 text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I&apos;m <span className="gradient-text">Gisele</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-slate-600 text-base md:text-lg lg:text-xl">
                UI Engineer
              </div>
            </div>
            <div className="flex pt-2">
              <Link
                href="https://www.linkedin.com/in/gbspecapedra/"
                target="_blank"
              >
                <AiFillLinkedin size={30} />
              </Link>
              <Link href="https://github.com/gbspecapedra" target="_blank">
                <AiOutlineGithub size={30} />
              </Link>
            </div>
            <div className="flex pt-2">
              <Button
                variant="secondary"
                className="bg-secondary-300 hover:bg-secondary-400/80 text-xs uppercase"
              >
                Get my resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
