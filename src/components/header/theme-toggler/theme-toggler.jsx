import themeTogglerStyles from "./theme-toggler.module.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";

export default function ThemeToggler() {
  const [theme, setTheme] = useState(true);

  const themeModeIcon = () => {
    if (theme) {
      return <LightModeIcon color={"inherit"} />;
    } else {
      return <DarkModeIcon />;
    }
  };

  return (
    <div className={themeTogglerStyles.toggler}>
      <button
        onClick={() => setTheme(!theme)}
        className={themeTogglerStyles.toggleButon}
      >
        {themeModeIcon()}
      </button>
    </div>
  );
}
