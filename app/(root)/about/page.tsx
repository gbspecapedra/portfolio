"use client";

import { Navbar } from "@/components/index";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { about, workExperience, education } from "@/data";
import { skills } from "@/data/skills";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-screen w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#b7a5e0,transparent)]"></div>
      </div>
      <Navbar />
      <div className="h-full w-full flex flex-col p-6 space-y-4 border border-red-700">
        <h1 className="text-xl text-slate-800">I design and code interfaces</h1>
        <div className="flex items-center justify-between">
          <p>text</p>
          <div className="relative w-52 h-64 md:w-80 md:h-96 lg:w-[600px] lg:h-[300px] select-none">
            <Image
              src={about.image}
              alt={about.name}
              fill
              className="rounded-full shadow-md select-none pointer-events-none"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <h2 className="text-xl text-slate-700">
            The skills, tools & technologies I am good at:
          </h2>
          <div className="flex items-center justify-center space-x-3 space-y-2 flex-wrap w-96">
            {skills.map((skill) => (
              <div key={skill.id}>{skill.icon}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-around space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex flex-col sm:w-1/3 border">
            <h1 className="text-lg self-center">Work Experience</h1>
            {workExperience
              .map((w) => (
                <div key={w.id} className="flex items-center mb-1 space-x-2">
                  <div className="relative select-none w-8 h-8">
                    <Image
                      src={w.logo}
                      alt={w.company}
                      fill
                      className="select-none pointer-events-none"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-sm">{w.company}</span>
                    <div className="flex justify-between">
                      <span className="text-xs">{w.role}</span>
                      <span className="text-xs">
                        {w.start} - {w.end ? w.end : "Present"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
              .reverse()}
          </div>

          <div className="flex flex-col sm:w-1/3 border">
            <h1 className="text-lg self-center">Education</h1>
            {education
              .map((e) => (
                <div key={e.id} className="flex items-center mb-1 space-x-2">
                  <div className="relative select-none w-8 h-8">
                    <Image
                      src={e.logo}
                      alt={e.school}
                      fill
                      className="select-none pointer-events-none"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-sm">{e.school}</span>
                    <div className="flex justify-between">
                      <span className="text-xs">
                        {e.degree}, {e.course}
                      </span>
                      <span className="text-xs">
                        {e.start} - {e.end ? e.end : "Present"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    </>
  );
}
