"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component has loaded on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Don't render until mounted to avoid hydration errors

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm transition
        ${isDark
          ? "bg-black text-white border-black hover:border-gray-700 hover:text-gray-200"
          : "bg-white text-black border-zinc-200 hover:border-teal-300 hover:text-teal-700"
        }`}
      aria-label="Toggle light or dark theme"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}