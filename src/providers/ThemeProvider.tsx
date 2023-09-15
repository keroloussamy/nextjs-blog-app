"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

/*
 The need for this provider is if you added the useContext(ThemeContext) direct on the layout.tsx to wrap the whole app,
 so you will need to make layout.tsx a client component, 
 but instead you can make this provider to wrap the whole app and call the useContext(ThemeContext) hook inside it.
 And leave the layout.tsx as a server component.
*/

 const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  // Just to make sure that the theme is mounted on the client side.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
