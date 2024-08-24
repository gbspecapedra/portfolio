import Link from "next/link";
import { AiOutlineCode, AiOutlineHome } from "react-icons/ai";
import { GrUserFemale } from "react-icons/gr";
import { Button } from "./ui";
import { CustomLink } from "@/components/index";

export const Navbar = ({ isFloating = false }: { isFloating?: boolean }) => {
  return (
    <nav
      className={`flex items-center justify-center backdrop-blur-md shadow-xl py-1.5 px-8 space-x-8 ${
        isFloating
          ? "absolute top-0 left-1/2 transform -translate-x-1/2 bg-white/30 rounded-full mt-4"
          : "w-full bg-transparent pt-4"
      }`}
    >
      <CustomLink url="/" title="Home" icon={<AiOutlineHome size={14} />} />
      <CustomLink
        url="/about"
        title="About"
        icon={<GrUserFemale size={12} />}
      />
      <Button variant="link" disabled className="m-0 p-0">
        <CustomLink
          url="/projects"
          title="Projects"
          icon={<AiOutlineCode size={14} />}
        />
      </Button>
    </nav>
  );
};
