import { Hero, ContactButton, FloatingNavbar } from "@/components/index";

export default function Home() {
  return (
    <main className="h-dvh w-dvw max-h-screen max-w-7xl flex flex-col items-center justify-center overflow-hidden mx-auto">
      <div className="absolute inset-0 -z-10 h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#b7a5e0,transparent)]"></div>
      </div>
      <div className="h-full w-full flex">
        <ContactButton />
        <FloatingNavbar />
        <Hero />
      </div>
    </main>
  );
}
