import Link from "next/link";

export const CustomLink = ({
  url,
  icon,
  title,
  target,
  rel,
}: {
  url: string;
  icon?: React.ReactNode;
  title?: string;
  target?: string;
  rel?: string;
}) => {
  return (
    <Link
      href={url}
      target={target}
      rel={rel}
      className="flex items-center space-x-0.5 text-neutral-800 hover:text-accent hover:underline"
    >
      {icon && <span>{icon}</span>}
      {title && <span className="text-sm">{title}</span>}
    </Link>
  );
};
