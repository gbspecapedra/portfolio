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
  variant?: "icon" | "text";
};

export function NavButton({ variant = "icon" }: NavButtonProps) {
  const label = "Back to projects";
  const icon = <FiArrowLeft aria-hidden="true" className="size-4" />;
  const button = (
    <Button
      asChild
      variant="outline"
      size={variant === "icon" ? "icon" : "sm"}
      className="min-h-11 min-w-11 rounded-xl bg-background/75 px-3.5 font-semibold motion-reduce:transition-none"
    >
      <Link href="/#projects" aria-label={label}>
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

  if (variant === "text") {
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
