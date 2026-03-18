import { create } from "zustand";

type ThemeState = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export const userThemeState = create<ThemeState>((set) => ({
  darkMode: localStorage.getItem("theme") === "dark",
  toggleTheme: () => {
    set((state) => {
      const newTheme = !state.darkMode;
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return { darkMode: newTheme };
    });
  },
}));
