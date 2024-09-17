"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CustomLink } from "./CustomLink";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full pt-16 sm:flex-row-reverse sm:pt-0">
      <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] select-none">
        <Image
          src="/assets/images/hero.png"
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
          <CustomLink
            url="https://www.linkedin.com/in/gbspecapedra/"
            icon={<FaLinkedin size={28} />}
            target="_blank"
          />
          <CustomLink
            url="https://github.com/gbspecapedra"
            icon={<FaGithub size={28} />}
            target="_blank"
          />
        </div>
        <div className="flex pt-2">
          <Button
            variant="secondary"
            className="bg-secondary-300 hover:bg-accent-400/80 text-xs uppercase"
            onClick={() =>
              sendGAEvent("event", "buttonClicked", { value: "resume" })
            }
            asChild
          >
            <Link
              href="assets/files/GiselePecapedraResume.pdf"
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
