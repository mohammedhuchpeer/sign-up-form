declare module "@mui/material/styles/createTheme" {
  interface Theme {
    mainContentPadding?: number;
  }

  interface ThemeOptions {
    mainContentPadding?: number;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    alpha: (
      color: React.CSSProperties["color"],
      opacity: number
    ) => React.CSSProperties["color"];
    colors: {
      while: React.CSSProperties["color"];
      black: React.CSSProperties["color"];
    };
  }

  interface PaletteOptions {
    alpha: (
      color: React.CSSProperties["color"],
      opacity: number
    ) => React.CSSProperties["color"];
    colors: {
      while: React.CSSProperties["color"];
      black: React.CSSProperties["color"];
    };
  }
}

export {};
