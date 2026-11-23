type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectMeta = {
  role?: string;
  type?: "Personal" | "Academic" | "Assessment" | "Client" | "Professional";
  duration?: string;
  year?: string;
  summaryRole?: string;
  focus?: string;
  outcome?: string;
};

export type ProjectSection = {
  id: string;
  title: string;
  icon?:
    | "target"
    | "clipboard"
    | "search"
    | "scale"
    | "smartphone"
    | "layers"
    | "accessibility"
    | "lightbulb"
    | "chart"
    | "star"
    | "laptop";
  body?: string[];
  bullets?: string[];
  decision?: string;
  tradeOff?: string;
  relatedLink?: Pick<ProjectLink, "label" | "href">;
  image?: ProjectImage;
  sections?: ProjectSection[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: ProjectImage;
  tags?: string[];
  meta?: ProjectMeta;
  image?: ProjectImage;
  links?: ProjectLink[];
  card?: {
    featured?: boolean;
    pitch?: string;
  };
  sections?: ProjectSection[];
};
