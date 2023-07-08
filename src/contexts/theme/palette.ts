import { ShapeOptions } from "@mui/system";
import {
  PaletteOptions,
  BreakpointsOptions,
  ThemeOptions,
  responsiveFontSizes,
  Theme,
} from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import {
  IColors,
  IconColors,
  TertiaryColors,
  OtherColors,
  ComponentColors,
} from "./types";
import createMuiTheme from "@mui/material/styles/createTheme";
import { alpha, pxToRem } from "./constant";

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
      gray: IColors;
      red: IColors;
      orange: IColors;
      sand: IColors;
      green: IColors;
      iceBlue: IColors;
      glacier: IColors;
      coreBlue: IColors;
      blue: IColors;
      purple: IColors;
      lilac: IColors;
      warmGray: IColors;
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
      gray: IColors;
      red: IColors;
      orange: IColors;
      sand: IColors;
      green: IColors;
      iceBlue: IColors;
      glacier: IColors;
      coreBlue: IColors;
      blue: IColors;
      purple: IColors;
      lilac: IColors;
      warmGray: IColors;
    };
    icon: IconColors;
    tertiary: TertiaryColors;
    other: OtherColors;
    componentColors: ComponentColors;
  }

  interface SimplePaletteColorOptions {
    primary?: string;
    secondary?: string;
    postive?: string;
    negative?: string;
    warning?: string;
    interactive?: string;
    white?: string;
    sand?: string;
    dark?: string;
    seal?: string;
    darkBlue?: string;
    lilacViolet?: string;
    darkOrange?: string;
    chickLime?: string;
    mediumSeaGreen?: string;
    carolinaBlue?: string;
    lightAquaGreen?: string;
    mediumAquaGreen?: string;
    indianRed?: string;
    warmGray?: string;
    darkPurple?: string;
    glacierBlue?: string;
    lightGray?: string;
    mydocsGray?: string;
    dimGray?: string;
    primaryBackground?: string;
    secondaryBackground?: string;
    darkBackground?: string;
    divider?: string;
    stroke?: string;
    buttonRed?: string;
  }

  interface PaletteColor {
    primary?: string;
    secondary?: string;
    postive?: string;
    negative?: string;
    warning?: string;
    interactive?: string;
    white?: string;
    sand?: string;
    seal?: string;
    darkBlue?: string;
    lilacViolet?: string;
    darkOrange?: string;
    chickLime?: string;
    mediumSeaGreen?: string;
    carolinaBlue?: string;
    lightAquaGreen?: string;
    mediumAquaGreen?: string;
    indianRed?: string;
    warmGray?: string;
    darkPurple?: string;
    glacierBlue?: string;
    lightGray?: string;
    mydocsGray?: string;
    dimGray?: string;
    primaryBackground?: string;
    secondaryBackground?: string;
    darkBackground?: string;
    divider?: string;
    stroke?: string;
    buttonRed?: string;
  }

  interface BreakpointOverides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
    bigScreen: true;
  }
}

const palette: PaletteOptions = {
  alpha,
  mode: "light",
  colors: {
    gray: {
      0: "#f4f4f5",
      5: "#eaeaec",
      10: "#dfdee2",
      20: "#d5d5da",
      30: "#c0bfc7",
      40: "#ababb5",
      50: "#9695a2",
      60: "#828190",
      70: "#6d6c7d",
      80: "#58576b",
      90: "#444258",
      100: "#2f2d46",
    },
    red: {
      0: "#fff9f8",
      5: "#fbedea",
      10: "#f5d4cc",
      20: "#eba191",
      30: "#e58772",
      40: "#e06e54",
      50: "#db5537",
      60: "#c54c31",
      70: "#ba482e",
      80: "#a93f27",
      90: "#9e3b24",
      100: "#8d321d",
    },
    orange: {
      0: "#fff9f4",
      5: "#fbe7cc",
      10: "#f9dcb3",
      20: "#f6c580",
      30: "#f4b966",
      40: "#f2ad4c",
      50: "#f0a233",
      60: "#ee9619",
      70: "#ed8b00",
      80: "#d57d00",
      90: "#bd6f00",
      100: "#a56100",
    },
    sand: {
      0: "#fcfaef",
      5: "#f9f6de",
      10: "#f7f1ce",
      20: "#f1e8ad",
      30: "#efe49d",
      40: "#ecdf8d",
      50: "#eadb7c",
      60: "#e7d66c",
      70: "#e5d25c",
      80: "#cebd52",
      90: "#b7a849",
      100: "#9f9240",
    },
    green: {
      0: "#fafcfa",
      5: "#edf6f3",
      10: "#e2f1ea",
      20: "#c5e3d6",
      30: "#b2dac9",
      40: "#9fd1bb",
      50: "#8bc7ae",
      60: "#78bea0",
      70: "#65b593",
      80: "#51ac85",
      90: "#38916b",
      100: "#32815d",
    },
    iceBlue: {
      0: "#f4f4f5",
      5: "#eaeaec",
      10: "#dfdee2",
      20: "#d5d5da",
      30: "#c0bfc7",
      40: "#ababb5",
      50: "#9695a2",
      60: "#828190",
      70: "#a4bcba",
      80: "#7f9291",
      90: "#6c7d7c",
      100: "#5a6867",
    },
    glacier: {
      0: "#f4f4f5",
      5: "#eaeaec",
      10: "#dfdee2",
      20: "#d5d5da",
      30: "#c0bfc7",
      40: "#ababb5",
      50: "#9695a2",
      60: "#828190",
      70: "#6d6c7d",
      80: "#58576b",
      90: "#444258",
      100: "#2f2d46",
    },
    coreBlue: {
      0: "#f4f4f5",
      5: "#eaeaec",
      10: "#dfdee2",
      20: "#d5d5da",
      30: "#c0bfc7",
      40: "#ababb5",
      50: "#9695a2",
      60: "#828190",
      70: "#6d6c7d",
      80: "#58576b",
      90: "#444258",
      100: "#2f2d46",
    },
    blue: {
      0: "#f4f4f5",
      5: "#eaeaec",
      10: "#dfdee2",
      20: "#d5d5da",
      30: "#c0bfc7",
      40: "#ababb5",
      50: "#9695a2",
      60: "#828190",
      70: "#6d6c7d",
      80: "#58576b",
      90: "#444258",
      100: "#2f2d46",
    },
    purple: {
      0: "#f4f4f5",
      5: "#eaeaec",
      10: "#dfdee2",
      20: "#d5d5da",
      30: "#c0bfc7",
      40: "#ababb5",
      50: "#9695a2",
      60: "#828190",
      70: "#6d6c7d",
      80: "#58576b",
      90: "#444258",
      100: "#2f2d46",
    },
    lilac: {
      0: "#f4f4f5",
      5: "#eaeaec",
      10: "#dfdee2",
      20: "#d5d5da",
      30: "#c0bfc7",
      40: "#ababb5",
      50: "#9695a2",
      60: "#828190",
      70: "#6d6c7d",
      80: "#58576b",
      90: "#444258",
      100: "#2f2d46",
    },
    warmGray: {
      0: "#f4f4f5",
      5: "#eaeaec",
      10: "#dfdee2",
      20: "#d5d5da",
      30: "#c0bfc7",
      40: "#ababb5",
      50: "#9695a2",
      60: "#828190",
      70: "#6d6c7d",
      80: "#58576b",
      90: "#444258",
      100: "#2f2d46",
    },
    while: "#ffffff",
    black: "#000000",
  },
  action: {
    active: "rgba(107,99,161,0.24)",
    activatedOpacity: 0.24,
    disabled: "#dfdee2",
    disabledBackground: "#e2ded9",
    disabledOpacity: 0,
    focus: "rgba(47,45,70,.12)",
    focusOpacity: 0.12,
    hover: "rgba(47,45,70,0.04)",
    hoverOpacity: 0.4,
    selected: "rgba(47,45,70,012)",
    selectedOpacity: 0.12,
  },
  error: {
    main: "#ba482e",
    dark: "#9e3b24",
    light: "#db5537",
    contrastText: "#ffffff",
  },
  primary: {
    main: "#ba482e",
    dark: "#9e3b24",
    light: "#db5537",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#ba482e",
    dark: "#9e3b24",
    light: "#db5537",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#ba482e",
    dark: "#9e3b24",
    light: "#db5537",
    contrastText: "#ffffff",
  },
  info: {
    main: "#ba482e",
    dark: "#9e3b24",
    light: "#db5537",
    contrastText: "#ffffff",
  },
  success: {
    main: "#ba482e",
    dark: "#9e3b24",
    light: "#db5537",
    contrastText: "#ffffff",
  },
  text: {
    primary: "#35334E",
    secondary: "rgba(53,51,78,0.6)",
    disabled: "rgba(53,51,78,0.38)",
  },
  icon: {
    main: "",
    primary: "",
    secondary: "",
    positive: "",
    negative: "",
    warning: "",
    interactive: "",
    white: "#ffffff",
  },
  tertiary: {
    main: "",
    sand: "",
    dark: "",
    seal: "",
    darkBlue: "",
    darkOrange: "",
    chicLime: "",
    mediumAquaGreen: "",
    mediumSeaGreen: "",
    carolinaBlue: "",
    lighAquaGreen: "",
    mydocsGray: "",
    indianRed: "",
    interactiveGray: "",
    warmGray: "",
    darkPurple: "",
    glacierBlue: "",
    lightGray: "",
    lilacVoilet: "",
    dimGray: "",
  },
  other: {
    main: "",
    primaryBackground: "",
    secondaryBackground: "",
    darkBackground: "",
    divider: "",
    stroke: "",
    buttonRed: "",
  },
  componentColors: {
    component: {
      primaryCTADisabled: "",
      primaryCTAEnabled: "",
      outlineDisabled: "",
      outlineEnabled: "",
      fillLight: "",
      fillPrefilled: "",
      fillWhite: "",
      dividerDark: "",
      dividerLight: "",
    },
    surface: {
      dark: "",
      medium: "",
      light: "",
      white: "",
      scrim: "",
    },
    textIconOnDark: {
      primary: "",
      secondary: "",
      disabled: "",
      interactive: "",
    },
    textIconOnLight: {
      primary: "",
      secondary: "",
      disabled: "",
      interactive: "",
    },
    textStatusOnDark: {
      poisitive2: "",
      positive: "",
      information: "",
      success: "",
      warning: "",
      negative: "",
    },
    textStatusOnLight: {
      poisitive2: "",
      positive: "",
      information: "",
      success: "",
      warning: "",
      negative: "",
    },
    stateOnDark: {
      hover: "",
      focusPressed: "",
      selected: "",
      active: "",
      new: "",
      dragged: "",
    },
    stateOnLight: {
      hover: "",
      focusPressed: "",
      selected: "",
      active: "",
      new: "",
      dragged: "",
    },
    surfaceStatusDark: {
      positive2: "",
      positive: "",
      information: "",
      success: "",
      warning: "",
      negative: "",
    },
    surfaceStatusLight: {
      positive2: "",
      positive: "",
      information: "",
      success: "",
      warning: "",
      negative: "",
    },
    statusOnDark: {
      positive2: "",
      positive: "",
      information: "",
      success: "",
      warning: "",
      negative: "",
    },
    statusOnLight: {
      positive2: "",
      positive: "",
      information: "",
      success: "",
      warning: "",
      negative: "",
    },
    band: {
      eggPlant: "",
      warmGray: "",
      glacierBlue: "",
    },
  },
};

const typography: TypographyOptions = {
  htmlFontSize: 16,
  fontFamily: ["Google sans"].join(","),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};

const components = {
  MuiTypography: {
    styleOverrides: {
      root: {},
      colorSecondary: {
        color: "#828190",
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: "12px",
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        border: ".5px solid #2f2d46",
        borderRadius: 0,
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        color: "rgba(53,51,78,0.6)",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "28px",
        padding: "6px 16px",
        fontWeight: "bold",
      },
      label: {
        fontFamily: "Product sans",
        fontSize: pxToRem(14),
        textTransform: "capitalize",
      },
      containedSecondary: {},
      textPrimary: {
        "&$checked": {
          color: "#328b85",
        },
      },
    },
  },
};

const spacing = 8;
const shape: ShapeOptions = {
  borderRadius: 2,
};

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export const createTheme = (options: ThemeOptions): Theme => {
  return responsiveFontSizes(createMuiTheme({ ...options }));
};

const appTheme = createMuiTheme({
  mixins: {},
  palette,
  components,
  typography,
  spacing,
  shape,
  breakpoints,
});

export default appTheme;
