import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const externalLinkAttributes = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export const contactEmail = "gbspecapedra@gmail.com";

export const contactLinks = {
  email: {
    label: "Email",
    href: `mailto:${contactEmail}`,
    icon: Mail,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giselepecapedra",
    icon: FaLinkedinIn,
    ...externalLinkAttributes,
  },
  github: {
    label: "GitHub",
    href: "https://github.com/gbspecapedra",
    icon: SiGithub,
    ...externalLinkAttributes,
  },
};
