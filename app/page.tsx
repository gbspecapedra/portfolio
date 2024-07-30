import Image from "next/image";
import HeroImage from "../public/hero.png";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-dvh w-dvh flex flex-col items-center bg-background">
      <nav className="w-full flex justify-center items-center p-3 border border-x-0 border-t-0">
        {/* <MdOutlineMenu size={34} />
        <button
          type="button"
          disabled
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Let&apos;s talk
        </button> */}
        <div className="text-primary text-base">MORE COMING SOON</div>
      </nav>
      <section className="w-full h-full flex flex-col-reverse px-3 items-center justify-center gap-4 lg:gap-0 lg:flex-row lg:justify-end">
        <div className="lg:w-1/3">
          <div className="gap-3">
            <div className="text-primary-900 text-4xl lg:text-6xl font-bold">
              Hi, I&apos;m <span className="gradient-text">Gisele</span>
            </div>
            <div className="flex justify-center items-center gap-4 lg:justify-normal">
              <div className="lg:w-[13.8rem] lg:h-[0.5px] lg:bg-slate-400" />
              <div className="text-primary-900 text-base lg:text-2xl">
                UI Engineer
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-96 h-96 lg:h-full lg:w-[800px]">
          <Image
            src={HeroImage}
            alt="hero"
            fill
            className="rounded-full lg:rounded-none lg:rounded-br-3xl"
          />
        </div>
      </section>
      <footer className="w-full flex justify-between items-center p-3 border border-x-0 border-b-0 lg:border-none">
        <div className="flex flex-row">
          <Link href="https://www.linkedin.com/in/gpecapedra/" target="_blank">
            <AiFillLinkedin size={34} />
          </Link>
          <Link href="https://github.com/gpecapedra" target="_blank">
            <AiOutlineGithub size={34} />
          </Link>
        </div>
        <span>hello@gisele.dev</span>
      </footer>
    </main>
  );
}
