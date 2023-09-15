"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(
  {} as {
    theme: string;
    toggle: () => void;
  }
);

const getFromLocalStorage = () => {
  // if we are in the browser window (not in the server) then we can access the localStorage API.
  // Because Next.js runs everything in the server first, to not get an error.
  if (typeof window !== "undefined") { 
    const value = localStorage.getItem("theme");
    return value || "light"; // if value is null, then return "light"
  }
  return "light";
};

export const ThemeContextProvider = (
  { children }: { children: React.ReactNode }
) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};