"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ToggleMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // this will run after the component mounts to ensure no hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  function handleThemeMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  if (!mounted) return null;

  return (
    <Button onClick={handleThemeMode} variant="outline" size="icon">
      {theme === "light" ? <Moon width={18} height={18} /> : <Sun width={18} height={18} />}
    </Button>
  );
}
