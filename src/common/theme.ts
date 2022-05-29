import {
  PaletteColorOptions,
  PaletteOptions,
  ThemeOptions,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { colors } from "./colors";

export interface IPaletteOptions extends PaletteOptions {
  third?: PaletteColorOptions;
  gray?: PaletteColorOptions;
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    mlg: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    third: true;
    gray: true;
  }
}

const darkOptions: IPaletteOptions = {
  mode: "dark",
  primary: {
    main: "#fff",
    contrastText: "#f0f0f0",
  },
  secondary: {
    main: "#723F8A",
    contrastText: "#fff",
  },
  third: {
    main: "#9747FF",
    contrastText: "#fff",
  },
  gray: {
    main: colors.darkGray,
    contrastText: "#fff",
  },
  background: {
    paper: "#000",
  },
};
const lightOptions: IPaletteOptions = {
  mode: "light",
  primary: {
    main: "#24244a",
  },
  secondary: {
    main: "#723F8A",
    contrastText: "#fff",
  },
  background: {
    paper: "#000",
  },
};

const commonOptions: ThemeOptions = {
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
    fontSize: 10,
    body1: {
      fontSize: "1.4rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    h1: {
      fontSize: "6.6rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "4.4rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "3.4rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "2.4rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    button: {
      borderRadius: "0.5rem",
      textTransform: "none",
      fontSize: "1.4rem",
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      mlg: 911,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%",
        },
        body: {
          background:
            "linear-gradient(180deg, rgba(7, 16, 24, 0.81) 0%, #0a131b 100%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.8rem 1.4rem",
          minWidth: "15rem",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
};

const getTheme = (isDarkMode: boolean) => {
  const themeMerged = deepmerge(commonOptions, {
    palette: isDarkMode ? darkOptions : lightOptions,
  });
  return createTheme(themeMerged);
};

export { getTheme };
