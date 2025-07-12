"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false); // State to track mount status

  // useEffect runs only on the client-side after initial render
  React.useEffect(() => {
    setMounted(true);
  }, [])

  const handleThemeToggle = () => {
    console.log("Current theme:", resolvedTheme);
    if (resolvedTheme == "dark") {
      setTheme("light");
    }
    else {
      setTheme("dark");
    }
  };
  // If component is not mounted yet, render a placeholder or null
  // This prevents the hydration mismatch because the client won't try to
  // render the actual icons until `resolvedTheme` is stable.
  if (!mounted) {
    return <Button size="icon" disabled />;
  }
  return (
    <Button size="icon" onClick={() => handleThemeToggle()} >
      {resolvedTheme === "dark" ? (
        <Sun className="rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}