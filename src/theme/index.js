const defaultColors = {
  white: "#ffffff",
  black: "#000000",
  base: "#4557F8",
  danger: "#ff6969",
  menubackground: "#F6F6FA",
};

const toastBorderColors = {
  success: "#00BA88",
  error: "#F56A58",
  info: "#276EF1",
  warning: "#F3CD82",
};

const greyVariants = {
  grey: "#828282",
  grey100: "#f8f9f9",
  grey200: "#e9ebed",
  grey300: "#d8dcde",
  grey400: "#c2c8cc",
  grey500: "#87929d",
  grey600: "#68737d",
  grey700: "#49545C",
  grey800: "#2f3941",
};

const purpleVariants = {
  purple800: "#342DF4",
  purple700: "#4557F8",
  purple600: "#7280FA",
  purple500: "#5E5CE6",
};

const greenVariants = {
  green800: "#00956D",
  green700: "#00BA88",
  green600: "#33C8A0",
  green500: "#34C759",
};

const colors = {
  font: {
    primary: "#2F3941",
    secondary: "#49545C",
    ...defaultColors,
    ...greyVariants,
    ...purpleVariants,
    ...greenVariants,
  },
  background: {
    parentView: "#ffffff",
    primary: "#ffffff",
    secondary: "#F6F6FA",
    ...defaultColors,
    ...greyVariants,
    ...purpleVariants,
    ...greenVariants,
  },
  border: {
    primary: "#E9EBED",
    secondary: "#C2C8CC",
    ...greyVariants,
    ...defaultColors,
    ...purpleVariants,
  },
  toast: {
    ...toastBorderColors,
  },
};

const baseTheme = {
  colors,
  fonts: {
    // We can add below commented fonts later as follows. Also add font faces in index.web.js for the web.
    // https://www.bigbinary.com/learn-react-native/adding-custom-fonats

    // sf100: "SFProText-Thin",
    // sf200: "SFProText-ExtraLight",
    // sf300: "SFProText-Light",
    // sf800: "SFProText-ExtraBold",
    // sf900: "SFProText-Black",

    sf400: "SFProText-Regular",
    sf500: "SFProText-Medium",
    sf600: "SFProText-Semibold",
    sf700: "SFProText-Bold",
  },
  lineHeights: [24],
  fontSizes: {
    "3xs": 10,
    "2xs": 12,
    xs: 13,
    s: 14,
    m: 15,
    l: 16,
    xl: 17,
    "2xl": 18,
    "3xl": 20,
    "4xl": 22,
    "5xl": 30,
  },
};

//aliases
baseTheme.lineHeights.note = baseTheme.lineHeights[0] + "px";

export const theme = {
  ...baseTheme,
  textStyles: {
    defaultTextStyle: {
      color: baseTheme.colors.font.primary,
    },
    header: {
      color: baseTheme.colors.font.primary,
      fontSize: baseTheme.fontSizes["3xl"],
      fontFamily: baseTheme.fonts.sf700,
    },
    modalHeader: {
      color: baseTheme.colors.font.black,
      fontSize: baseTheme.fontSizes["xl"],
      fontFamily: baseTheme.fonts.sf600,
    },
    body: {
      color: baseTheme.colors.font.grey500,
      fontSize: baseTheme.fontSizes.s,
    },
    subtext: {
      color: baseTheme.colors.font.primary,
      fontSize: baseTheme.fontSizes["2xs"],
    },

    // buttonTextStyles
    solid: {
      color: baseTheme.colors.font.white,
    },
    inverse: {
      color: baseTheme.colors.font.base,
    },
    text: {
      color: baseTheme.colors.font.base,
    },
  },
  buttons: {
    solid: {
      border: 2,
      borderColor: baseTheme.colors.background.base,
      backgroundColor: baseTheme.colors.background.base,
    },
    inverse: {
      border: 2,
      borderColor: baseTheme.colors.border.base,
      backgroundColor: baseTheme.colors.background.white,
    },
    text: {
      color: baseTheme.colors.font.grey800,
      backgroundColor: baseTheme.colors.background.white,
    },
  },
};
