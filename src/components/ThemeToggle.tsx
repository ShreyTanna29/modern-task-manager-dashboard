import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../store/themeSlice";
import { RootState } from "../store/store";
import { Button } from "./ui/button";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Button
      onClick={() => dispatch(toggleTheme())}
      variant="ghost"
      size="icon"
      className="rounded-full w-10 h-10"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
