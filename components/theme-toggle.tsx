"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const subscribeToMount = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const themeOptions = [
  {
    theme: "light",
    label: "Light theme",
    icon: Sun,
    selectedClass: "[.light_&]:border-brand-clay/25 [.light_&]:bg-background [.light_&]:text-brand-clay [.light_&]:shadow-xs",
  },
  {
    theme: "dark",
    label: "Dark theme",
    icon: Moon,
    selectedClass: "dark:border-brand-clay/25 dark:bg-background dark:text-brand-clay dark:shadow-xs",
  },
] as const;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeToMount, getClientSnapshot, getServerSnapshot);

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-border bg-accent/50 p-0.5 text-muted-foreground"
    >
      {themeOptions.map(({ theme, label, icon: Icon, selectedClass }) => (
        <Button
          key={theme}
          type="button"
          variant="ghost"
          size="icon"
          aria-label={label}
          aria-pressed={mounted ? resolvedTheme === theme : undefined}
          onClick={() => setTheme(theme)}
          className={cn("rounded-full border border-transparent", selectedClass)}
        >
          <Icon aria-hidden="true" />
        </Button>
      ))}
    </div>
  );
}
