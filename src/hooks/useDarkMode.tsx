import { useEffect, useState } from "react";

const STORAGE_KEY = "tailwind-playground-dark-mode";

export const useDarkMode = () => {
  const [enabled, setEnabled] = useState<boolean>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY, enabled.toString());
  }, [enabled]);

  return [enabled, setEnabled] as const;
};
