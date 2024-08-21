import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects, GrUserFemale } from "react-icons/gr";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const FloatingNavbar = () => {
  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white/30 backdrop-blur-md shadow-xl rounded-full py-3 px-8 mt-4 space-x-8">
      <Link
        href="undefined"
        className="text-neutral-800 hover:text-accent hover:underline"
      >
        <span className="block sm:hidden">
          <AiOutlineHome size={28} />
        </span>
        <span className="hidden text-sm sm:block">Home</span>
      </Link>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="undefined" className="text-gray-400 cursor-not-allowed">
            <span className="block sm:hidden">
              <GrUserFemale size={24} />
            </span>
            <span className="hidden text-sm sm:block">About</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-white-30 backdrop-blur-md">
          <p>coming soon</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="undefined" className="text-gray-400 cursor-not-allowed">
            <span className="block sm:hidden">
              <GrProjects size={22} />
            </span>
            <span className="hidden text-sm sm:block">Projects</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-white-30 backdrop-blur-md">
          <p>coming soon</p>
        </TooltipContent>
      </Tooltip>
    </nav>
  );
};
