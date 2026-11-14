import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type NavButtonProps = {
  href?: string;
  label?: string;
  icon?: React.ReactNode;
  variant?: "icon" | "text";
  showTooltip?: boolean;
};

export function NavButton({
  href = "/#projects",
  label = "Back to projects",
  icon = <FiArrowLeft className="h-4 w-4" />,
  variant = "icon",
  showTooltip = true,
}: NavButtonProps) {
  const button = (
    <Button asChild variant="outline" size={variant === "icon" ? "icon" : "sm"}>
      <Link href={href} aria-label={label}>
        {variant === "icon" ? (
          icon
        ) : (
          <span className="flex items-center gap-2">
            {icon}
            {label}
          </span>
        )}
      </Link>
    </Button>
  );

  if (!showTooltip || variant === "text") {
    return button;
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="right">
          <span>{label}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
