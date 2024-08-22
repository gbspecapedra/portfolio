"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImage from "./../public/hero.png";
import { Button } from "./ui";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full pt-16 sm:flex-row-reverse sm:pt-0">
      <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] select-none">
        <Image
          src={HeroImage}
          alt="hero"
          fill
          className="rounded-full select-none pointer-events-none"
          onContextMenu={(e) => e.preventDefault()}
        />
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
        <div className="flex space-x-2 pt-2">
          <Link
            href="https://www.linkedin.com/in/gbspecapedra/"
            target="_blank"
            className="text-neutral-800 hover:text-accent"
          >
            <FaLinkedin size={28} />
          </Link>
          <Link
            href="https://github.com/gbspecapedra"
            target="_blank"
            className="text-neutral-800 hover:text-accent"
          >
            <FaGithub size={28} />
          </Link>
        </div>
        <div className="flex pt-2">
          <Button
            variant="secondary"
            className="bg-secondary-300 hover:bg-accent-400/80 text-xs uppercase"
            asChild
          >
            <Link
              href="/files/GiselePecapedraResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get my resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
