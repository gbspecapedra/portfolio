import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects, GrUserFemale } from "react-icons/gr";
import { Button } from "./ui";

export const FloatingNavbar = () => {
  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white/30 backdrop-blur-md shadow-xl rounded-full py-1.5 px-8 mt-4 space-x-8">
      <Link
        href="/"
        className="text-neutral-800 hover:text-accent hover:underline"
      >
        <span className="block sm:hidden">
          <AiOutlineHome size={28} />
        </span>
        <span className="hidden text-sm sm:block">Home</span>
      </Link>

      <Button variant="link" disabled className="m-0 p-0">
        <Link
          href="/about"
          className="text-neutral-800 hover:text-accent hover:underline"
        >
          <span className="block sm:hidden">
            <GrUserFemale size={24} />
          </span>
          <span className="hidden text-sm sm:block">About</span>
        </Link>
      </Button>

      <Button variant="link" disabled className="m-0 p-0">
        <Link
          href="/projects"
          className="text-neutral-800 hover:text-accent hover:underline"
        >
          <span className="block sm:hidden">
            <GrProjects size={22} />
          </span>
          <span className="hidden text-sm sm:block">Projects</span>
        </Link>
      </Button>
    </nav>
  );
};
