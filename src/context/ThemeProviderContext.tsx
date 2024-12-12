import { createContext } from "react";

export type Theme = "light" | "dark" | "system";

export type ThemeProviderProps = {
  defaultTheme?: Theme;
  children: JSX.Element;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
