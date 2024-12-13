import { useTheme } from "@/hooks/useTheme";
import { Moon, Rainbow, Sun } from "lucide-react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full py-2 border-b bg-background/70 backdrop-blur-sm">
      <div className="container flex items-center justify-between w-full px-4 mx-auto">
        {/* Image and Name */}
        <Link to="/">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <Rainbow
                className={`${isDark ? "text-yellow-500" : "text-blue-500"}`}
                size={40}
              />
            </div>
            <label className="tracking-widest cursor-pointer text">
              KLYMATE
            </label>
          </div>
        </Link>

        {/* Search and Toggle Theme */}
        <div className="flex items-center gap-4">
          <Search />
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
    </header>
  );
};

export default Header;
