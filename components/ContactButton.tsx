import { MdEmail } from "react-icons/md";
import { Button, Popover, PopoverContent, PopoverTrigger } from "./ui";
import { GrContact } from "react-icons/gr";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { TbBrandFiverr } from "react-icons/tb";

export const ContactButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="absolute bottom-0 right-0 transform -translate-x-0 h-14 w-14 bg-white/30 backdrop-blur-md shadow-xl rounded-full mr-5 mb-5 hover:text-accent"
        >
          <GrContact size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="left" align="end" alignOffset={60}>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">
              Let&apos;s get in touch
            </h4>
            <p className="text-sm text-muted-foreground">
              I&apos;m always open to discuss new opportunities.
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <MdEmail />
            <Link
              href="mailto:hello@gisele.dev"
              className="text-sm text-neutral-800 hover:text-accent"
            >
              hello@gisele.dev
            </Link>
          </div>
          <div className="flex items-center justify-between">
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
            <Link
              href="https://wa.link/q1y70s"
              target="_blank"
              className="text-neutral-800 hover:text-accent"
            >
              <FaWhatsapp size={28} />
            </Link>
            <Link
              href="https://t.me/gbspecapedra"
              target="_blank"
              className="text-neutral-800 hover:text-accent"
            >
              <FaTelegram size={28} />
            </Link>
            <Link
              href="https://discord.com/users/gbspecapedra"
              target="_blank"
              className="text-neutral-800 hover:text-accent"
            >
              <FaDiscord size={28} />
            </Link>
            <Link
              href="https://www.fiverr.com/pe/VY7g4re"
              target="_blank"
              className="text-neutral-800 hover:text-accent"
            >
              <TbBrandFiverr size={28} />
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
