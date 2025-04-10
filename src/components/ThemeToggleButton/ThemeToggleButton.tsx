import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";

export const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Dark Mode"
      className={`bg-gray-800 dark:bg-white border-gray-200 text-blue-600 dark:border-gray-700 dark:text-yellow-300 rounded-full p-2 border transition-colors `}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
