import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

import type { SiteSettings } from "./prismic/map-content";

const externalLinkAttributes = { target: "_blank", rel: "noopener noreferrer" };

export function getContactLinks({ email, linkedin, github }: Pick<SiteSettings, "email" | "linkedin" | "github">) {
  return {
    email: { label: "Email", href: `mailto:${email}`, icon: Mail },
    linkedin: { label: "LinkedIn", href: linkedin, icon: FaLinkedinIn, ...externalLinkAttributes },
    github: { label: "GitHub", href: github, icon: SiGithub, ...externalLinkAttributes },
  };
}
