"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function Themer() {
  const { setTheme, theme } = useTheme();

  function switcher() {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;

      case "light":
        setTheme("dark");
        break;
    }
  }

  return (
    <Button type="button" variant="outline" size="icon" onClick={switcher}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
