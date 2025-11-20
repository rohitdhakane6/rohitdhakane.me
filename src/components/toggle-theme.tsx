"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useClickSound } from "@/hooks/use-click-sound";

export function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const playClick = useClickSound();

  const handleToggle = useCallback(() => {
    playClick();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme, playClick]);

  return (
    <Button variant="outline" size="icon" onClick={handleToggle}>
      <MoonStarIcon className="hidden dark:block" />
      <SunIcon className="block dark:hidden" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
