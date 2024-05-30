"use client";

import { useState, useEffect } from "react";

import ThemeContext from "@/context/themeContext"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme")!)
      : false;
  const [darkTheme, setdarkTheme] = useState<boolean>(themeFromStorage);

  <ThemeContext.Provider>
    <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
      <div className='dark:text-white/80 dark:bg-black text-[#1e1e1e]'>
        {children}
      </div>
    </div>
  </ThemeContext.Provider>
};

export default ThemeProvider;
