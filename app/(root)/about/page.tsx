import { Navbar } from "@/components/index";

export default function About() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-screen w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#b7a5e0,transparent)]"></div>
      </div>
      <Navbar />
      <div className="h-full w-full flex"></div>
    </>
  );
}
