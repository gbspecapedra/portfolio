import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects, GrUserFemale } from "react-icons/gr";

export const FloatingNavbar = () => {
  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white/30 backdrop-blur-md shadow-xl rounded-full py-3 px-8 mt-4 space-x-8">
      <Link
        href="/"
        className="text-neutral-800 hover:text-accent hover:underline"
      >
        <span className="block sm:hidden">
          <AiOutlineHome size={28} />
        </span>
        <span className="hidden text-sm !cursor-pointer sm:block">Home</span>
      </Link>
      <Link
        href="/"
        className="text-neutral-800 hover:text-accent hover:underline"
      >
        <span className="block sm:hidden">
          <GrUserFemale size={24} />
        </span>
        <span className="hidden text-sm !cursor-pointer sm:block">About</span>
      </Link>
      <Link
        href="/"
        className="text-neutral-800 hover:text-accent hover:underline"
      >
        <span className="block sm:hidden">
          <GrProjects size={22} />
        </span>
        <span className="hidden text-sm !cursor-pointer sm:block">
          Projects
        </span>
      </Link>
    </nav>
  );
};
