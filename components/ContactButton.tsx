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
import { TbBrandFiverr } from "react-icons/tb";
import { CustomLink } from "./CustomLink";

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
            <CustomLink
              title="hello@gisele.dev"
              url="mailto:hello@gisele.dev"
            />
          </div>
          <div className="flex items-center justify-between">
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
            <CustomLink
              url="https://www.fiverr.com/pe/VY7g4re"
              icon={<TbBrandFiverr size={28} />}
              target="_blank"
            />
            <CustomLink
              url="https://wa.link/q1y70s"
              icon={<FaWhatsapp size={28} />}
              target="_blank"
            />
            <CustomLink
              url="https://t.me/gbspecapedra"
              icon={<FaTelegram size={28} />}
              target="_blank"
            />
            <CustomLink
              url="https://discord.com/users/gbspecapedra"
              icon={<FaDiscord size={28} />}
              target="_blank"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
