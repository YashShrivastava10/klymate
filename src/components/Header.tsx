import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="sticky top-0 z-50 w-full py-2 border-b bg-background/70 backdrop-blur-sm">
      <div className="container flex items-center justify-between w-full px-4 mx-auto">
        <div className="flex flex-col gap-1">
          {/* Image */}
          <img src="" alt="Klymate" />
          <label>KLYMATE</label>
        </div>
        <div className="flex">
          <div>{/* Search */}</div>

          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`transition-all cursor-pointer duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {isDark ? (
              <Sun className="text-yellow-500" />
            ) : (
              <Moon className="text-blue-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
