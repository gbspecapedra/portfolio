"use client";

import { useEffect, useLayoutEffect, type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

const storageKey = "theme";
const themeClasses = { light: "light", dark: "dark" };
Object.setPrototypeOf(themeClasses, null);

function initializeTheme(key: string) {
  let preference: "light" | "dark" | undefined;
  try {
    const savedTheme = localStorage.getItem(key);
    if (savedTheme === "light" || savedTheme === "dark") {
      preference = savedTheme;
    } else if (savedTheme !== null && savedTheme !== "system") {
      localStorage.removeItem(key);
    }
  } catch {
    // System detection still works when storage is blocked.
  }

  const theme = preference ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.classList.add(theme);
}

function ThemePreferenceSync() {
  const { theme, setTheme } = useTheme();

  // Storage may change after the initial validation, including from another tab.
  useLayoutEffect(() => {
    if (theme && theme !== "light" && theme !== "dark" && theme !== "system") {
      setTheme("system");
    }
  }, [theme, setTheme]);

  useEffect(() => {
    function handleStorageClear(event: StorageEvent) {
      // next-themes handles changes to its key. Storage.clear() reports a null key.
      if (event.key !== null) return;
      try {
        if (event.storageArea === localStorage) setTheme("system");
      } catch {
        // Storage can be unavailable in this document.
      }
    }

    window.addEventListener("storage", handleStorageClear);
    return () => window.removeEventListener("storage", handleStorageClear);
  }, [setTheme]);

  return null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <script suppressHydrationWarning>
        {`(${initializeTheme.toString()})(${JSON.stringify(storageKey)})`}
      </script>
      {/* Use the validated initialization script above in place of the library script. */}
      <NextThemesProvider
        attribute="class"
        storageKey={storageKey}
        defaultTheme="system"
        value={themeClasses}
        enableSystem
        disableTransitionOnChange
        enableColorScheme={false}
        scriptProps={{ type: "application/x-next-themes" }}
      >
        <ThemePreferenceSync />
        {children}
      </NextThemesProvider>
    </>
  );
}
