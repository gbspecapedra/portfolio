"use client";

import * as React from "react";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  email: string;
  className?: string;
  withToast?: boolean; // whether to show toast notifications
};

export function CopyEmailButton({ email, className, withToast = true }: Props) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);

      if (withToast) {
        toast.success("Email copied", {
          description: `${email} is now in your clipboard.`,
          duration: 2000,
        });
      }
    } catch {
      if (withToast) toast.error("Couldn't copy email");
    }
  }

  return (
    <TooltipProvider delayDuration={120}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy email to clipboard"
            className={cn(
              [
                "group inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs",
                "border border-foreground/15",
                "bg-background/40",
                "hover:bg-foreground/10 hover:border-foreground/30",
                "dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/30",
                "transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-ring",
                "active:scale-[0.98]",
              ].join(" "),
              className
            )}
          >
            <span className="relative">
              <Copy
                className={cn(
                  "h-3.5 w-3.5 transition-all duration-200",
                  copied ? "scale-90 opacity-0" : "scale-100 opacity-100"
                )}
              />
              <Check
                className={cn(
                  "absolute left-0 top-0 h-3.5 w-3.5 transition-all duration-200",
                  copied ? "scale-100 opacity-100" : "scale-90 opacity-0"
                )}
              />
            </span>

            <span className="leading-none">{copied ? "Copied" : "Copy"}</span>
          </button>
        </TooltipTrigger>

        <TooltipContent className="text-xs">Copy email</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
